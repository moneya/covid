<?php


use Illuminate\Support\Facades\Route;
use Themes\Sitefront\Http\Controllers\HomeController;

Route::get('/', [
    HomeController::class,
    'home'
]);