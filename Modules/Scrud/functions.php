<?php

use Modules\Scrud\Kernel\ScrudService;

/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 25 Oct 2019
 * Time: 11:12 AM
 */

function scrudView($view_file)
{
    $root_folder = config('scrud.view.themeRootFolder', 'scrud::scrud');

    return $root_folder . '.' . $view_file;
}

function scrudRelatedView($view_file)
{
    $root_folder = config('scrud.view.themeRootFolder', 'scrud::scrud');

    return $root_folder . '.related.' . $view_file;
}

/**
 * @param null $slug
 * @return array
 * @throws \Illuminate\Contracts\Container\BindingResolutionException
 */
function scrudConfig($slug = null){
    $scrudConfig = ScrudService::init()->getScrudConfig();

    if($slug){
        $scrudConfig = $scrudConfig[$slug];
    }

    return $scrudConfig;
}

/**
 * @param $slug
 * @return \Modules\Scrud\Kernel\ScrudModel
 * @throws \Illuminate\Contracts\Container\BindingResolutionException
 */
function fetchScrud($slug){
    return scrudConfig($slug)['scrud_model'];
}

/**
 * @param $scrud_slug
 * @return \Illuminate\Support\Collection
 * @throws \Illuminate\Contracts\Container\BindingResolutionException
 */
function scrudActions($scrud_slug){
    /** @var \Illuminate\Support\Collection $actions */
    $actions = scrudConfig($scrud_slug)['actions'];

    return $actions;
}

/**
 * @param $scrud_slug
 * @param $action_slug
 * @return \Modules\Scrud\Kernel\ScrudAction
 * @throws \Illuminate\Contracts\Container\BindingResolutionException
 */
function findScrudAction($scrud_slug, $action_slug = 'index'){
    return filterScrudActionsBySlug(scrudActions($scrud_slug), $action_slug);
}

/**
 * @param $scrud_slug
 * @param $action_slug
 * @return \Illuminate\Routing\Route
 * @throws \Illuminate\Contracts\Container\BindingResolutionException
 */
function findScrudActionRoute($scrud_slug, $action_slug){
    return filterScrudActionsBySlug(scrudActions($scrud_slug), $action_slug)->getRoute();
}

function filterScrudActionsBySlug(\Illuminate\Support\Collection $scrudActions, $slug){
    /** @var \Modules\Scrud\Kernel\ScrudAction $action */
    $action = $scrudActions->filter(function($action, $index) use ($slug){
        /** @var \Modules\Scrud\Kernel\ScrudAction $action */
        return $action->getSlug() == $slug;
    })->first();

    return $action;
}
