<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 9 Oct 2019
 * Time: 12:10 PM
 */

namespace Modules\System\Repositories;


use Illuminate\Database\Eloquent\Model;

class AnonymousModelRepository extends BaseRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }



}