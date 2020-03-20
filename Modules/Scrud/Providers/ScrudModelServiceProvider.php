<?php

namespace Modules\Scrud\Providers;

use Illuminate\Support\ServiceProvider;
use Modules\Scrud\Commands\SetupScrudPermissions;
use Modules\Scrud\Traits\LoadScrudModels;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class ScrudModelServiceProvider extends ServiceProvider
{
    use LoadModuleTasks, LoadScrudModels;

    private $commands = [
        SetupScrudPermissions::class
    ];

    /**
     * Bootstrap the application services.
     *
     * @return void
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        \Modules\Scrud\Kernel\ScrudService::boot();

        $this->loadModuleScruds('scrud');

        $this->loadModuleTasks('scrud');
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
