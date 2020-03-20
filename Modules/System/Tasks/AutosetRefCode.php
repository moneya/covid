<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 3 Jan 2020
 * Time: 9:23 AM
 */

namespace Modules\System\Tasks;


use Modules\System\Contracts\RequiresRefCode;
use Modules\Taskprocessor\Kernel\TaskProcessor;

class AutosetRefCode extends TaskProcessor
{
    protected $is_sync = true;

    protected $trigger = [
        'eloquent.creating: *'
    ];

    /**
     * @param array $args
     */
    public function execute(...$args)
    {
        if(!isset($args[0])) return;

        if($model = $args[0]){
            if($model instanceof RequiresRefCode){
                $model->fillRefCode();
            }
        }
    }
}