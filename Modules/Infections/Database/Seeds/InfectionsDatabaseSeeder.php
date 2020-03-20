<?php

namespace Modules\Infections\Database\Seeds;

use Illuminate\Database\Seeder;

class InfectionsDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(DiseaseTableSeeder::class);
    }
}
