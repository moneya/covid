<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 28 Dec 2019
 * Time: 10:54 AM
 */

namespace Modules\Taskprocessor\Traits;


use Illuminate\Support\Str;
use Modules\Taskprocessor\Kernel\Engine;
use Modules\Taskprocessor\Kernel\TaskProcessor;
use Symfony\Component\Finder\Finder;

trait LoadModuleTasks
{

    /**
     * @param $module_slug
     * @param string $module_location
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function loadModuleTasks($module_slug, $module_location = 'app')
    {
        $this->loadTasksFrom(module_path($module_slug, 'Tasks', $module_location));

    }

    public function loadTasksFrom(string $path)
    {
        $configPath = realpath($path);

        if(!file_exists($path)){
            return;
        }

        foreach (Finder::create()->files()->name('*.php')->in($configPath) as $task_file) {
            /** @var \SplFileInfo $task_file */

            $task = $this->resolveTaskFile($task_file);

            Engine::init()->addTask($task);

        }
    }

    /**
     * @param \SplFileInfo $file
     * @return TaskProcessor
     */
    private function resolveTaskFile(\SplFileInfo $file)
    {
        $full_path = $file->getRealPath();

        $file_namespace = Str::substr($full_path, strlen(base_path()));

        $class = Str::before($file_namespace, '.php');

        $class = str_replace('/','\\', $class);

        return $class::init();
    }

}