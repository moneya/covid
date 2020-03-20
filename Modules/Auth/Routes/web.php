<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your module. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'api'], function () {
    Route::post('login', 'Api\LoginController@login')->name('api.login');
});
Route::get('/register', 'RegistrationController@registrationPage')->name('register');
Route::post('/register', 'RegistrationController@register')->name('register');

Route::get('app/console/login', 'LoginController@showLoginForm')->name('login');
Route::get('/login', 'LoginController@showLoginForm')->name('login');
Route::post('app/console/login', 'LoginController@login')->name('login');
Route::post('app/console/logout', 'LoginController@logout')->middleware('auth')->name('logout');
