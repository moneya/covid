<?php

use App\Enums\Roles;

$roles = [
    'dev' => Roles::Developer,
    'super_admin' => Roles::SuperAdmin,
];

return [
   'roles' => $roles,
    'default_password' => '1234567890',
    'permissions' => [

    ]
];