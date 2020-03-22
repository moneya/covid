<?php

namespace Modules\Infections\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\TransformableModelTrait;

class CaseByNationality extends Model implements TransformableModelContract
{
    use HasMetadataAttribute, TransformableModelTrait;

    protected $table = 'case_by_nationalities';

    protected $fillable = [
        'disease_id',
        'case_count',
        'country',
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
            'caseCount' => $this->case_count,
            'country' => $this->country,
            'published' => $this->published_at->format('jS M, Y'),
        ], [
            'attributes' => array_diff_assoc($this->getAttributes(), $this->only($this->getFillable()))
        ]);
    }
}
