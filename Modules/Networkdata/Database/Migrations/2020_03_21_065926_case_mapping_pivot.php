<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CaseMappingPivot extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('case_mapping_pivot', function (Blueprint $table) {
            $table->unsignedBigInteger('case_id');
            $table->unsignedBigInteger('map_id');

            $table->foreign('case_id')->references('id')->on('confirmed_cases');
            $table->foreign('map_id')->references('id')->on('case_maps');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('case_mapping_pivot');
    }
}
