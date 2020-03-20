<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 4/17/2019
 * Time: 9:47 AM
 */

namespace Modules\System\Traits;


trait HasMetadataAttribute
{
    public function getMetadataAttribute($value)
    {
        if(!$value) return [];
        return json_decode($value, true);
    }

    public function fillMetadata(array $data)
    {
        $metadata = $this->metadata;

        $metadata = array_merge($metadata, $data);

        $this->forceFill([
            'metadata' => json_encode($metadata)
        ]);

        return $this;

    }

    public function nullifyMetadata()
    {
        $this->update([
            'metadata' => null
        ]);

        return $this;
    }

}