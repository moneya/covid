<?php

namespace Modules\Auth\Commands;


use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Modules\Auth\Database\Seeds\PermissionsTableSeeder;
use Modules\Scrud\Kernel\ScrudModel;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RunAuthPermissions extends Command
{

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'system:auth:run-permissions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate Application\'s Auth permissions';

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
        $this->alert('generating auth permissions...');
        DB::statement("SET foreign_key_checks=0");

//        Permission::truncate();
//        DB::table(config('permission.table_names.permissions'))->truncate();
//        DB::table(config('permission.table_names.role_has_permissions'))->truncate();

        $this->call('module:seed', [
            '--class' => PermissionsTableSeeder::class,
            'slug' => 'auth'
        ]);

        DB::statement("SET foreign_key_checks=1");

    }


}