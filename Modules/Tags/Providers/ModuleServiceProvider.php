<?php

namespace Modules\Tags\Providers;

use Caffeinated\Modules\Support\ServiceProvider;

class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the module services.
     *
     * @return void
     */
    public function boot()
    {
        $this->loadTranslationsFrom(module_path('tags', 'Resources/Lang', 'app'), 'tags');
        $this->loadViewsFrom(module_path('tags', 'Resources/Views', 'app'), 'tags');
        $this->loadMigrationsFrom(module_path('tags', 'Database/Migrations', 'app'));
        if(!$this->app->configurationIsCached()) {
            $this->loadConfigsFrom(module_path('tags', 'Config', 'app'));
        }
        $this->loadFactoriesFrom(module_path('tags', 'Database/Factories', 'app'));
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
