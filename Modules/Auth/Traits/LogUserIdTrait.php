<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21 Oct 2019
 * Time: 3:48 PM
 */

namespace Modules\Auth\Traits;


use Modules\Auth\Models\User;

trait LogUserIdTrait
{

    public function fillLoggedByUserId()
    {
        if(request()->user())
        $this->forceFill([
            'logged_by_user_id' => request()->user()->id
        ]);
    }

    public function loggedByUser()
    {
        return $this->belongsTo(User::class,'logged_by_user_id');
    }

}