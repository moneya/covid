<?php

namespace Modules\Scrud\Traits;


use Modules\Scrud\Kernel\ScrudAction;
use Spatie\Permission\Models\Role;

trait ScrudModelAuthorizationTrait
{
    public function setupPermissions()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // todo: loop through all actions
        foreach ($this->getActionConfig() as $action){
            /** @var ScrudAction $action */

            $method = 'getAllowedRolesOn' . $action->getTitle();

            $roles = $action->getAllowedRoles();

            if(method_exists($this, $method)){
                $roles = array_merge($roles, $this->$method());
            }

            $roles[] = config('auth_module.roles.dev');

            $this->setupAllowedRolesOnAction($action, $roles);

        }

    }

    protected function setupAllowedRolesOnAction(ScrudAction $action, array $roles = [])
    {
        foreach ($roles as $role){
            if(is_string($role)) $role = Role::findByName($role);

            $permission = $action->getPermission();

            /** @var Role $role */
            $role->givePermissionTo($permission);
        }
    }

    protected function getAllowedRolesOnIndex()
    {
        return [];
    }

    protected function getAllowedRolesOnSave()
    {
        return [];
    }

    protected function getAllowedRolesOnEdit()
    {
        return [];
    }

    protected function getAllowedRolesOnCreate()
    {
        return [];
    }

    protected function getAllowedRolesOnShow()
    {
        return [];
    }

    protected function getAllowedRolesOnDelete()
    {
        return [];
    }
}