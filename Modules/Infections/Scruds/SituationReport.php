<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 20/03/2020
 * Time: 1:57 PM
 */

namespace Modules\Infections\Scruds;


use Modules\Infections\Http\Controllers\Inertia\SituationReportController;
use Modules\Infections\Models\SituationReport as Report;
use Modules\Infections\Repositories\SituationReportRepository;
use Modules\Scrud\Kernel\ScrudModel;

class SituationReport extends ScrudModel
{
    protected $model = Report::class;

    protected $controller = SituationReportController::class;

    protected $repository = SituationReportRepository::class;

    protected $scrud_menu_title = 'Situation Reports';
}