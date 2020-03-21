<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 9:57 AM
 */

namespace Modules\Networkdata\ScrudActions;


use Inertia\Inertia;
use Modules\Networkdata\Data\NetworkData;
use Modules\Scrud\Kernel\ScrudAction;

class NetworkMap extends ScrudAction
{
    protected $secured = false;

    protected $http_verb = [
        'get'
    ];

    public function getHandler()
    {
        $network = NetworkData::init()->getNetworkData();

        return Inertia::render('networkData/CaseMap', [
            'network' => $network
        ]);
    }

}