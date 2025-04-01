<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table ='address';

    protected $fillable = [
        'address_line_1',
        'address_line_2',
        'city',
        'state',
        'country',
        'postal_code',
        'phone_number',
        'phone_2',
        'email_address',
        'google_map_url',
        'is_default'
    ];
}
