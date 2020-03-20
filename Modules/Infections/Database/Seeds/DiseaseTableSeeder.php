<?php

namespace Modules\Infections\Database\Seeds;

use Illuminate\Database\Seeder;
use Modules\Infections\Repositories\DiseaseRepository;

class DiseaseTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws \Exception
     */
    public function run()
    {
        $diseases = [
            'COVID-19'
        ];


        foreach ($diseases as $disease){
            DiseaseRepository::init()->quickSave(['name'=> $disease]);
        }
    }
}
