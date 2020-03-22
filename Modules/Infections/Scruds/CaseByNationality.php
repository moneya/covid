<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 20/03/2020
 * Time: 1:57 PM
 */

namespace Modules\Infections\Scruds;


use Modules\Infections\Http\Controllers\Inertia\CaseByNationalityController;
use Modules\Infections\Models\CaseByNationality as NationalityCase;
use Modules\Infections\Repositories\CaseByNationalityRepository;
use Modules\Scrud\Kernel\ScrudModel;

class CaseByNationality extends ScrudModel
{
    protected $model = NationalityCase::class;

    protected $controller = CaseByNationalityController::class;

    protected $repository = CaseByNationalityRepository::class;

    protected $scrud_menu_title = 'Case By Nationality';
}