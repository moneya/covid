<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 5 Jan 2020
 * Time: 8:22 PM
 */

namespace Modules\Auth\Scruds;


use Modules\Auth\Http\Controllers\Inertia\UsersController;
use Modules\Auth\Models\User;
use Modules\Auth\Repositories\UserRepository;
use Modules\Auth\ScrudActions\Customers;
use Modules\Auth\ScrudActions\NewCustomerPage;
use Modules\Scrud\Kernel\ScrudModel;

class UserScrud extends ScrudModel
{
    protected $repository = UserRepository::class;

    protected $model = User::class;

    protected $scrud_menu_title = 'Users';

    protected $controller = UsersController::class;

    protected $action_registry = [
        Customers::class,
        NewCustomerPage::class
    ];

}