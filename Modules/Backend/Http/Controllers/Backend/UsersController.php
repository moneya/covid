<?php

namespace Modules\Backend\Http\Controllers\Backend;

use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Modules\Auth\Models\User;
use Modules\Backend\Repositories\UsersRepository;

class UsersController extends Controller
{
//    public function manage()
//    {
//        $users = UsersRepository::init()->getAllUsers();
//
//        return view('backend::pages.users.manage', compact('users'));
//    }
//
//    public function deleteUser(Request $request)
//    {
//        UsersRepository::init()->deleteUsersByIds($request->get('ids'));
//
//        flash()->info('Deleted!');
//
//        return redirect()->back();
//    }
//
//    public function settings()
//    {
//        return view('backend::pages.users.settings');
//    }
//
//    public function addUserPage()
//    {
//        return view('backend::pages.users.add-user');
//    }
//
//    public function editUserPage(User $user)
//    {
//        return view('backend::pages.users.edit-user', compact('user'));
//    }
//
//    /**
//     * @param Request $request
//     * @return \Illuminate\Http\RedirectResponse
//     * @throws \Illuminate\Validation\ValidationException
//     */
//    public function saveUser(Request $request)
//    {
//        $payload = $this->validate($request, [
//            'id' => 'bail|sometimes|numeric',
//            'first_name' => 'bail|required|string',
//            'last_name' => 'bail|required|string',
//            'role' => 'bail|required|numeric',
//            'email' => 'bail|required|email|unique:users',
//        ]);
//
//        /** @var User $user */
//        $user = UsersRepository::init()->saveUser($payload);
//
//        flash()->success($user->getFullName() . ' has been successfully saved!');
//
//        return redirect()->back();
//
//    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     * @throws \Illuminate\Validation\ValidationException
     */
    public function changePassword(Request $request)
    {
        $payload = $this->validate($request, [
           'current_password' => 'bail|required',
           'new_password' => 'bail|required|same:retype_password',
        ]);

        /** @var User $user */
        $user = auth()->user();

        $result = $user->changeUserPassword($payload['current_password'], $payload['new_password']);

        if($result){
            flash()->success('Password was successfully updated');
        } else {
            flash()->error('Error! Password was not updated!');
        }

        return redirect()->back();
    }


}
