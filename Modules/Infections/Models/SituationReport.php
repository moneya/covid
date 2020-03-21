<?php

namespace Modules\Infections\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Models\State;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\TransformableModelTrait;

class SituationReport extends Model implements TransformableModelContract
{
    use HasMetadataAttribute, TransformableModelTrait;

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

    public function state()
    {
        return $this->belongsTo(State::class,'state_id');
    }

    public function default_transformer()
    {
        $state = $this->state;

        return array_merge([
            'id' => $this->id,
            'screened' => [
                'previously' => $this->prev_screened,
                'last24' => $this->screened_last_24hr
            ],
            'confirmedCount' => $this->confirmed_count,
            'asymptomaticCount' => $this->asymptomatic_count,
            'dischargedCount' => $this->discharged_count,
            'deathCount' => $this->death_count,
            'published' => $this->published_at->format('jS M, Y'),
            'state' => [
                'name' => $state->state_name,
                'code' => $state->state_code
            ]
        ], [
            'attributes' => array_diff_assoc($this->getAttributes(), $this->only($this->getFillable()))
        ]);
    }
}
