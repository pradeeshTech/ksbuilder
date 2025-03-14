<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('contents', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('section_id');
            $table->string('title')->nullable();
            $table->longText('content')->nullable();
            $table->string('image1_path')->nullable();
            $table->string('image1_name')->nullable();
            $table->string('image2_path')->nullable();
            $table->string('image2_name')->nullable();
            $table->string('image3_path')->nullable();
            $table->string('image3_name')->nullable();
            $table->string('image4_path')->nullable();
            $table->string('image4_name')->nullable();
            $table->string('image5_path')->nullable();
            $table->string('image5_name')->nullable();
            $table->string('image6_path')->nullable();
            $table->string('image6_name')->nullable();
            $table->foreign('section_id')->references('id')->on('sections')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contents');
    }
};
