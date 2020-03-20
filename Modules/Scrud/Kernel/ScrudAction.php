<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 26 Nov 2019
 * Time: 1:49 PM
 */

namespace Modules\Scrud\Kernel;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Routing\Route;
use Illuminate\Support\Str;
use Illuminate\Routing\Router;
use Modules\Auth\Models\User;
use Spatie\Permission\Models\Permission;

abstract class ScrudAction
{
    protected $title;

    protected $slug;

    protected $http_verb = 'GET';

    protected $prefix = null;

    protected $middleware = [];

    protected $required_request_params = [];

    protected $add_to_quick_actions = false;

    protected $allowed_roles = [];

    /** @var Route $route */
    protected $route;

    /** @var Route $apiRoute */
    protected $apiRoute;

    /** @var ScrudModel $scrudModel */
    protected $scrudModel;

    protected $permission_name;

    protected $has_api = false;

    protected $secured = true;

    public function hasApi(){
        return $this->has_api;
    }

    public function getAllowedRoles()
    {
        return $this->allowed_roles;
    }

    public function getPermissionName()
    {
        return $this->buildPermissionName();
    }

    /**
     * @return \Spatie\Permission\Contracts\Permission|Permission
     */
    public function getPermission()
    {
        $permission_name = $this->buildPermissionName();

        if (!$permission = Permission::query()->where(['name' => $permission_name])->first()){
            $permission = Permission::create([
                'name' => $permission_name,
                'label' => $this->makePermissionLabel(),
                'guard_name' => 'web'
            ]);
        }

        return $permission;
    }

    public function makePermissionLabel()
    {
        return 'Grant access to action: "' .
            Str::title(str_replace('-',' ', Str::kebab(Str::studly(class_basename(get_called_class())))))
            . '" on "' .
            Str::title(str_replace('-',' ', Str::kebab(Str::studly(class_basename(get_class($this->scrudModel->getModel()))))))
            . '"';
    }

    public function checkPermission(User $user = null)
    {
        if(!$user) $user = auth()->user();

        return $user->can($this->getPermissionName());
    }

    public function buildPermissionName()
    {
        return $this->permission_name ?? (get_class($this->scrudModel) . '::' . get_called_class());
    }

    protected function setScrudModel(ScrudModel $scrudModel)
    {
        $this->scrudModel = $scrudModel;
    }

    public function buildRecordActionUrl(Model $record = null)
    {
        $route_name = $this->buildUriName();

        $params = [];

        if(!empty($this->required_request_params)){
            $params[$record->getRouteKeyName()] = $record->getRouteKey();
        }

        return \route($route_name, $params);
    }

    protected function buildUriPath($prefix = null){
        $append_required_params = null;

        if(!empty($this->required_request_params)){
            $append_required_params = array_map(function($param){
                return '/{' . $param . '}';
            }, $this->required_request_params);

            $append_required_params = implode('',$append_required_params);
        }

        return $this->getUriBase($prefix) . $append_required_params
            . '/' .
            $this->getSlug();
    }

    protected function buildUriName(){
        $uri_path = $this->buildUriPath(config('scrud.route.prefix'));

        if(Str::startsWith($uri_path, '/')) $uri_path = Str::replaceFirst('/', '', $uri_path);

        if(!empty($this->required_request_params)){
            foreach ($this->required_request_params as $param){
                $search = '/{' . $param . '}';

                $uri_path = str_replace($search,'', $uri_path);
            }
        }



        return str_replace('/', '.', $uri_path);
    }

    public function getUriBase($prefix = null){
        return ($prefix ?? config('scrud.route.prefix')) . '/' . $this->scrudModel->getScrudSlug();
    }

    /**
     * @throws \ReflectionException
     */
    protected function setRoute()
    {
        /** @var Router $router */
        $router = app()['router'];

        $uri_path = $this->buildUriPath();

        $verbs_array = is_array($this->http_verb) ? $this->http_verb : explode(',', $this->http_verb);

        foreach ($verbs_array as $verb){

            $action = get_called_class() . '@' . strtolower($verb) . 'Handler';

            if($controller = $this->scrudModel->getController()){
                $controller_method = Str::camel(class_basename(get_called_class()));

                if((new \ReflectionClass($controller))->hasMethod($controller_method))
                $action = $controller . '@' . $controller_method;
            }

            $this->route = $router
                ->addRoute(strtoupper(trim($verb)), $uri_path, $action)
                ->name($this->buildUriName())
                ->middleware($this->getActionMiddleware())
                ->defaults('scrud_model', get_class($this->scrudModel))
//            ->defaults('parent_scrud_model', $this->scrudModel ? get_class($this->scrudModel) : null)
            ;

            if($this->hasApi() || $this->scrudModel->hasApi()){
                $this->apiRoute = $router
                    ->addRoute(strtoupper(trim($verb)), 'api/' . $uri_path, $action)
                    ->name('api.' . $this->buildUriName())
                    ->middleware($this->getActionMiddleware())
                    ->defaults('scrud_model', get_class($this->scrudModel))
//            ->defaults('parent_scrud_model', $this->scrudModel ? get_class($this->scrudModel) : null)
                ;
            }
        }
    }

    public function setSlug($title = null)
    {
        $this->slug = Str::slug($title ?? $this->title);
    }

    public function getSlug()
    {
        return $this->slug;
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getAlias()
    {
        return $this->getTitle();
    }

    /**
     * @param ScrudModel $scrudModel
     * @return $this
     * @throws \ReflectionException
     */
    public function boot(ScrudModel $scrudModel)
    {
        if(is_null($this->title)) $this->title = class_basename(get_called_class());

        $this->setScrudModel($scrudModel);

        $this->setSlug();

        $this->setRoute();

        return $this;
    }

    public function getRoute()
    {
        return $this->route;
    }

    public function getActionMiddleware()
    {
        $middleware = $this->getWebMiddleware();

        if($this->secured){
            $permissions_middleware = 'permission:' . $this->getPermissionName();

            $middleware[] = $permissions_middleware;
        }

        return $middleware;
    }

    public function getWebMiddleware()
    {
        if(is_string($this->middleware)){
            $this->middleware = explode(',', $this->middleware);
        }

        // we add the 'web' middleware
        $this->middleware = array_merge(['web'], $this->middleware);

        return $this->middleware;
    }

    public function shouldAddToQuickActions()
    {
        return $this->add_to_quick_actions;
    }


    public static function singleton()
    {
        $service_class = get_called_class();

        app()->singleton($service_class, function ($app) use ($service_class){
            return new $service_class();
        });
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


}