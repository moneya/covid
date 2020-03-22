<?php


use Illuminate\Support\Facades\Route;
use Themes\Sitefront\Http\Controllers\ConfirmedCasesController;
use Themes\Sitefront\Http\Controllers\DashboardController;

Route::name('frontend.')->group(function(){
    Route::get('/', [
        DashboardController::class,
        'dashboard'
    ])->name('dashboard');

    Route::get('/confirmed-cases/{confirmedCase}/details', [
        ConfirmedCasesController::class,
        'details'
    ])->name('confirmed-cases.details');
});