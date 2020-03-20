<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 22 Oct 2019
 * Time: 11:29 AM
 */

namespace Modules\Auth\Events;


use Illuminate\Http\Request;
use Modules\Auth\Models\User;

class UserHasLoggedIn
{
    /**
     * @var User
     */
    public $user;
    /**
     * @var Request
     */
    public $request;


    /**
     * UserHasLoggedIn constructor.
     * @param User $user
     * @param Request $request
     */
    public function __construct(User $user, Request $request)
    {
        $this->user = $user;
        $this->request = $request;
    }
}