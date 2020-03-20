<?php

use Illuminate\Support\Facades\Route;

// todo: load all api versions available
$api_versions = [
  'v1' /* version */ =>  'api_versions/v1.php' /* api */
];


// todo: bootstrap all loaded api versions for module
Route::name('api.')->group(function() use ($api_versions){
    foreach ($api_versions as $version => $api){
        Route::group([
            'prefix'     => $version,
        ], function ($router) use ($api){
            require $api;
        });
    }
});


