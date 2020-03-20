<?php

namespace Modules\Auth\Models;

use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Str;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\TransformableModelTrait;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements TransformableModelContract
{
    use Notifiable, HasMetadataAttribute,
        HasRoles,
        TransformableModelTrait,
        Authorizable;

    protected $dates = [
        'last_login'
    ];


    public function loginHistories()
    {
        return $this->hasMany(LoginHistory::class,'user_id');
    }

    public function getLastLoginHistory()
    {
        return $this->loginHistories()->latest()->first();
    }

    /*public function person()
    {
        return $this->morphTo('person');
    }*/

    public function updateLastLogin()
    {
        $this->update([
            'last_login' => now()
        ]);

        return $this;
    }

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'activated_at' => 'datetime',
        'last_login' => 'datetime',
        'activated' => 'boolean',
    ];

    public function updateAccessToken()
    {
        $token = Str::random(60);

        $this->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();

        return $token;
    }

    public function autoSetApiToken()
    {
        $this->forceFill([
            'api_token' => Str::random(60)
        ])->save();

        return $this;
    }

    public function autoFillApiToken()
    {
        $this->forceFill([
            'api_token' => Str::random(60)
        ]);

        return $this;
    }

    public function changeUserPassword($current_password, $new_password)
    {
        if(password_verify($current_password, $this->password)){
            $this->updatePassword($new_password);
        }

        return false;
    }

    public function updatePassword($password)
    {
        $this->forceFill([
            'password' => bcrypt($password)
        ]);
        $this->save();

        return $this;
    }

    public function default_transformer()
    {
        $last_login = $this->getLastLoginHistory();

        return [
            'id' => $this->id,
            'email' => $this->email,
            'displayName' => $this->display_name,
            'lastLogin' => $last_login ? $last_login->transform() : null,
            'metadata' => $this->metadata,
            'token' => $this->api_token,

        ];
    }

    public function user_info_transformer()
    {
        return [
            'id' => $this->id,
            'displayName' => $this->display_name,
            'email' => $this->email,
            'fullName' => $this->getProfileFullName(),
            'bioData' => $this->bioData
        ];
    }

    public function getProfileFullName()
    {
        /** @var BioData $bio_data */
        $bio_data = $this->bioData;

        return $bio_data ? $bio_data->getFullName() : $this->display_name;

    }
}
