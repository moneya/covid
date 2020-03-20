<?php

namespace Modules\Auth\Http\Controllers\Inertia;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Auth\Repositories\RoleRepository;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    public function index()
    {
        return Inertia::render('roles/Index', [
            'roles' => RoleRepository::init()->getPublicRoles()
        ]);
    }

    public function show($id)
    {
        $role = RoleRepository::init()->getModelById($id);

        $role->load('permissions');

        return Inertia::render('roles/Details', [
            'role' => $role,
            'permissions' => Permission::all()
        ]);
    }
}
