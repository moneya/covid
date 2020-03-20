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

//    public function fetchLatestReport()
//    {
//        $disease = DiseaseRepository::init()->getSelectedDisease();
//
//        return $this->getModel()->newModelQuery()
//            ->where('disease_id', $disease->id)
//            ->latest('published_at')
//            ->groupBy('state_id')
//            ->havingRaw(DB::raw('MAX(published_at)'))
//            ->selectRaw(DB::raw('COUNT(prev_screened) as prev_screened,
//            COUNT(screened_last_24hr) as screened_last_24hr,
//            COUNT(confirmed_count) as confirmed_count,
//            COUNT(asymptomatic_count) as asymptomatic_count,
//            COUNT(discharged_count) as discharged_count,
//            COUNT(death_count) as death_count,
//            MAX(published_at) as published_at
//            '))
//            ->get()
//            ;
//    }

    public function fetchLatestReport()
    {
        $table = $this->getModel()->getTable();

        $latest_reports = DB::table($table)
            ->select( 'state_id', DB::raw('MAX(published_at) as published_at'))
            ->groupBy('state_id');

        $query = $this->getModel()
            ->newModelQuery();

        return $query->joinSub($latest_reports,'latest_reports',function($join) use ($table){
            $join
                ->on($table . '.published_at', '=', 'latest_reports.published_at')
                ->on($table . '.state_id', '=', 'latest_reports.state_id')
            ;
        })
            ->get()
            ;
    }
}