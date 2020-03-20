<?php

namespace Modules\Backend\Exports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class GenericExport implements FromCollection, ShouldAutoSize, WithHeadings // WithMapping,
{
    private $records;

    /**
     * BookletExport constructor.
     * @param $records
     */
    public function __construct(Collection $records)
    {
        $this->records = $records;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return $this->records;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        $headings = $this->collection()->toArray()[0] ?? [];

        return array_keys($headings);
    }
}
