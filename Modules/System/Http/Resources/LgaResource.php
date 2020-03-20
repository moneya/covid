<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 6/13/2019
 * Time: 9:33 AM
 */

namespace Modules\System\Http\Resources;


use Illuminate\Http\Resources\Json\Resource;

class LgaResource extends Resource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->lga_name,
        ];
    }

}