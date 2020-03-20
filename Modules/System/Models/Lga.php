<?php

namespace Modules\System\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Traits\HasMetadataAttribute;

class Lga extends Model
{
//    use HasMetadataAttribute;

    protected $table = 'lgas';

    protected $guarded =['id'];

    public $timestamps = false;

    public function state()
    {
        return $this->belongsTo(State::class,'state_id');
    }

    public static function getAllLga()
    {
        return static::query()->get()->groupBy(['state_name']);
    }

    public static function getStates()
    {
        return static::query()->pluck('state_name','state_id');
    }
}
