<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 13/03/2020
 * Time: 12:38 PM
 */

namespace Modules\Auth\Events;


use Modules\Auth\Models\User;
use Modules\Stores\Models\Store;

class AccountHasBeenCreated
{
    /**
     * @var User
     */
    public $user;
    /**
     * @var Store
     */
    public $store;


    /**
     * AccountHasBeenCreated constructor.
     * @param User $user
     * @param Store $store
     */
    public function __construct(User $user, Store $store)
    {
        $this->user = $user;
        $this->store = $store;
    }
}