<?php

namespace Modules\Taskprocessor\Providers;

use Illuminate\Support\ServiceProvider;
use Modules\Taskprocessor\Commands\ProcessTasks;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class TaskProcessorServiceProvider extends ServiceProvider
{
    use LoadModuleTasks;

    protected $commands = [
        ProcessTasks::class,
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        $this->loadModuleTasks('taskprocessor');
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerConsoleCommands();
    }

    protected function registerConsoleCommands(){
        if(property_exists(self::class, 'commands'))
            $this->commands($this->commands);
    }
}
