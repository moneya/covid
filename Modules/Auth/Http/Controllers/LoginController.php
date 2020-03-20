<?php

namespace Modules\Auth\Http\Controllers;

use Caffeinated\Themes\Facades\Theme;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Modules\Auth\Events\UserHasLoggedIn;

class LoginController extends Controller
{
    use AuthenticatesUsers;

//    protected $redirectTo = '/app/console';

    /**
     * LoginController constructor.
     */
    public function __construct()
    {
        Theme::set(config('backend_module.theme'));
    }

    public function showLoginForm()
    {
        return Inertia::render('auth/Login');
    }

    public function loggedOut(Request $request)
    {
        session()->forget('auth-token');

        flash()->warning('You have been logged out!');

        return redirect()->route('login');
    }

    protected function authenticated(Request $request, $user)
    {
        event(new UserHasLoggedIn($user, $request));

        flash()->success('Welcome, ' . $user->display_name);

        return redirect()->intended($this->redirectPath());
    }


    public function redirectTo()
    {
        return route('app.console.dashboard');
    }
}
