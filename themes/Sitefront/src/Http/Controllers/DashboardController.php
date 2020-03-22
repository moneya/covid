<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 10:38 PM
 */

namespace Themes\Sitefront\Http\Controllers;


use Modules\Infections\Repositories\SituationReportRepository;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $latest_situation_report = SituationReportRepository::init()->fetchLatestReport();

        $total_confirmed_count = $latest_situation_report->sum('overall_confirmed_count');
        $total_asymptomatic_count = $latest_situation_report->sum('overall_asymptomatic_count');
        $total_discharged_count = $latest_situation_report->sum('overall_discharged_count');
        $total_death_count = $latest_situation_report->sum('overall_death_count');

        $cases_heat_map_data = $latest_situation_report->mapWithKeys(function($report){
            return [
                strtolower($report->state->state_code) => $report->overall_confirmed_count
            ];
        });

        $screening_heat_map_data = $latest_situation_report->mapWithKeys(function($report){
            return [
                strtolower($report->state->state_code) =>
                    $report->prev_screened + $report->screened_last_24hr
            ];
        });

        return view('pages.dashboard',
            compact('latest_situation_report',
                'total_confirmed_count', 'total_asymptomatic_count',
                'total_discharged_count', 'total_death_count',
                'cases_heat_map_data', 'screening_heat_map_data'));
    }

}