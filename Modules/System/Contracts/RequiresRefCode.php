<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21 Oct 2019
 * Time: 4:49 PM
 */

namespace Modules\System\Contracts;


interface RequiresRefCode
{

    public function fillRefCode($length = 7);

    public function getRefCode();

    public function generateRefCode($length = 16);

    public static function fetchByRefCode($ref_code);

}