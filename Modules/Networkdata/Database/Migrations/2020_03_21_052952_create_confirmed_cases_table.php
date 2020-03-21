<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfirmedCasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('confirmed_cases', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->string('ref_code')->unique();
            $table->string('gender');
            $table->smallInteger('age');
            $table->string('status');

            $table->longText('details')->nullable();
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
        Schema::dropIfExists('confirmed_cases');
    }
}
