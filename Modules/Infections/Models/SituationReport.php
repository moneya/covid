<?php

namespace Modules\Infections\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Traits\HasMetadataAttribute;

class SituationReport extends Model
{
    use HasMetadataAttribute;

    protected $table = 'situation_reports';

    protected $fillable = [
        'state_id',
        'prev_screened',
        'screened_last_24hr',
        'confirmed_count',
        'asymptomatic_count',
        'discharged_count',
        'death_count',
        'published_at',
        'disease_id'
    ];

    protected $dates = [
        'published_at'
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class,'disease_id');
    }
}
