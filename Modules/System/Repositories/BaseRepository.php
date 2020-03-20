<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 27 Sep 2019
 * Time: 9:08 AM
 */

namespace Modules\System\Repositories;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\UploadedFile;
use Modules\System\Contracts\FilterableModel;
use Modules\System\Http\Resources\BaseApiResource;
use Modules\System\Traits\SystemRepositoryTrait;

abstract class BaseRepository
{
    use SystemRepositoryTrait;

    protected $exclude_fields = [

    ];

    /**
     * @var Model
     */
    protected $model;

    /**
     * @var array
     */
    public $payload;

    /**
     * List of laravel model events that should be automatically listened to
     *
     * @var array
     */
    protected $model_events = [];

    /**
     * BaseRepository constructor.
     * @param Model $model
     * @throws \Exception
     */
    public function __construct(Model $model)
    {
        $this->setModel($model);
        $this->registerEventHandlers();
    }


    /**
     * @throws \Exception
     */
    public function registerEventHandlers()
    {
        foreach ($this->model_events as $event){
            $event = strtolower($event);
            $handler = $event . '_event_handler';

            if(method_exists($this, $handler)){
                $this->model::$event(function(Model $model) use ($handler){
                    $this->$handler($model);
                });
            } else {
                throw new \Exception(new \Exception('Method ' . '"' . $handler . '" does not exist!'));
            }
        }
    }

    /**
     * @param Model $model
     */
    protected function setModel(Model $model): void
    {

        $this->model = $model;

    }

    /**
     * @return Model
     */
    public function getModel(): Model
    {
        return $this->model;
    }

    public function getModelById($id)
    {
        return $this->model->newModelQuery()->find($id);
    }

    /**
     * @param array $payload
     * @return BaseRepository
     */
    public function initSave(array $payload)
    {
        $this->payload = $payload;

        $edit = isset($this->payload['id']);

        $model = $edit ? $this->getModelById($this->payload['id']) : $this->model->newInstance();

        $this->setModel($model);

        return $this;
    }

    /**
     * @param \Closure|null $custom_fill_model
     * @param array $exclude_fields
     * @return $this
     */
    public function fillModel(\Closure $custom_fill_model = null)
    {
        $fillable = $this->payload;

        if(!empty($this->exclude_fields)){
            $index = 0;

            foreach (array_keys($fillable) as $field){

                if(in_array($field, $this->exclude_fields)){

                    array_splice($fillable, $index, 1);

                }

                $index++;

            }
        }

        if($custom_fill_model){
            /**
             * @var \Closure $custom_fill_model
             */
            $this->model = $custom_fill_model($this->model, $fillable);
        } else {
            foreach ($fillable as $column_name => $value){
                if($value instanceof UploadedFile){
                    $this->doManualUpload($value, $column_name);
                } else {
                    $this->model->fill([
                        $column_name => $value
                    ]);
                }
            }
        }

        return $this;
    }

    /**
     * provide the keys to uploaded files this format ['file_request_key_name' => 'model column name']
     *
     * @param array $uploads
     * @return $this
     */
    public function doUpload(array $uploads = [])
    {
        foreach ($uploads as $request_file_key => $model_column){

            if ($uploaded = $this->autoSaveFileFromRequest($request_file_key)){

                $this->model->fill([
                    $model_column => $uploaded['url']
                ]);

                if(method_exists($this->model, 'fillMetadata')){
                    $this->model->fillMetadata([$model_column => $uploaded]);
                }

            }
        }

        return $this;
    }

    public function doManualUpload(UploadedFile $uploadedFile, $model_column)
    {
        $uploaded = $this->doFileUpload($uploadedFile);

        $this->model->fill([
            $model_column => $uploaded['url']
        ]);

        if(method_exists($this->model, 'fillMetadata')){
            $this->model->fillMetadata([$model_column => $uploaded]);
        }

        return $this;
    }

    public function persist()
    {
        $this->model->save();

        return $this->model;

    }

    protected function onSavingRelatedRecord(Relation $relation, array $payload)
    {

    }

    /**
     * @param Model $parentModel
     * @param $relationship
     * @param array $payload
     * @param array $uploads
     * @param array $previous_pivot
     * @return bool|Model|int
     * @throws \Exception
     */
    public function saveRelatedRecord(Model $parentModel, $relationship, array $payload, array $uploads = [], $previous_pivot = [])
    {
        // todo: check for uploads
        foreach (array_keys($uploads) as $model_column){

            if ($uploaded = $this->autoSaveFileFromRequest($model_column)){

                $payload[$model_column] = $uploaded['url'];

            }
        }

        /** @var Relation $relation */
        $relation = $parentModel->$relationship();

        $this->onSavingRelatedRecord($relation, $payload);

        if($relation instanceof BelongsToMany){
            if(!empty($previous_pivot)){

                $pivot_record = $relation->where($relation->getRelated()->getTable() . '.id',
                    $previous_pivot[$relation->getRelatedPivotKeyName()]);

                foreach ($relation->getPivotColumns() as $column){
                    $pivot_record = $pivot_record->wherePivot($column, $previous_pivot[$column]);
                }

                return $pivot_record->update($payload);

            } else {
                return $relation
                    ->newPivot(array_merge([
                        $relation->getForeignPivotKeyName() => $parentModel->id
                    ], $payload))
                    ->save();
            }
        } else {

            $foreign_key = $relation->getForeignKeyName();

            $payload[$foreign_key] = $relation->getParentKey();

            return $this->quickSave($payload);

        }

    }


    /**
     * @param array $payload
     * @param \Closure|null $actions
     * @return Model
     * @throws \Exception
     */
    public function quickSave(array $payload, \Closure $actions = null)
    {
        $this->initSave($payload);

        $this->fillModel();

        if($actions){
            $actions($this);
        }


        return $this->persist();
    }

    public function fetch($limit = null, \Closure $filterQuery = null)
    {
        $query = $this->model->newModelQuery();

        if($filterQuery){
            $query = $filterQuery($query);
        }

        $query = $query->orderBy('id', 'desc');

        if($this->model instanceof FilterableModel){
            $query = $this->model->applyFilter($query);
        }

        $query = $this->onBeforeFetchQuery($query);

        return $limit ? $query->paginate($limit) : $query->get();
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function onBeforeFetchQuery(Builder $query)
    {
        return $query;
    }

    /**
     * @param \Closure|null $filterQuery
     * @return \Illuminate\Database\Eloquent\Builder|Model|mixed
     */
    public function fetchQuery(\Closure $filterQuery = null)
    {
        $query = $this->model->newModelQuery();

        if($filterQuery){
            $query = $filterQuery($query);
        }

        if($this->model->usesTimestamps()) $query = $query->latest();

        $query = $this->onBeforeFetchQuery($query);

        return $query;
    }

    /**
     * @param Model $model
     * @throws \Exception
     */
    public function deleteByModel(Model $model)
    {
        $model->delete();
    }

    /**
     * @param $id
     * @throws \Exception
     */
    public function deleteById($id)
    {
        $model = $this->getModelById($id);

        $this->deleteByModel($model);

    }

    public function getModelByColumnName($column, $value)
    {
        return $this->fetchQuery()->where($column, $value)->first();
    }

    public static function transformAsApiResource(Model $model = null, $transformer = null)
    {
        if(is_null($model)) return null;

        return new BaseApiResource($model, $transformer);
    }

    public static function transformAsApiCollectionResponse($model_collection = null, $transformer = null)
    {
        if(is_null($model_collection)) return null;

        return BaseApiResource::collection($model_collection, $transformer);
    }

    public static function collectionToJson($collection)
    {
        $data = self::transformAsApiCollectionResponse($collection);

        return $data->response()->getData(true);
    }

    public function fetchJson($limit = null, $transformer = null)
    {
        $data = self::init()->fetch($limit);

        $transformed_data = self::transformAsApiCollectionResponse($data,$transformer);

        return $transformed_data->response()->getData(true);
    }
}