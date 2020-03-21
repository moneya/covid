<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 6:36 AM
 */

namespace Modules\Networkdata\Scruds;


use Modules\Networkdata\Http\Controllers\Inertia\ConfirmedCaseController;
use Modules\Networkdata\Models\ConfirmedCase;
use Modules\Networkdata\Repositories\ConfirmedCaseRepository;
use Modules\Networkdata\ScrudActions\NetworkMap;
use Modules\Scrud\Kernel\ScrudModel;

class Cases extends ScrudModel
{
    protected $model = ConfirmedCase::class;

    protected $controller = ConfirmedCaseController::class;

    protected $repository = ConfirmedCaseRepository::class;

    protected $scrud_menu_title = 'Cases';

    protected $action_registry = [
        NetworkMap::class
    ];

}