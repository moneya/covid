<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 3 Dec 2019
 * Time: 12:58 PM
 */

namespace Modules\Auth\Repositories;


use Modules\System\Repositories\BaseRepository;
use Spatie\Permission\Models\Role;

class RoleRepository extends BaseRepository
{


    /**
     * RoleRepository constructor.
     * @param Role $role
     * @throws \Exception
     */
    public function __construct(Role $role)
    {
        parent::__construct($role);
    }

    public function getStaffRoles()
    {
        return $this->fetchQuery()
            ->whereNotIn('name', [
                config('auth_module.roles.dev'),
                config('auth_module.roles.customer'),
            ])->get();
    }

    public function getPublicRoles()
    {
        return $this->fetchQuery()
            ->whereNotIn('name', [
                config('auth_module.roles.dev'),
            ])->get();
    }
}