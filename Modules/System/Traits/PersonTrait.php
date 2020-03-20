<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 9/6/2019
 * Time: 2:26 PM
 */

namespace Modules\System\Traits;


trait PersonTrait
{

    public function getFullName()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function getAge($dob_column_name = 'dob')
    {
        return $this->$dob_column_name ? now()->diffInYears($this->$dob_column_name) : null;
    }

    public function getAgeString($dob_column_name = 'dob')
    {
        return $this->$dob_column_name ? now()->diffInYears($this->$dob_column_name) . ' years' : 'n/a';
    }

}