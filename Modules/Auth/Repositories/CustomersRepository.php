<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 6 Jan 2020
 * Time: 10:48 AM
 */

namespace Modules\Auth\Repositories;


class CustomersRepository extends UserRepository
{

    public function getCustomers($limit = null)
    {
        $query = $this->getUsersInRoleQueryBuilder(config('auth_module.roles.customer'))
            ->with('bioData');

        if($limit) $query = $query->paginate($limit);

        return $query->get();
    }

    /**
     * @param array $payload
     * @return \Illuminate\Database\Eloquent\Model|\Modules\Auth\Models\User
     * @throws \Exception
     */
    public function createCustomer(array $payload)
    {
        $user = $this->createUser($payload);

        $user->bioData()->create($payload['bioData']);

        $user->assignRole(config('auth_module.roles.customer'));

        return $user;
    }

}