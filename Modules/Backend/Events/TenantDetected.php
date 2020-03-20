<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 16/03/2020
 * Time: 5:18 PM
 */

namespace Modules\Backend\Events;


class TenantDetected
{
    /**
     * @var string
     */
    public $slug;


    /**
     * TenantDetected constructor.
     * @param string $slug
     */
    public function __construct(string $slug)
    {
        $this->slug = $slug;
    }
}