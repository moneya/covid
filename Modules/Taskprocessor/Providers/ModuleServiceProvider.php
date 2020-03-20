<?php

namespace Modules\Taskprocessor\Providers;

use Caffeinated\Modules\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('taskprocessor', 'Resources/Lang', 'app'), 'taskprocessor');
        $this->loadViewsFrom(module_path('taskprocessor', 'Resources/Views', 'app'), 'taskprocessor');
        $this->loadMigrationsFrom(module_path('taskprocessor', 'Database/Migrations', 'app'));
        if(!$this->app->configurationIsCached()) {
            $this->loadConfigsFrom(module_path('taskprocessor', 'Config', 'app'));
        }
        $this->loadFactoriesFrom(module_path('taskprocessor', 'Database/Factories', 'app'));

        $this->app->register(TaskProcessorServiceProvider::class);

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
