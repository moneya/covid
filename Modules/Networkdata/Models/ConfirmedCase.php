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

    public function getRouteKeyName()
    {
        return 'ref_code';
    }

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

    public function network_edge_transformer()
    {
        $edges = [];
        $mappings = $this->maps()->get();

        $mappings_count = $mappings->count();

        foreach ($mappings as $index => $case_map){
            /** @var CaseMap $next_mapping */
            /** @var CaseMap $case_map */
            $next_mapping = !empty($mappings[$index + 1]) ? $mappings[$index + 1] : null;

            if(($mappings_count > 1) && ($mappings_count - 2) == $index){
                // todo: route network map to confirmed case
                $edges[] = [
                    'from' => $case_map->getNetworkId(),
                    'to' => $this->getNetworkId()
                ];

                if($next_mapping)
                $edges[] = [
                    'from' => $this->getNetworkId(),
                    'to' => $next_mapping->getNetworkId(),
                ];
            }elseif(($mappings_count == 1)){
                // todo: route network map to confirmed case
                $edges[] = [
                    'from' => $case_map->getNetworkId(),
                    'to' => $this->getNetworkId()
                ];
            }

            else {
                if($next_mapping){
                    $edges[] = [
                        'from' => $case_map->getNetworkId(),
                        'to' => $next_mapping->getNetworkId()
                    ];
                }
            }
        }

        if(!empty($edges)) return $edges;

        return null;
    }

    public function network_node_transformer()
    {
        $image_path = $this->gender == 'Female' ? '/themes/pages/images/female-avatar.png' : '/themes/pages/images/male-avatar.png';

        return [
            'id' => $this->getNetworkId(),
            'label' => 'Case (' . $this->age . ' years old)',
            'shape' => 'circularImage',
            'image' => asset($image_path)

        ];
    }

    public function getNetworkId()
    {
        return 'C-' . $this->id;
    }

}
