<?php

namespace Modules\Auth\Http\Controllers\Api;

use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Modules\Auth\Events\UserHasLoggedIn;
use Modules\Auth\Models\User;
use Modules\Auth\Repositories\UserRepository;
use Modules\System\Http\Controllers\Api\BaseController;
use Symfony\Component\HttpKernel\Exception\HttpException;

class LoginController extends BaseController
{
    use AuthenticatesUsers;


    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User  $user
     * @return mixed
     */
    protected function authenticated(Request $request, User $user)
    {
//        $user->updateLastLogin();

        $token = $user->api_token;
//        $token = $user->updateAccessToken();

        session()->push('auth-token', $token);

        event(new UserHasLoggedIn($user, $request));

        return UserRepository::transformAsApiResource($user);
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw new HttpException(422, 'Invalid login credentials');
    }

    protected function loggedOut(Request $request)
    {
        session()->forget('auth-token');
    }

    protected function credentials(Request $request)
    {
        return $request->only($this->username(), 'password');
    }

    public function username()
    {
        return 'email';

//        $username_field = \request()->filled('phone') ? 'phone' : 'email';
//
//        $username_data = \request()->get($username_field);
//
//        if (filter_var($username_data, FILTER_VALIDATE_EMAIL)) {
//            $username_field = 'email';
//            // username field is an email
//            \request()->request->add([
//                'email' => $username_data
//            ]);
//        } else {
//            // username field is a phone number
//            $username_field = 'phone';
//            \request()->request->add([
//                'phone' => $username_data
//            ]);
//        }
//
//        return $username_field;
    }

}
