<?php

namespace Modules\Infections\Providers;

use Caffeinated\Modules\Support\ServiceProvider;
use Modules\Scrud\Traits\LoadScrudModels;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class ModuleServiceProvider extends ServiceProvider
{
    use LoadModuleTasks, LoadScrudModels;

    /**
     * Bootstrap the module services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('infections', 'Resources/Lang', 'app'), 'infections');
        $this->loadViewsFrom(module_path('infections', 'Resources/Views', 'app'), 'infections');
        $this->loadMigrationsFrom(module_path('infections', 'Database/Migrations', 'app'));
        if(!$this->app->configurationIsCached()) {
            $this->loadConfigsFrom(module_path('infections', 'Config', 'app'));
        }
        $this->loadFactoriesFrom(module_path('infections', 'Database/Factories', 'app'));

        $this->loadModuleTasks('infections');
        $this->loadModuleScruds('infections');
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
