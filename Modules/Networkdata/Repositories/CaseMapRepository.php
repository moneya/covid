<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 9:39 AM
 */

namespace Modules\Networkdata\Repositories;


use Modules\Networkdata\Models\CaseMap;
use Modules\System\Repositories\BaseRepository;

class CaseMapRepository extends BaseRepository
{


    /**
     * CaseMapRepository constructor.
     * @param CaseMap $caseMap
     * @throws \Exception
     */
    public function __construct(CaseMap $caseMap)
    {
        parent::__construct($caseMap);
    }

    public function fetchCaseMapBySource($source, $source_type)
    {
        return $this->fetchQuery()->firstOrCreate([
            'source' => $source,
            'source_type' => $source_type
        ]);
    }
}