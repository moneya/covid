<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 28 Dec 2019
 * Time: 10:48 AM
 */

namespace Modules\Taskprocessor\Kernel;


class Engine
{
    private $resolved_tasks = [];


    public function addTask(TaskProcessor $task)
    {
        $task->boot();

        $this->resolved_tasks[] = $task;
    }

    /**
     * @return self
     */
    public static function init()
    {
        $class = get_called_class();

        $object = app($class);

        if(!app()->has($class)){
            app()->instance($class, $object);
        }

        return $object;
    }

}