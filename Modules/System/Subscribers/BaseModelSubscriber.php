<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21 Oct 2019
 * Time: 5:02 PM
 */

namespace Modules\System\Subscribers;


use Modules\Auth\Contracts\ShouldLogUserId;
use Modules\System\Contracts\RequiresRefCode;
use Modules\System\Events\CreatingModelEvent;

class BaseModelSubscriber
{

    public function whenCreatingModel($event)
    {
        $model = $event->model;

        if ($model instanceof ShouldLogUserId){
            $model->fillLoggedByUserId();
        }

        if($model instanceof RequiresRefCode){
            $model->fillRefCode();
        }
    }

    public function subscribe($events)
    {
        $events->listen(
            CreatingModelEvent::class,
            self::class . '@whenCreatingModel'
        );
    }

}