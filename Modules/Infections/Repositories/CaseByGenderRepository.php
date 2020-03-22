<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 22/03/2020
 * Time: 3:28 PM
 */

namespace Modules\Infections\Repositories;


use Illuminate\Support\Facades\DB;
use Modules\Infections\Models\CaseByGender;
use Modules\Infections\Models\CaseByNationality;
use Modules\System\Repositories\BaseRepository;

class CaseByGenderRepository extends BaseRepository
{


    /**
     * CaseByNationalityRepository constructor.
     * @param CaseByGender $caseByGender
     * @throws \Exception
     */
    public function __construct(CaseByGender $caseByGender)
    {
        parent::__construct($caseByGender);
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
                'published_at' => $dataSheet['date'],
                'gender' => $record['gender'],
                'case_count' => $record['case_count'],
                'disease_id' => $disease->id
            ]);
        }
    }

    public function fetchLatestReport()
    {
        $table = $this->getModel()->getTable();

        $latest_reports = DB::table($table)
            ->select( 'gender',
                DB::raw('MAX(id) as max_id'),
                DB::raw('MAX(published_at) as published_at'),
                DB::raw('SUM(case_count) as overall_cases_count')
            )
            ->groupBy('gender');

        $query = $this->getModel()
            ->newModelQuery();

        return $query->joinSub($latest_reports,'latest_reports',function($join) use ($table){
            $join
                ->on($table . '.published_at', '=', 'latest_reports.published_at')
                ->on($table . '.id', '=', 'latest_reports.max_id')
            ;
        })
            ->orderBy('overall_cases_count', 'DESC')
            ->orderBy('case_count', 'DESC')
            ->get();
    }
}