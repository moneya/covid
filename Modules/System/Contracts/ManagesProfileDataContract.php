<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 11 Dec 2019
 * Time: 11:19 AM
 */

namespace Modules\System\Contracts;


interface ManagesProfileDataContract
{
    public function updateProfile(array $payload);

}