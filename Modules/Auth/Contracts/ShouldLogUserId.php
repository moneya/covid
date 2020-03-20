<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21 Oct 2019
 * Time: 3:49 PM
 */

namespace Modules\Auth\Contracts;


interface ShouldLogUserId
{

    public function fillLoggedByUserId();

}