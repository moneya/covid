<?php

namespace Modules\Auth\Database\Seeds;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Modules\Auth\Models\User;
use Modules\Auth\Repositories\UserRepository;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws \Exception
     */
    public function run()
    {
        //
        User::truncate();

        $roles = config('auth_module.roles');

        foreach ($roles as $role){
            /** @var User $dev */
            $dev = UserRepository::init()->createUser([
                'email' => Str::lower($role . '@' . env('APP_DOMAIN', Str::slug(config('app.name')) . '.com')),
                'password' => 'secret',
                'display_name' => $role
            ]);

            $dev->assignRole($role);
        }

    }
}
