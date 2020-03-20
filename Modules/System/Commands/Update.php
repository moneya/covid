<?php

namespace Modules\System\Commands;

use Caffeinated\Modules\Facades\Module;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class Update extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'system:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '';


    private $modules;

    /**
     * Create a new command instance.
     */
    public function __construct()
    {
        $this->description = 'Updates ' . config('app.name');

        parent::__construct();
        $this->modules = modules();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->alert('installing...');

        DB::statement("SET foreign_key_checks=0");
//        Schema::connection('mysql')->dropAllTables();

        Artisan::call('migrate', [
            '--path' => './database/migrations'
        ]);
//        Artisan::call('module:migrate');

        $modules = $this->modules->all()->sortBy('id');

        $migration_bar = $this->output->createProgressBar(count($modules));

        foreach ($modules as $module){
            \DB::statement("SET foreign_key_checks=0");
//            $this->info( "\r\n" . 'module ' . $module['slug'] . " :");

            Artisan::call('module:migrate', [
                'slug' => $module['slug'],
            ]);

            $migration_bar->advance();
        }

        $migration_bar->finish();

//        Artisan::call('passport:install');

		Artisan::call('storage:link');

        \DB::statement("SET foreign_key_checks=1");

//        $this->info("\r\n" . 'publishing tenants migrations...');
//        \Artisan::call('system:install:tenants-migration');
    }
}