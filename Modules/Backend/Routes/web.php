<?php


use Illuminate\Support\Facades\Route;

Route::prefix('app/console')->middleware('auth')->namespace('Backend')->name('app.console.')->group(function () {
    Route::get('/', 'DashboardController@index')->name('dashboard');

    /*Route::prefix('users')->name('users.')->group(function(){
        Route::get('manage', 'UsersController@manage')->name('manage');
        Route::post('delete', 'UsersController@deleteUser')->name('delete');

        Route::get('add', 'UsersController@addUserPage')->name('add');
        Route::get('{user}/edit', 'UsersController@editUserPage')->name('edit');
        Route::post('save', 'UsersController@saveUser')->name('save');

        Route::get('settings', 'UsersController@settings')->name('settings');
        Route::post('settings/change-password', 'UsersController@changePassword')->name('settings.change-password');

    });*/
});
