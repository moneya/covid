<?php

namespace Modules\Networkdata\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\RequiresRefCode;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\HasRefCode;

class CaseMap extends Model implements RequiresRefCode
{
    use HasRefCode, HasMetadataAttribute;

    protected $table = 'case_maps';

    protected $fillable = [
        'source', 'source_type'
    ];

    public function cases()
    {
        return $this->belongsToMany(ConfirmedCase::class,'case_mapping_pivot', 'map_id', 'case_id');
    }
}
