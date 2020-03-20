<?php

namespace Modules\System\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\System\Traits\HasMetadataAttribute;

class SystemConfiguration extends Model
{
    use HasMetadataAttribute;

    protected $table = 'system_configurations';

    protected $fillable = ['key', 'value', 'metadata'];


}
