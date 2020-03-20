<?php

namespace Modules\Infections\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\HasSlugTrait;
use Modules\System\Traits\TransformableModelTrait;

class Disease extends Model implements TransformableModelContract
{
    use TransformableModelTrait, HasSlugTrait, HasMetadataAttribute;

    protected $table = 'diseases';

    protected $fillable = [
        'name'
    ];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function situationReports()
    {
        return $this->hasMany(SituationReport::class,'disease_id');
    }
}
