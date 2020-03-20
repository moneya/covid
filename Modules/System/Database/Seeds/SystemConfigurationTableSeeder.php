<?php

namespace Modules\System\Database\Seeds;

use Illuminate\Database\Seeder;
use Modules\System\Repositories\SystemConfigurationRepository;

class SystemConfigurationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * @throws \Exception
     */
    public function run()
    {
        $configs = config('system.configurations');

        $systemConfigRepo = SystemConfigurationRepository::init();

        foreach ($configs as $config){
            $systemConfigRepo->quickSave([
                'key' => $config
            ]);
        }
    }
}
