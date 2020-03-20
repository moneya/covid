<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // LGA
        $lgas = __DIR__ . '/../sql/lgas.sql';// database_path('sql/');
        DB::unprepared(file_get_contents($lgas));

        Schema::create('wards', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('ward_name');
            $table->string('ward_code');

            $table->string('state_name');
            $table->string('state_code');
            $table->unsignedInteger('state_id');

            $table->string('lga_name');
            $table->string('lga_code');
            $table->unsignedInteger('lga_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wards');
    }
}
