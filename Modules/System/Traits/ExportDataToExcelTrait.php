<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 25 Sep 2019
 * Time: 6:40 PM
 */

namespace Modules\System\Traits;


use Illuminate\Support\Collection;
use Maatwebsite\Excel\Facades\Excel;

trait ExportDataToExcelTrait
{

    /**
     * @param $data
     * @param $excel_export
     * @param string $filename
     * @return \Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function exportAndDownloadFromRequest($data, $excel_export, $filename = 'data.xlsx')
    {

        if($data instanceof Collection){

            if($data){
                return Excel::download(new $excel_export($data), $filename);
            } else {
                flash()->warning('Cannot export empty records');
            }

        }
    }

}