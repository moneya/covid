<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 20/03/2020
 * Time: 1:58 PM
 */

namespace Modules\Infections\Repositories;


use Illuminate\Support\Facades\DB;
use Modules\Infections\Models\SituationReport;
use Modules\System\Repositories\BaseRepository;

class SituationReportRepository extends BaseRepository
{

    /**
     * SituationReportRepository constructor.
     * @param SituationReport $report
     * @throws \Exception
     */
    public function __construct(SituationReport $report)
    {
        parent::__construct($report);
    }

    /**
     * @param array $dataSheet
     * @throws \Exception
     */
    public function saveDataSheet(array $dataSheet)
    {
        $disease = DiseaseRepository::init()->getSelectedDisease();

        foreach ($dataSheet['records'] as $record){
            $this->quickSave([
                'state_id' => $record['state'],
                'published_at' => $dataSheet['date'],
                'prev_screened' => $record['prev_screened'],
                'screened_last_24hr' => $record['screened_last_24hr'],
                'confirmed_count' => $record['confirmed'],
                'asymptomatic_count' => $record['on_admission'],
                'discharged_count' => $record['discharge'],
                'death_count' => $record['deaths'],
                'disease_id' => $disease->id
            ]);
        }
    }

    public function fetchLatestReport()
    {
        $table = $this->getModel()->getTable();

        $latest_reports = DB::table($table)
            ->select( 'state_id',
                DB::raw('MAX(published_at) as published_at'),
                DB::raw('MAX(id) as max_id'),
                DB::raw('SUM(confirmed_count) as overall_confirmed_count'),
                DB::raw('SUM(asymptomatic_count) as overall_asymptomatic_count'),
                DB::raw('SUM(discharged_count) as overall_discharged_count'),
                DB::raw('SUM(death_count) as overall_death_count')
                )
            ->groupBy('state_id');

        $query = $this->getModel()
            ->newModelQuery();

        return $query->joinSub($latest_reports,'latest_reports',function($join) use ($table){
            $join
                ->on($table . '.published_at', '=', 'latest_reports.published_at')
                ->on($table . '.state_id', '=', 'latest_reports.state_id')
                ->on($table . '.id', '=', 'latest_reports.max_id')
            ;
        })
            ->get();
    }
}