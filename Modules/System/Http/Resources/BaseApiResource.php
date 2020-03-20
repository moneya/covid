<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 1 Oct 2019
 * Time: 11:36 AM
 */

namespace Modules\System\Http\Resources;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Resources\Json\Resource;
use Illuminate\Support\Str;
use Modules\System\Contracts\TransformableModelContract;

class BaseApiResource extends Resource
{

    private static $transformer;

    public function __construct(Model $resource, $transformer =  null)
    {
        if($transformer && is_string($transformer)) static::$transformer = $transformer;
        parent::__construct($resource);

    }


    public function toArray($request)
    {
        /** @var Model $model */
        $model = $this->resource;

        $attributes = [];

        if($model instanceof TransformableModelContract){
            if(static::$transformer){
                $attributes = $model->transform(static::$transformer);
            } else {
                $attributes = $model->transform();
            }
        } else {

            foreach ($model->attributesToArray() as $key => $value){
                $attributes[Str::camel($key)] = $value;
            }
        }

        return $attributes;
    }


    public static function collection($resource, $transformer = null)
    {
        static::$transformer = $transformer;
        return parent::collection($resource);
    }

}