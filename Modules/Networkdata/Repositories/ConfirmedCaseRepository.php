<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 21/03/2020
 * Time: 6:37 AM
 */

namespace Modules\Networkdata\Repositories;


use Modules\Networkdata\Models\ConfirmedCase;
use Modules\System\Repositories\BaseRepository;

class ConfirmedCaseRepository extends BaseRepository
{


    /**
     * ConfirmedCaseRepository constructor.
     * @param ConfirmedCase $case
     * @throws \Exception
     */
    public function __construct(ConfirmedCase $case)
    {
        parent::__construct($case);
    }

    /**
     * @param $age
     * @param $gender
     * @param $status
     * @param null $details
     * @return \Illuminate\Database\Eloquent\Model|ConfirmedCase
     * @throws \Exception
     */
    public function addCase($age, $gender, $status, $details = null)
    {
        return $this->quickSave([
            'age' => $age,
            'gender' => $gender,
            'status' => $status,
            'details' => $details
        ]);
    }

}