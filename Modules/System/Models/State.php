<?php

namespace Modules\System\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Traits\HasMetadataAttribute;

class State extends Model
{
//    use HasMetadataAttribute;


    protected $table = 'states';

    protected $guarded = ['id'];

    public function lgas()
    {
        return $this->hasMany(Lga::class,'state_id');
    }

    public function wards()
    {
        return $this->hasMany(Ward::class,'state_id');
    }

    /**
     * @param $name
     * @return self
     */
    public static function getStateByName($name)
    {
        return self::where('state_name', $name)->first();
    }

    public static function getRiversState()
    {
        return self::getStateByName('RIVERS');
    }
}
