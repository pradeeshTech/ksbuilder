<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\NavBar;
use App\Models\Content;

class ContentController extends Controller
{
    public function getPageContent(Request $request){
       $sectionId=1;
       $content = Section::find($sectionId)->with('sectionContent')->get();
       return $content;
    }
}
