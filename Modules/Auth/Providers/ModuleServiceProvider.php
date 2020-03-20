<?php

namespace Modules\Auth\Providers;

use Caffeinated\Modules\Support\ServiceProvider;
use Modules\Auth\Commands\RunAuthPermissions;
use Modules\Auth\Http\Middleware\ApiHeader;
use Modules\Scrud\Traits\LoadScrudModels;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class ModuleServiceProvider extends ServiceProvider
{
    use LoadScrudModels, LoadModuleTasks;

    protected $commands = [
        RunAuthPermissions::class
    ];

    /**
     * Bootstrap the module services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {

        $this->addMiddleware(ApiHeader::class);

        $this->loadTranslationsFrom(module_path('auth', 'Resources/Lang', 'app'), 'auth');
        $this->loadViewsFrom(module_path('auth', 'Resources/Views', 'app'), 'auth');
        $this->loadMigrationsFrom(module_path('auth', 'Database/Migrations', 'app'), 'auth');
        if(!$this->app->configurationIsCached()) {
            $this->loadConfigsFrom(module_path('auth', 'Config', 'app'));
        }
        $this->loadFactoriesFrom(module_path('auth', 'Database/Factories', 'app'));

        $this->loadModuleScruds('auth');
        $this->loadModuleTasks('auth');
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
        $this->registerConsoleCommands();
    }

    protected function registerConsoleCommands(){
        if(property_exists(self::class, 'commands'))
            $this->commands($this->commands);
    }
}
