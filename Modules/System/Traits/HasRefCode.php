<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 9/19/2019
 * Time: 7:49 AM
 */

namespace Modules\System\Traits;


use Illuminate\Support\Str;

trait HasRefCode
{

    public function fillRefCode($length = 7)
    {
        return $this->forceFill([
            'ref_code' => $this->generateRefCode($length)
        ]);
    }

    public function getRefCode()
    {
        return $this->ref_code;
    }

    public function generateRefCode($length = 16)
    {

        return Str::random($length);

    }

    public static function fetchByRefCode($ref_code)
    {
        return self::where('ref_code', $ref_code)->first();
    }
}