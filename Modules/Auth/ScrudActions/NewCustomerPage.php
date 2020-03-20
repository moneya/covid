<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 6 Jan 2020
 * Time: 11:28 AM
 */

namespace Modules\Auth\ScrudActions;


use Inertia\Inertia;
use Modules\Scrud\Kernel\ScrudAction;

class NewCustomerPage extends ScrudAction
{
    protected $http_verb = [
        'get'
    ];

    public function makePermissionLabel()
    {
        return "Can access 'New Customer' form";
    }

    public function getHandler()
    {
        return Inertia::render('users/customers/NewCustomer', [

        ]);
    }

}