<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSituationReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('situation_reports', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('disease_id');
            $table->foreign('disease_id')->references('id')->on('diseases');

            $table->integer('state_id')->index();

            $table->date('published_at');

            $table->smallInteger('prev_screened')->default(0);
            $table->smallInteger('screened_last_24hr')->default(0);
            $table->smallInteger('confirmed_count')->default(0);
            $table->smallInteger('asymptomatic_count')->default(0);
            $table->smallInteger('discharged_count')->default(0);
            $table->smallInteger('death_count')->default(0);

            $table->longText('metadata')->nullable();

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
        Schema::dropIfExists('situation_reports');
    }
}
