<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 11 Oct 2019
 * Time: 2:20 PM
 */

namespace Modules\Scrud\Kernel;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\View;

class ScrudService
{

    protected $scruds = [];

    private $resolved_scruds = [];

    private $scrud_config = [];

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public static function boot()
    {
        self::singleton();

        self::init();

        self::initViewCompoers();
    }

    /**
     * @return self
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public static function init()
    {
        /** @var self $service */
        $service = app()->make(get_called_class());

        return $service;
    }

    public static function singleton()
    {
        $service_class = get_called_class();

        app()->singleton($service_class, function ($app) use ($service_class){
            return new $service_class();
        });
    }

    public static function initViewCompoers()
    {

        View::composer('*', function ($view){
            $route = Route::current();

            if(!$route) return;

            /** @var ScrudModel $scrudModel */
            $scrudModel = $route->parameter('scrud_model') ? app()->make($route->parameter('scrud_model')) : null;
            $parent_scrud_class = $route->parameter('parent_scrud_model');
            $parentScrudModel = $parent_scrud_class ? app()->make($parent_scrud_class) : null;

            $view
                ->with('scrudModel', $scrudModel)
                ->with('currentRoute', $route)
                ->with('parentScrudModel', $parentScrudModel)
                ->with('pageTitle', $scrudModel ? Str::singular(($parentScrudModel ?? $scrudModel)->getScrudMenuTitle()) .
                    ($parentScrudModel ? ' - ' . $scrudModel->getScrudMenuTitle() : '') : null)
            ;
        });
    }

    public function getScrudModelBySlug($slug)
    {
        $scruds = $this->getResolvedScruds();

        foreach ($scruds as $scrud){
            /** @var ScrudModel $scrud*/

            if($scrud->getScrudSlug() == $slug){
                return $scrud;
            }
        }
    }

    public function addScrud(ScrudModel $scrudModel)
    {
        $scrudModel->boot();

        $this->resolved_scruds[] = $scrudModel;

        $this->setScrudConfig($scrudModel);
    }


    public function getResolvedScruds()
    {
        return $this->resolved_scruds;
    }


    public function setScrudConfig(ScrudModel $scrudModel)
    {

        $slug = $scrudModel->getScrudSlug();

        $this->scrud_config[$slug] = [
//                'link' => \route($scrud_model->getUriRouteName()) , // $scrud_model->getUriPath()
            'title' => $scrudModel->getScrudMenuTitle(),
            'actions' => $scrudModel->getActionConfig(),
            'slug' => $slug,
            'scrud_model' => $scrudModel
        ];

    }

    public function getScrudConfig()
    {
        return $this->scrud_config;
    }

    public function getScrudMenus()
    {
        $menus = [];

        foreach ($this->getResolvedScruds() as $scrud_model){

            /** @var ScrudModel $scrud_model */

            $menus[$scrud_model->getScrudSlug()] = [
                'link' => \route($scrud_model->getUriRouteName()) , // $scrud_model->getUriPath()
                'title' => $scrud_model->getScrudMenuTitle(),
                'allMenus' => collect($route_configs = $scrud_model->getRouteConfigs())
                    ->mapWithKeys(function($config, $action) use($scrud_model) {
                        return [
                            $action => $config['http_verb'] == 'GET' && !$config['requires_model_param'] ?
                                route($scrud_model->getUriRouteName($action)) : null
                        ];
                    })->toArray(),
            ];
        }

        return $menus;
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public static function getCurrentScrudModel()
    {
        $route = Route::current();

        /** @var ScrudModel $scrudModel */
        $scrudModel = app()->make($route->parameter('scrud_model'));

        return $scrudModel;
    }

    public static function getCurrentScrudAction()
    {
        $route = Route::current();

        $scrud = $route->parameter('scrud');

        return $scrud;
    }

    /**
     * @return ScrudModel
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public static function getParentScrudModel()
    {
        $route = Route::current();

        /** @var ScrudModel $scrudModel */
        $parent_scrud = $route->parameter('parent_scrud_model');

        $scrudModel = $parent_scrud ? app()->make($parent_scrud) : null;

        return $scrudModel;
    }

    /**
     * validate the incoming SCRUD request based on the defined rule.
     * Where no custom rule is defined per scrud action,
     * the default validation rule is used (defaultRequestValidationRules())
     *
     * therefore, to define a custom rule per scrud action,
     * you must define a method with the following signature:
     * scrud action: create
     * validation method signature: createRequestValidationRules
     *
     * scrud action: update
     * validation method signature: updateRequestValidationRules
     *
     * @param Request $request
     * @return array
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \Exception
     */
    public static function validateScrudRequest(Request $request)
    {
        $scrud_model = static::getCurrentScrudModel();
        $scrud_operation = static::getCurrentScrudAction();

        $payload = $request->all();

        $scrud_operation_validation_method = $scrud_operation . 'RequestValidationRules';

        if(method_exists($scrud_model, $scrud_operation_validation_method)){
            $rules = $scrud_model->$scrud_operation_validation_method($request);
        } else {
            $rules = $scrud_model->defaultRequestValidationRules($request);
        }

        if(empty($rules)){
            return $payload;
        }

        return validator($payload, $rules)->validate();

    }

    /**
     * @param Request $request
     * @return array
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public static function validateRelatedScrudRequest(Request $request)
    {
        $parent_scrud_model = static::getParentScrudModel();
        $scrud_model = static::getCurrentScrudModel();

        $fields = $parent_scrud_model->getRelatedScrudableFields($scrud_model, $scrud_operation = static::getCurrentScrudAction());

        if ($request->has('id')) $fields['id'] = true;

        $payload = $request->only(array_keys($fields));

        $scrud_operation_validation_method = $scrud_operation . 'RequestRelatedValidationRules';

        if(method_exists($parent_scrud_model, $scrud_operation_validation_method)){
            $rules = $parent_scrud_model->$scrud_operation_validation_method($request);
        } else {
            $rules = $parent_scrud_model->defaultRequestRelatedValidationRules($request);
        }

        if(empty($rules)){
            return $payload;
        }

        return validator($payload, $rules)->validate();

    }

}