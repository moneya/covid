<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 10:38 PM
 */

namespace Themes\Sitefront\Http\Controllers;


class HomeController extends Controller
{
    public function home()
    {
        return view('welcome');
    }

}