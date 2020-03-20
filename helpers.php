<?php

use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;

function appDomain(){
    return env('APP_DOMAIN');
}

function validationErrorResponseForApi(\Illuminate\Validation\ValidationException $e){
    $flattened_errors = Arr::flatten($e->errors());
    $response['errors'] = $flattened_errors;
    $response['ok'] = false;
    $response['message'] = $e->getMessage();
    $status = Response::HTTP_UNAUTHORIZED;

    $response['rendered'] =  '<ul>' .
        implode('', array_map(function($error_item){
            return '<li>' . $error_item . '</li>';
        }, $flattened_errors))
        . '</ul>';

    return response($response, $status);
}

function listArrayInHtml(array $list){
    return '<ul>' .
        implode('', array_map(function($list_item){
            return '<li>' . $list_item . '</li>';
        }, $list))
        . '</ul>';
}


function inPercentage($numerator, $denominator){
    if($denominator == 0) return 0;

    return round(($numerator / $denominator) * 100,2);
}


function deleteDir($dirPath) {
    if (! is_dir($dirPath)) {
        throw new InvalidArgumentException("$dirPath must be a directory");
    }
    if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
        $dirPath .= '/';
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            deleteDir($file);
        } else {
            unlink($file);
        }
    }
    rmdir($dirPath);
}


if(!function_exists('str_slug')){
    function str_slug($text){
        return \Illuminate\Support\Str::slug($text);
    }
}

if(!function_exists('camel_case')){
    function camel_case($text){
        return \Illuminate\Support\Str::camel($text);
    }
}

if(!function_exists('theme_asset')){
    function theme_asset($file, $theme = null){

        $currentTheme = $theme ? $theme : \Caffeinated\Themes\Facades\Theme::getCurrent();

        $currentTheme = strtolower($currentTheme);

        return url("themes/{$currentTheme}/{$file}");
    }
}

/**
 * @return array
 * @throws \Illuminate\Contracts\Container\BindingResolutionException
 */
function getSalesForms(){
    return [
        'comprehensiveinsurancesalesform' => [
            'name' => 'Comprehensive Ins. Form',
            'url' => url(fetchScrud('insurance-subscriptions')->getRouteByAction('comprehensiveinsurancesalesform')->uri())
        ],

    ];
}