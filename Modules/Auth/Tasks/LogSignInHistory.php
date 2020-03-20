<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 5 Jan 2020
 * Time: 8:00 PM
 */

namespace Modules\Auth\Tasks;


use Modules\Auth\Events\UserHasLoggedIn;
use Modules\Taskprocessor\Kernel\TaskProcessor;

class LogSignInHistory extends TaskProcessor
{
    protected $is_sync = true;

    protected $trigger = UserHasLoggedIn::class;

    /**
     * @param array $args
     */
    public function execute(...$args)
    {
        /** @var UserHasLoggedIn $event */
        $event = $args[0];
        $user = $event->user;
        $request = $event->request;

        // todo: log user login history
        $user->loginHistories()->create([
            'ip' => $request->ip()
        ]);
    }
}