<?php

namespace Modules\Auth\Database\Seeds;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $roles_seeds = config('auth_module.roles');

        Role::truncate();

        foreach ($roles_seeds as $roles_seed){
            Role::create([
                'name' => $roles_seed
            ]);
        }
    }
}
