<?php
/**
 * Created by PhpStorm.
 * User: Dennis
 * Date: 19 Dec 2019
 * Time: 5:33 AM
 */

namespace Modules\Scrud\Commands;


use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Modules\Scrud\Kernel\ScrudModel;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class SetupScrudPermissions extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrud:run-permissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate SCRUD permissions';

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function handle()
    {
        $this->alert('generating permissions...');
        DB::statement("SET foreign_key_checks=0");

//        Permission::truncate();
//        DB::table(config('permission.table_names.permissions'))->truncate();
//        DB::table(config('permission.table_names.role_has_permissions'))->truncate();

        foreach (scrudConfig() as $scrud_config){
            /** @var ScrudModel $scrud_model */

            $scrud_model = $scrud_config['scrud_model'];

            $scrud_model->setupPermissions();
        }

        DB::statement("SET foreign_key_checks=1");

    }


}