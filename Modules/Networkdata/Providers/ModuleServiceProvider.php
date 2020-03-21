<?php

namespace Modules\Networkdata\Providers;

use Caffeinated\Modules\Support\ServiceProvider;
use Modules\Scrud\Traits\LoadScrudModels;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class ModuleServiceProvider extends ServiceProvider
{
    use LoadScrudModels, LoadModuleTasks;

    /**
     * Bootstrap the module services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('networkdata', 'Resources/Lang', 'app'), 'networkdata');
        $this->loadViewsFrom(module_path('networkdata', 'Resources/Views', 'app'), 'networkdata');
        $this->loadMigrationsFrom(module_path('networkdata', 'Database/Migrations', 'app'));
        if(!$this->app->configurationIsCached()) {
            $this->loadConfigsFrom(module_path('networkdata', 'Config', 'app'));
        }
        $this->loadFactoriesFrom(module_path('networkdata', 'Database/Factories', 'app'));

        $this->loadModuleScruds('networkdata');
        $this->loadModuleTasks('networkdata');
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
    }
}
