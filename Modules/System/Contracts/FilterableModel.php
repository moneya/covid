<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 23/01/2020
 * Time: 5:32 AM
 */

namespace Modules\System\Contracts;


use Illuminate\Database\Eloquent\Builder;

interface FilterableModel
{
    public function applyFilter(Builder $query);

}