<?php

namespace Modules\System\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Traits\HasMetadataAttribute;

class Ward extends Model
{
//    use HasMetadataAttribute;

    protected $table = 'wards';

    protected $guarded =['id'];

    public function state()
    {
        return $this->belongsTo(State::class,'state_id');
    }

    public function lga()
    {
        return $this->belongsTo(Lga::class,'lga_id');
    }
}
