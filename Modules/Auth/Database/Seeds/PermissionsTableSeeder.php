<?php

namespace Modules\Auth\Database\Seeds;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Spatie\Permission\Models\Permission;

class PermissionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");

//        Permission::truncate();
        $permissions = config('auth_module.permissions');

        foreach ($permissions as $permission => $roles){

            /** @var Permission $permissionModel */
            if (!$permissionModel = Permission::query()->where(['name' => $permission])->first()){
                $permissionModel = Permission::create([
                    'name' => $permission,
                    'label' => $permission,
                    'guard_name' => 'web'
                ]);
            }

            $permissionModel->assignRole($roles);
        }

        DB::statement("SET foreign_key_checks=1");
    }
}
