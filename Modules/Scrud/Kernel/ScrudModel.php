<?php

namespace Modules\Scrud\Kernel;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Modules\Scrud\Traits\HasScrudFields;
use Modules\Scrud\Traits\ScrudModelAuthorizationTrait;
use Modules\Scrud\Traits\ScrudModelClassBasedActions;
use Modules\System\Repositories\AnonymousModelRepository;
use Modules\System\Repositories\BaseRepository;

class ScrudModel
{
    use ScrudModelClassBasedActions, ScrudModelAuthorizationTrait, HasScrudFields;

    protected $repository = AnonymousModelRepository::class;

    protected $controller = null;

    protected $scrud_menu_title;

    protected $scrud_slug;

//    protected $related_scruds = [];

    public $fetch_limit = 24;

    protected $has_api = false;


//    protected $scrudable_fields = [];

    /**
     * @var Model
     */
    protected $model;

    public function getController()
    {
        return $this->controller;
    }

    public function hasApi(){
        return $this->has_api;
    }

    public function boot()
    {
        $this->bootstrapActionsRegistry();
        $this->bootGlobalActions();
        $this->bootScrudFields();
    }

    /**
     * @return self
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public static function init()
    {
        $service_class = get_called_class();

        return app()->make($service_class);

    }

    public static function singleton()
    {
        $service_class = get_called_class();

        app()->singleton($service_class, function ($app) use ($service_class){
            return new $service_class();
        });
    }

    /**
     * @return Model | null
     */
    public function getModel()
    {
        return is_null($this->model) ?: app($this->model);
    }

//    public function getRelatedModelQueryRelationship($related_scrud_slug)
//    {
//        $relatedSCrudConfig = $this->resolveRelatedScruds()[$related_scrud_slug];
//
//        return $relatedSCrudConfig['config']['relationship'];
//    }

    /**
     * @return BaseRepository
     */
    public function getModelRepository()
    {
        return $this->repository::initFromModel($this->getModel());
    }

//    public function resolveRelatedScruds()
//    {
//        $related_scruds_config = [];
//
//        foreach ($this->resolveConfig($this->related_scruds) as $related_scrud_class => $config){
//            /** @var ScrudModel $scrud_model */
//            $scrud_model = app($related_scrud_class);
//            $related_scruds_config[$scrud_model->getScrudSlug()] = [
//                'scrudModel' => $scrud_model,
//                'config' => $config
//            ];
//        }
//
//        return $related_scruds_config;
//
//    }

//    public function getRelatedScrudMenus($param)
//    {
//        $menus = [];
//
//        foreach ($this->resolveRelatedScruds() as $related_scrud){
//
//            /** @var ScrudModel $childScrudModel */
//            $childScrudModel = $related_scrud['scrudModel'];
//
////            $childScrudModel->getUriPath('index', $this->getRoutePrefixForChild($childScrudModel))
//            $child_route_name = $this->getUriRouteName('index', $this->getRoutePrefixForChild($childScrudModel));
//
//            $menus[] = [
//                'link' =>  route($child_route_name, ['parentModel' => $param]), // $childScrudModel->getUriPath()
//                'title' => $childScrudModel->getScrudMenuTitle()
//            ];
//        }
//
//        return $menus;
//    }
//
//    public function hasRelatedScruds()
//    {
//        return !!count($this->related_scruds);
//    }

    public function recordPageTitle($record = null)
    {
        return $this->getScrudMenuTitle();
    }

    public function getScrudMenuTitle()
    {
        return $this->scrud_menu_title;
    }

    public function getScrudMenuTitleAlias()
    {
        return $this->getScrudMenuTitle();
    }

    public function getScrudSlug()
    {
        return $this->scrud_slug ?? Str::slug($this->scrud_menu_title);
    }

//    public function getScrudUploadFields($crud = 'create')
//    {
//        $scrudableFields = $this->getScrudableFields($crud);
//
//        $upload_fields = [];
//
//        foreach ($scrudableFields as $field => $config){
//            if(array_key_exists('controlType', $config)){
//                if($config['controlType'] == 'file'){
//                    $upload_fields[$field] = $config;
//                }
//            }
//        }
//
//        return $upload_fields;
//    }
//
//    public function getScrudableFields($crud = 'read')
//    {
//        if(!$this->scrudable_fields) return [];
//
//        $scrudableFields = $this->resolveScrudableFields();
//
//        return array_filter($scrudableFields, function($key) use ($crud, $scrudableFields){
//
//            $item = $scrudableFields[$key];
//
//            $crud_config = $item['scrud'] ?? '';
//
//            return Str::contains($crud_config, $crud);
//
//        }, ARRAY_FILTER_USE_KEY);
//
//    }
//
//    public function resolveScrudableFields()
//    {
//        return $this->resolveConfig($this->scrudable_fields);
//    }
//
//    public function getRelatedScrudUploadFields(ScrudModel $scrudModel, $scrud = 'create')
//    {
//        $relatedScrudableFields = $this->getRelatedScrudableFields($scrudModel, $scrud);
//
//        $upload_fields = [];
//
//        foreach ($relatedScrudableFields as $field => $config){
//            if(array_key_exists('controlType', $config)){
//                if($config['controlType'] == 'file'){
//                    $upload_fields[$field] = $config;
//                }
//            }
//        }
//
//        return $upload_fields;
//    }
//
//    public function getRelatedScrudableFields(ScrudModel $scrudModel, $scrud = 'read')
//    {
//        $relatedScrudableFields = $this->resolveRelatedScrudableFields($scrudModel);
//
//        return array_filter($relatedScrudableFields, function($key) use ($scrud, $relatedScrudableFields){
//
//            $item = $relatedScrudableFields[$key];
//
//            $scrud_config = $item['scrud'] ?? '';
//
//            return Str::contains($scrud_config, $scrud);
//
//        }, ARRAY_FILTER_USE_KEY);
//    }
//
//    public function resolveRelatedScrudableFields(ScrudModel $scrudModel)
//    {
//        // e.g. getLicensesCrudRelatedCrudableFields
//        $related_scrud_fields_method_name = 'get';
//        $related_scrud_fields_method_name .= class_basename($this);
//        $related_scrud_fields_method_name .= 'RelatedScrudableFields';
//
//        $scrudable_fields = $scrudModel->$related_scrud_fields_method_name();
//
//        return $this->resolveConfig($scrudable_fields);
//    }

    public function resolveConfigurationString($config_string)
    {
        $config = trim($config_string);

        $config_data = explode('|',$config);

        $array = [];

        foreach ($config_data as $item){
            $item_explode = explode(':',$item);

            $array[$item_explode[0]] = $item_explode[1] ?? true;
        }

        return $array;
    }

    public function resolveConfig($configurations)
    {
        return array_map(function ($config){

            if(is_string($config)){
                $config = $this->resolveConfigurationString($config);
            }

            return $config;

        }, $configurations);
    }

//    public function getFieldOptions($field_key)
//    {
//        $method_name = 'get' . Str::ucfirst(Str::camel($field_key)) . 'FieldOptions';
//
//        return $this->$method_name($field_key);
//    }
//
//    public function getRelatedFieldOptions($field_key, $parentScrudModel)
//    {
//        $method_name = 'get' . Str::ucfirst(Str::camel(class_basename($parentScrudModel) . '_' . $field_key)) . 'FieldOptions';
//
//        return $this->$method_name($field_key);
//    }
//
//    public function getRelatedFieldValue(Model $model, $field_key, $relationship, $parentModel)
//    {
//        return $this->getScrudValue($model,$field_key, $relationship, $parentModel);
//
//        /*$method_name = 'get' . Str::ucfirst(Str::camel(class_basename($relatedScrud) . '_' . $field_key)) . 'FieldValue';
//
//        if(method_exists($this, $method_name)){
//            return $this->$method_name($model, $field_key, $query);
//        } else {
//            if($query instanceof BelongsToMany){
//                return $model->pivot->$field_key;
//            }
//
//            return $model->$field_key;
//        }*/
//
//    }

    /**
     * defines the default validation rules for a given scrud
     * the outcome of this validation-rules determines the payload for scrud-model repositories
     *
     * @param Request $request
     * @return array
     */
    public function defaultRequestValidationRules(Request $request)
    {
        return [];
    }

    public function defaultRequestRelatedValidationRules(Request $request)
    {
        return [];
    }

    public function hasScrudValue(Model $model, $column, $value, $relationship = null, Model $parentModel = null, $relatedScrud = null)
    {
        $method_name = 'has';

        if($relationship) $method_name .= Str::ucfirst(class_basename($relatedScrud));

        $method_name .= Str::ucfirst(Str::camel($column)) . 'Value';

        /** @var Relation $query */
        $query = null;
        if($relationship) $query = $parentModel->$relationship();

        if(method_exists($this, $method_name)){
            return $this->$method_name($model, $value);
        } else {
            if($query){
                if($query instanceof BelongsToMany){
                    return $model->pivot->$column == $value;
                }
            }
            return $model->$column == $value;
        }
    }



    public function getScrudValue(Model $model, $column, $relationship = null, Model $parentModel = null, $relatedScrud = null)
    {
        $method_name = 'get';

        if($relationship) $method_name .= Str::ucfirst(class_basename($relatedScrud));

        $method_name .= Str::ucfirst(Str::camel($column)) . 'Value';

        /** @var Relation $query */
        $query = null;
        if($relationship) $query = $parentModel->$relationship();

        if(method_exists($this, $method_name)){
            return $this->$method_name($model);
        } else {
            if($query){
                if($query instanceof BelongsToMany){
                    return $model->pivot->$column;
                }
            }
            return $model->$column;
        }


    }

//    public function getAllRelatedScruds()
//    {
//        if(empty($this->related_scruds)) return [];
//
//        $scruds = [];
//
//        foreach ($this->related_scruds as $related_scrud => $config_data){
//            /** @var ScrudModel $scrud */
//            $scrud = app($related_scrud);
//            $config = $this->resolveConfigurationString($config_data);
//
//            // set showAction configuration for related scrud to 'view' by default
//            if(!isset($config['showActions'])) $config['showActions'] = 'view';
//
//            if(isset($config['showActions'])){
//                $scrud->setShowViewAction(Str::contains($config['showActions'],'view'));
//                $scrud->setShowEditAction(Str::contains($config['showActions'],'edit'));
//                $scrud->setShowDeleteAction(Str::contains($config['showActions'],'delete'));
//            }
//
//            $scruds[$scrud->getScrudSlug()] = $scrud;
//        }
//
//        return $scruds;
//    }
//
//    public function getRelatedScrudQuery(Model $parentModel, string $scrud)
//    {
//        $currentScrudModel = app($scrud);
//
//        $parent_crud_model = $this;
//
//        $relationship = $parent_crud_model->getRelatedModelQueryRelationship($currentScrudModel->getScrudSlug());
//
//        /** @var Relation $query */
//        return $parentModel->$relationship();
//    }
}