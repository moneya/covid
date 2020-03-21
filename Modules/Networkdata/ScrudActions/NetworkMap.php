<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 9:57 AM
 */

namespace Modules\Networkdata\ScrudActions;


use Inertia\Inertia;
use Modules\Networkdata\Repositories\ConfirmedCaseRepository;
use Modules\Scrud\Kernel\ScrudAction;

class NetworkMap extends ScrudAction
{
    protected $secured = false;

    protected $http_verb = [
        'get'
    ];

    public function getHandler()
    {
        $cases = ConfirmedCaseRepository::init()->fetchJson();

        return Inertia::render('networkData/Map');
    }

}