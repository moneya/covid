<?php

namespace Modules\Networkdata\Models;

use App\Enums\CaseMapSourceTypes;
use Illuminate\Database\Eloquent\Model;
use Modules\System\Contracts\RequiresRefCode;
use Modules\System\Contracts\TransformableModelContract;
use Modules\System\Traits\HasMetadataAttribute;
use Modules\System\Traits\HasRefCode;
use Modules\System\Traits\TransformableModelTrait;

class CaseMap extends Model implements RequiresRefCode, TransformableModelContract
{
    use HasRefCode, HasMetadataAttribute, TransformableModelTrait;

    protected $table = 'case_maps';

    protected $fillable = [
        'source', 'source_type'
    ];

    public function cases()
    {
        return $this->belongsToMany(ConfirmedCase::class,'case_mapping_pivot', 'map_id', 'case_id');
    }

    public function network_node_transformer()
    {
        $image_path = '/themes/pages/images/location-icon.png';

        if($this->source_type == CaseMapSourceTypes::Flight)
            $image_path = '/themes/pages/images/airplane-icon.png';

        if($this->source_type == CaseMapSourceTypes::Person)
            $image_path = '/themes/pages/images/person-icon.png';

        return [
            'id' => $this->getNetworkId(),
            'label' => $this->source,
            'type' => $this->source_type,
            'shape' => 'circularImage',
            'image' => asset($image_path)
        ];
    }

    public function getNetworkId()
    {
        return 'CASE-MAP-' . $this->id;
    }
}
