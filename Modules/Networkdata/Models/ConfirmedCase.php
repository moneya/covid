<?php

namespace Modules\Networkdata\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Networkdata\Repositories\CaseMapRepository;
use Modules\System\Contracts\RequiresRefCode;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\HasRefCode;
use Modules\System\Traits\TransformableModelTrait;

class ConfirmedCase extends Model implements RequiresRefCode, TransformableModelContract
{
    use HasMetadataAttribute, HasRefCode, TransformableModelTrait;

    protected $table = 'confirmed_cases';

    protected $fillable = [
        'gender', 'age', 'status', 'details'
    ];

    public function maps()
    {
        return $this->belongsToMany(CaseMap::class,'case_mapping_pivot', 'case_id', 'map_id');
    }

    public function updateCaseMappings(array $mappings = [])
    {
        $case_mappings = [];

        foreach ($mappings as $mapping){
            $case_mappings[] = CaseMapRepository::init()->fetchCaseMapBySource($mapping['source'], $mapping['type'])->id;
        }

        $this->maps()->sync($case_mappings);

        return $this;
    }

}
