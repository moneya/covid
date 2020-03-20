<?php

namespace Modules\Scrud\Providers;

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
        $this->loadTranslationsFrom(module_path('scrud', 'Resources/Lang', 'app'), 'scrud');
        $this->loadViewsFrom(module_path('scrud', 'Resources/Views', 'app'), 'scrud');
//        $this->loadMigrationsFrom(module_path('scrud', 'Database/Migrations', 'app'), 'scrud');
        if(!$this->app->configurationIsCached()) {
            $this->loadConfigsFrom(module_path('scrud', 'Config', 'app'));
        }
//        $this->loadFactoriesFrom(module_path('scrud', 'Database/Factories', 'app'));

        $this->app->register(ScrudModelServiceProvider::class);

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
