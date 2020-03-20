<?php

namespace Modules\System\Providers;

use Caffeinated\Modules\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Validator;
use Modules\System\Commands\Install;
use Modules\System\Commands\Update;
use Modules\System\Validators\ReCaptcha;
use Modules\Taskprocessor\Traits\LoadModuleTasks;

class ModuleServiceProvider extends ServiceProvider
{
    use LoadModuleTasks;

    protected $commands = [
        Install::class,
        Update::class,
    ];

    /**
     * Bootstrap the module services.
     *
     * @return void
     * @throws \Caffeinated\Modules\Exceptions\ModuleNotFoundException
     */
    public function boot()
    {
        Validator::extend('recaptcha', ReCaptcha::class . '@validate');
        Schema::defaultStringLength(191);

        $this->loadTranslationsFrom(module_path('system', 'Resources/Lang', 'app'), 'system');
        $this->loadViewsFrom(module_path('system', 'Resources/Views', 'app'), 'system');
        $this->loadMigrationsFrom(module_path('system', 'Database/Migrations', 'app'), 'system');
        $this->loadConfigsFrom(module_path('system', 'Config', 'app'));
        $this->loadFactoriesFrom(module_path('system', 'Database/Factories', 'app'));

        $this->loadModuleTasks('system');
    }

    /**
     * Register the module services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(EventServiceProvider::class);
        $this->app->register(RouteServiceProvider::class);
        $this->registerConsoleCommands();
    }

    protected function registerConsoleCommands(){
        if(property_exists(self::class, 'commands'))
            $this->commands($this->commands);
    }
}
