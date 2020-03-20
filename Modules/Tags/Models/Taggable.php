<?php

namespace Modules\Tags\Models;

use Illuminate\Database\Eloquent\Model;

class Taggable extends Model
{
    protected $table = 'taggables';

    public function tag()
    {
        return $this->morphTo('taggable');
    }
}
