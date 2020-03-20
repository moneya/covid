<?php

namespace Modules\Tags\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Traits\HasMetadataAttribute;

class Tag extends Model
{
    use HasMetadataAttribute;

    protected $table = 'tags';

    protected $fillable = [
        'name', 'metadata'
    ];

    public function taggables()
    {
        return $this->morphMany(Taggable::class,'taggables');
    }
}
