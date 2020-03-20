<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 06/02/2020
 * Time: 3:07 PM
 */

namespace Modules\Auth\ScrudActions;


use Illuminate\Http\Request;
use Modules\Auth\Repositories\RoleRepository;
use Modules\Scrud\Kernel\ScrudAction;
use Spatie\Permission\Models\Role;

class UpdatePermission extends ScrudAction
{
    protected $http_verb = ['post'];

    public function makePermissionLabel()
    {
        return "Can modify access control permissions";
    }

    public function postHandler(Request $request)
    {
        $payload = validator()->make($request->all(), [
            'roleId' => 'bail|required|numeric',
            'permissionIds' => 'bail|required|array'
        ])->validate();

        /** @var Role $role */
        $role = RoleRepository::init()->getModelById($payload['roleId']);

        $role->permissions()->sync($payload['permissionIds']);

        flash()->success('Permissions updated successfully!');

        return redirect()->back();

    }

}