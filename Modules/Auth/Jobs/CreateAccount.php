<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 13/03/2020
 * Time: 12:25 PM
 */

namespace Modules\Auth\Jobs;


use App\Enums\Roles;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Str;
use Modules\Auth\Events\AccountHasBeenCreated;
use Modules\Auth\Models\User;
use Modules\Auth\Repositories\UserRepository;
use Modules\Stores\Repositories\StoreRepository;

class CreateAccount implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $storeName;
    public $email;
    public $password;


    /**
     * CreateAccount constructor.
     * @param $storeName
     * @param $email
     * @param $password
     */
    public function __construct($storeName, $email, $password)
    {
        $this->storeName = $storeName;
        $this->email = $email;
        $this->password = $password;
    }

    /**
     * @throws \Exception
     */
    public function handle()
    {
        // todo: create user
        /** @var User $user */
        $user = UserRepository::init()->createStoreOwner([
            'display_name' => $this->storeName,
            'email' => $this->email,
            'password' => $this->password
        ]);

        // todo: create store
        $myStore = StoreRepository::init()->setupStore($user, [
            'name' => $this->storeName,
            'slug' => Str::slug($this->storeName),
            'email' => $this->email
        ]);

        event(new AccountHasBeenCreated($user, $myStore));
    }
}