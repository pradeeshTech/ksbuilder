<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Section;
use App\Models\NavBar;
use App\Models\Content;

class ContentController extends Controller
{
    public function getPageContent(Request $request)
    {
        $pageId = 1;
        $content = Section::where('nav_id', $pageId)->with('sectionContent')->get();
        foreach($content as $singleSection) {
            foreach($singleSection->sectionContent as $singleContent) {
                $singleContent->image1_path = $singleContent->image1_path ? asset($singleContent->image1_path): $singleContent->image1_path;
                $singleContent->image2_path = $singleContent->image2_path ? asset($singleContent->image2_path): $singleContent->image2_path;
                $singleContent->image3_path = $singleContent->image3_path ? asset($singleContent->image3_path): $singleContent->image3_path;
                $singleContent->image4_path = $singleContent->image4_path ? asset($singleContent->image4_path): $singleContent->image4_path;
                $singleContent->image5_path = $singleContent->image5_path ? asset($singleContent->image5_path): $singleContent->image5_path;
                $singleContent->image6_path = $singleContent->image6_path ? asset($singleContent->image6_path): $singleContent->image6_path;
            }
        }
        return $content;
    }

    public function getNavBar(Request $request)
    {
        return NavBar::all();
    }

    public function saveContent(Request $request)
    {
        $request->validate([
            'section_id' => 'required|exists:sections,id',
            'title' => 'nullable',
            'content' => 'nullable',
            'image1_path' => 'nullable',
            'image1_name' => 'nullable',
            'image2_path' => 'nullable',
            'image2_name' => 'nullable',
            'image3_path' => 'nullable',
            'image3_name' => 'nullable',
            'image4_path' => 'nullable',
            'image4_name' => 'nullable',
            'image5_path' => 'nullable',
            'image5_name' => 'nullable',
            'image6_path' => 'nullable',
            'image6_name' => 'nullable',
        ]);
        $content = new Content;
        $content->section_id = $request->section_id;
        $content->title = $request->title;
        $content->content = $request->content;
        if ($request->hasFile('image1_path')) {
            $file = $request->file('image1_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image1_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image1_name = $request->image1_name;
        if ($request->hasFile('image2_path')) {
            $file = $request->file('image2_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image2_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image2_name = $request->image2_name;
        if ($request->hasFile('image3_path')) {
            $file = $request->file('image3_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image3_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image3_name = $request->image3_name;
        if ($request->hasFile('image4_path')) {
            $file = $request->file('image4_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image4_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image4_name = $request->image4_name;
        if ($request->hasFile('image5_path')) {
            $file = $request->file('image5_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image5_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image5_name = $request->image5_name;
        if ($request->hasFile('image6_path')) {
            $file = $request->file('image6_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image6_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image6_name = $request->image6_name;
        $content->save();
        return $content;
    }

    public function updateContent(Request $request){
        $request->validate([
            'id'=>'required|exists:contents,id',
            'section_id' => 'required|exists:sections,id',
            'title' => 'nullable',
            'content' => 'nullable',
            'image1_path' => 'nullable',
            'image1_name' => 'nullable',
            'image2_path' => 'nullable',
            'image2_name' => 'nullable',
            'image3_path' => 'nullable',
            'image3_name' => 'nullable',
            'image4_path' => 'nullable',
            'image4_name' => 'nullable',
            'image5_path' => 'nullable',
            'image5_name' => 'nullable',
            'image6_path' => 'nullable',
            'image6_name' => 'nullable',
        ]);
        $content =Content::find($request->id);
        $content->section_id = $request->section_id;
        $content->title = $request->title;
        $content->content = $request->content;
        if ($request->hasFile('image1_path')) {
            $file = $request->file('image1_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image1_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image1_name = $request->image1_name;
        if ($request->hasFile('image2_path')) {
            $file = $request->file('image2_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image2_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image2_name = $request->image2_name;
        if ($request->hasFile('image3_path')) {
            $file = $request->file('image3_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image3_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image3_name = $request->image3_name;
        if ($request->hasFile('image4_path')) {
            $file = $request->file('image4_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image4_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image4_name = $request->image4_name;
        if ($request->hasFile('image5_path')) {
            $file = $request->file('image5_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image5_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image5_name = $request->image5_name;
        if ($request->hasFile('image6_path')) {
            $file = $request->file('image6_path');
            $filename = time() . '_' . $file->getClientOriginalName(); // Unique filename
            $path = $file->storeAs('uploads/images', $filename, 'public'); // Store in storage/app/public/uploads/images
            $content->image6_path = 'storage/' . $path; // Store relative path in DB
        }
        $content->image6_name = $request->image6_name;
        $content->save();
        return $content;

    }
}
