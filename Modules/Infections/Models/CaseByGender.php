<?php

namespace Modules\Infections\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\TransformableModelTrait;

class CaseByGender extends Model implements TransformableModelContract
{
    use HasMetadataAttribute, TransformableModelTrait;

    protected $table = 'case_by_genders';

    protected $fillable = [
        'disease_id',
        'gender',
        'case_count',
        'published_at',
    ];

    protected $dates = [
        'published_at'
    ];

    public function disease()
    {
        return $this->belongsTo(Disease::class,'disease_id');
    }

    public function default_transformer()
    {
        return array_merge([
            'id' => $this->id,
            'gender' => $this->gender,
            'caseCount' => $this->case_count,
            'unidentified' => $this->unidentified,
            'published' => $this->published_at->format('jS M, Y'),
        ], [
            'attributes' => array_diff_assoc($this->getAttributes(), $this->only($this->getFillable()))
        ]);
    }
}
