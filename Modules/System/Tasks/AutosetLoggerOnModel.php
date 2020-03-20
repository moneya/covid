<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 3 Jan 2020
 * Time: 8:57 AM
 */

namespace Modules\System\Tasks;


use Modules\Auth\Contracts\ShouldLogUserId;
use Modules\Taskprocessor\Kernel\TaskProcessor;

class AutosetLoggerOnModel extends TaskProcessor
{
    protected $is_sync = true;

    protected $trigger = 'eloquent.saving: *';

    /**
     * @param array $args
     */
    public function execute(...$args)
    {
//        $event = $args[0];
        if(!isset($args[0])) return;

        if($model = $args[0]){
            if($model instanceof ShouldLogUserId){
                $model->fillLoggedByUserId();
            }
        }

    }
}