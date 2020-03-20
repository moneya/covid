<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 23/01/2020
 * Time: 5:40 AM
 */

namespace Modules\System\Traits;


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;

trait FilterModelTrait
{
    public function getSearchableFields()
    {
        return $this->fillable;
    }

    public function applyFilter(Builder $query)
    {
        $payload = request()->query();

        foreach ($payload as $key => $value){
            $search = Str::snake($key);

            if(in_array($search, $this->getSearchableFields())){
                $query = $query->where($search, $value);
            }
        }

        return $query;

    }

}