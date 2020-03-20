<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 28 Dec 2019
 * Time: 12:17 PM
 */

namespace Modules\Scrud\Tasks;


use Illuminate\Support\Facades\Artisan;
use Modules\System\Events\InstallationComplete;
use Modules\Taskprocessor\Kernel\TaskProcessor;
use Symfony\Component\Console\Output\ConsoleOutput;

class RunScrudSetup extends TaskProcessor
{

    protected $is_sync = true;

    protected $trigger = InstallationComplete::class;

    /**
     * @param array $args
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function execute(...$args)
    {
        /** @var ConsoleOutput $output */
        $output = app()->make(ConsoleOutput::class);

        $output->writeln('Running scrud Permissions...');

        Artisan::call('scrud:run-permissions');


    }
}