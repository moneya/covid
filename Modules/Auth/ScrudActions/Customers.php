<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 6 Jan 2020
 * Time: 10:19 AM
 */

namespace Modules\Auth\ScrudActions;


use Illuminate\Http\Request;
use Inertia\Inertia;
use Modules\Auth\Repositories\CustomersRepository;
use Modules\Scrud\Kernel\ScrudAction;

class Customers extends ScrudAction
{

    protected $http_verb = [
        'get', 'post'
    ];

    public function makePermissionLabel()
    {
        return "Can view list of customers";
    }

    public function getHandler()
    {
        $customers = CustomersRepository::init()->getCustomers();

        $transformed_data = CustomersRepository::transformAsApiCollectionResponse($customers,
            'customer_info_transformer');

        $data = $transformed_data->response()->getData(true);

        return Inertia::render('users/customers/Index', [
            'customers' => $data
        ]);

    }

    /**
     * @param Request $request
     * @throws \Exception
     */
    public function postHandler(Request $request)
    {
        $payload = validator()->make($request->all(), [
            'id' => 'bail|sometimes',
            "display_name" => "bail|required",
            "email" => "bail|required|email",

            "bioData.first_name" => "bail|required",
            "bioData.last_name" => "bail|required",
            "bioData.date_of_birth" => "bail|required",
            "bioData.mobile" => "bail|nullable",
            "bioData.phone" => "bail|nullable",
        ])->validate();

        $customer = CustomersRepository::init()->createCustomer($payload);

        flash()->message($customer->bioData->getFullName() . ' was saved successfully!');

        return redirect()->route('backend.scrud.users.customers');

    }

}