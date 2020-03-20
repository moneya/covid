<?php

namespace Modules\Auth\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\TransformableModelTrait;

class LoginHistory extends Model implements TransformableModelContract
{
    use TransformableModelTrait;

    protected $table = 'login_histories';

    protected $guarded = ['id'];


    public function default_transformer()
    {
        return [
            'ip' => $this->ip,
            'date' => $this->created_at->format('jS M, Y \a\t H:i:s A'),
            'timestamp' => $this->created_at
        ];
    }
}
