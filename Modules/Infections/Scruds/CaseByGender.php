<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 20/03/2020
 * Time: 1:57 PM
 */

namespace Modules\Infections\Scruds;


use Modules\Infections\Http\Controllers\Inertia\CaseByGenderController;
use Modules\Infections\Models\CaseByGender as CaseByGenderModel;
use Modules\Infections\Repositories\CaseByGenderRepository;
use Modules\Scrud\Kernel\ScrudModel;

class CaseByGender extends ScrudModel
{
    protected $model = CaseByGenderModel::class;

    protected $controller = CaseByGenderController::class;

    protected $repository = CaseByGenderRepository::class;

    protected $scrud_menu_title = 'Case By Gender';
}