<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 2 Oct 2019
 * Time: 6:44 AM
 */

namespace Modules\System\Contracts;


interface TransformableModelContract
{

    public function transform($transformer = 'default_transformer');

    public function default_transformer();

}