<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $table = 'sections';

    protected $fillable = [
        'nav_id',
        'section_name',
        'order'
    ];

    public function navbar()
    {
        return $this->belongsTo(Navbar::class, 'nav_id');
    }

    public function sectionContent()
    {
        return $this->hasMany(Content::class, 'section_id');
    }
}
