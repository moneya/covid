<?php

namespace Modules\System\Database\Seeds;

use Illuminate\Database\Seeder;

class SystemDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        $this->call(DefaultSqlSeeder::class);
        $this->call(SystemConfigurationTableSeeder::class);
    }
}
