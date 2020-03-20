<?php

namespace Modules\Auth\Http\Controllers;

use Caffeinated\Themes\Facades\Theme;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Auth\Jobs\CreateAccount;

class RegistrationController extends Controller
{


    /**
     * RegistrationController constructor.
     */
    public function __construct()
    {
        Theme::set(config('backend_module.theme'));
    }

    public function registrationPage(Request $request)
    {
        return Inertia::render('auth/Registration', [

        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function register(Request $request)
    {
        $payload = $this->validate($request, [
            'storeName' => 'bail|required|string|unique:stores,name',
            'email' => 'bail|string|required|email|unique:users,email',
            'password' => 'bail|string|required|same:confirmPassword'
        ]);

        dispatch(new CreateAccount($payload['storeName'], $payload['email'], $payload['password']));

        flash()->success('Your account has been setup. Please check your mail.');

        return redirect()->route('login');
    }
}
