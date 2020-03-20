<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 4 Nov 2019
 * Time: 3:47 PM
 */

namespace Modules\Scrud\Traits;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Modules\Scrud\Kernel\Actions\Create;
use Modules\Scrud\Kernel\Actions\Delete;
use Modules\Scrud\Kernel\Actions\Edit;
use Modules\Scrud\Kernel\Actions\Index;
use Modules\Scrud\Kernel\Actions\Save;
use Modules\Scrud\Kernel\Actions\Show;
use Modules\Scrud\Kernel\ScrudAction;

trait ScrudModelClassBasedActions
{
    protected $action_registry = [];
    protected $show_action_button = true;
    protected $show_edit_action = true;
    protected $show_view_action = true;
    protected $show_delete_action = true;

    private $global_actions_registry = [
        Index::class,
        Save::class,
        Create::class,
        Show::class,
        Edit::class,
        Delete::class
    ];

    /**
     * @var Collection
     */
    private $action_configs = null;

    /**
     * @var Collection
     */
    private $global_action_configs = null;

    public function getUriRouteName($action_slug = 'index')
    {
        return $this->getRouteByAction($action_slug)->getName();
    }

    /**
     * @param string $action_slug
     * @return ScrudAction
     */
    public function getAction($action_slug = 'index')
    {
        /** @var ScrudAction $action */
        $action = filterScrudActionsBySlug($this->getActionConfig(), $action_slug);

        return $action;
    }

    /**
     * @param string $action_slug
     * @return \Illuminate\Routing\Route
     */
    public function getRouteByAction($action_slug = 'index')
    {
        /** @var ScrudAction $action */
        $action = $this->getAction($action_slug);

        return $action->getRoute();
    }

    protected function bootGlobalActions()
    {
        $scrudModel = $this;

        $this->global_action_configs = collect(
            array_map(function ($action) use ($scrudModel){

                /** @var ScrudAction $action_object */
                $action_object = app()->make($action);

                return $action_object->boot($scrudModel);

            }, $this->global_actions_registry)
        );

        return $this->global_action_configs;
    }

    public function bootstrapActionsRegistry()
    {
//        if(empty($this->action_registry)) return collect();

        $scrudModel = $this;

        $this->action_configs = collect(
            array_map(function ($action) use ($scrudModel){

                $action::singleton();

                return $action::init()->boot($scrudModel);

            }, $this->action_registry)
        );

        return $this->action_configs;
    }

    /**
     * @return array|\Illuminate\Support\Collection
     */
    public function getActionConfig()
    {
        return $this->action_configs->merge($this->getGlobalActionConfig());
    }

    public function getGlobalActionConfig()
    {
        return $this->global_action_configs;
    }

    public function getQuickActions()
    {
        if(is_null($this->action_configs)) return collect();

        $quick_actions = $this->action_configs->filter(function($action_config){
            /** @var ScrudAction $action_config */
            return $action_config->shouldAddToQuickActions();
        });

        return $quick_actions;
    }

    public function hasQuickActions()
    {
        return $this->getQuickActions()->count();
    }

    /**
     * @return bool
     */
    public function shouldShowDeleteAction(): bool
    {
        return $this->show_delete_action;
    }

    /**
     * @return bool
     */
    public function shouldShowActionButton(): bool
    {
        return $this->show_action_button;
    }

    /**
     * @return bool
     */
    public function shouldShowEditAction(): bool
    {
        return $this->show_edit_action;
    }

    /**
     * @return bool
     */
    public function shouldShowViewAction(): bool
    {
        return $this->show_view_action;
    }

    /**
     * @param bool $show_view_action
     */
    public function setShowViewAction(bool $show_view_action): void
    {
        $this->show_view_action = $show_view_action;
    }

    /**
     * @param bool $show_action_button
     */
    public function setShowActionButton(bool $show_action_button): void
    {
        $this->show_action_button = $show_action_button;
    }

    /**
     * @param bool $show_edit_action
     */
    public function setShowEditAction(bool $show_edit_action): void
    {
        $this->show_edit_action = $show_edit_action;
    }

    /**
     * @param bool $show_delete_action
     */
    public function setShowDeleteAction(bool $show_delete_action): void
    {
        $this->show_delete_action = $show_delete_action;
    }

}