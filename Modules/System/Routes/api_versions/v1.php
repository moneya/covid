<?php

use Illuminate\Support\Facades\Route;

Route::name('v1.system.')->namespace('Api')->middleware('auth:api')->prefix('system')->group(function(){
    Route::get('lga', 'SystemController@fetchLga')->name('lga');
});


