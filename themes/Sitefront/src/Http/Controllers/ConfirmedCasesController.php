<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 22/03/2020
 * Time: 10:45 PM
 */

namespace Themes\Sitefront\Http\Controllers;


use Modules\Infections\Repositories\SituationReportRepository;
use Modules\Networkdata\Models\ConfirmedCase;

class ConfirmedCasesController extends Controller
{

    public function details(ConfirmedCase $confirmedCase)
    {
        $latest_situation_report = SituationReportRepository::init()->fetchLatestReport();

        $total_confirmed_count = $latest_situation_report->sum('overall_confirmed_count');
        $total_asymptomatic_count = $latest_situation_report->sum('overall_asymptomatic_count');
        $total_discharged_count = $latest_situation_report->sum('overall_discharged_count');
        $total_death_count = $latest_situation_report->sum('overall_death_count');

        return view('sitefront::pages.confirmed-cases.details',
            compact('confirmedCase', 'total_death_count', 'total_discharged_count',
                'total_asymptomatic_count', 'total_confirmed_count'));
    }

}