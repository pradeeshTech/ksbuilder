<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NavBar extends Model
{
    protected $table = 'navbar';

    protected $fillable = [
        'name',
        'view_name'
    ];

    public function sections()
    {
        return $this->hasMany(Section::class, 'nav_id');
    }
    


}
