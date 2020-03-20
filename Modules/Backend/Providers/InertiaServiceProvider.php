<?php

namespace Modules\Backend\Providers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Modules\Auth\Models\User;
use Modules\Stores\Models\Store;

class InertiaServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        Inertia::share([
            // Synchronously
            'app' => [
                'name' => config('app.name')
            ],
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object)[];
            },
            'notifications' => function(){
                return session()->get('flash_notification', collect())->toArray();
            },
            // Lazily
            'auth' => function () {
                /** @var User $user */
                if(!$user = auth()->user()) return null;

                return [
                    'user' => $user->transform(),
                ];
            },
            'myStore' => function(){
                /** @var User $user */
                if(!$user = auth()->user()) return null;

                /** @var Store $store */
                if(!$store = $user->myStore) return null;

                return $store->transform();

            }
        ]);
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
