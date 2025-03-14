<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    protected $table = 'contents';

    protected $fillable = [
        'section_id',
        'title',
        'content',
        'image1_path',
        'image1_name',
        'image2_path',
        'image2_name',
        'image3_path',
        'image3_name',
        'image4_path',
        'image4_name',
        'image5_path',
        'image5_name',
        'image6_path',
        'image6_name'
    ];

    public function section()
    {
        return $this->belongsTo(Section::class, 'section_id');
    }
}
