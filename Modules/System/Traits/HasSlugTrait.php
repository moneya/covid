<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 13 Jan 2020
 * Time: 2:57 PM
 */

namespace Modules\System\Traits;


use Illuminate\Support\Str;

trait HasSlugTrait
{

    public function setSlug($title)
    {
        $title .= ' ' . date('Y m d');

        $this->forceFill([
            'slug' => Str::slug($title)
        ]);
    }

}