<?php

namespace Modules\System\Database\Seeds;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Modules\System\Models\Ward;

class DefaultSqlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

//        // States
        $states = __DIR__ . '/../sql/states.sql';
        DB::unprepared(file_get_contents($states));
        $this->command->info('States table seeded.');



        // Ward
//        $wards = __DIR__ . '/../sql/wards.sql';// database_path('sql/');
//        DB::unprepared(file_get_contents($wards));
//        $this->command->info('Ward table seeded.');
//        $this->seedWards();
    }

    private function seedWards()
    {
        Ward::truncate();

        $wards = require_once __DIR__ . '/../sql/wards.php';

        foreach ($wards as $ward){
            Ward::create($ward);
        }
    }
}
