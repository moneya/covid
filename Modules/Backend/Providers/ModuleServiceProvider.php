<?php

namespace Modules\Backend\Providers;

use Caffeinated\Modules\Support\ServiceProvider;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class ModuleServiceProvider extends ServiceProvider
{
    use LoadModuleTasks;
    /**
     * Bootstrap the module services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('backend', 'Resources/Lang', 'app'), 'backend');
        $this->loadViewsFrom(module_path('backend', 'Resources/Views', 'app'), 'backend');
        $this->loadMigrationsFrom(module_path('backend', 'Database/Migrations', 'app'), 'backend');
        $this->loadConfigsFrom(module_path('backend', 'Config', 'app'));
        $this->loadFactoriesFrom(module_path('backend', 'Database/Factories', 'app'));

        $this->loadModuleTasks('backend');

        event('backend.boot', $this);
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);
        $this->app->register(InertiaServiceProvider::class);
    }
}
