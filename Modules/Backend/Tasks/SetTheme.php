<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 16/03/2020
 * Time: 4:03 PM
 */

namespace Modules\Backend\Tasks;


use Caffeinated\Themes\Facades\Theme;
use Illuminate\Support\Str;
use Modules\Taskprocessor\Kernel\TaskProcessor;

class SetTheme extends TaskProcessor
{
    protected $is_sync = true;

    protected $trigger = [
        'backend.boot'
    ];

    /**
     * @param array $args
     */
    public function execute(...$args)
    {
        if (Str::startsWith(request()->getPathInfo(), '/app/console')) {
            Theme::set(config('backend_module.theme'));
        }

    }

}