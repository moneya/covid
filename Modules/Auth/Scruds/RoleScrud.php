<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 28/01/2020
 * Time: 11:03 AM
 */

namespace Modules\Auth\Scruds;


use Modules\Auth\Http\Controllers\Inertia\RolesController;
use Modules\Auth\ScrudActions\UpdatePermission;
use Modules\Scrud\Kernel\ScrudModel;
use Spatie\Permission\Models\Role;

class RoleScrud extends ScrudModel
{
    protected $model = Role::class;

    protected $scrud_menu_title = 'Roles';

    protected $controller = RolesController::class;

    protected $action_registry = [
        UpdatePermission::class
    ];

}