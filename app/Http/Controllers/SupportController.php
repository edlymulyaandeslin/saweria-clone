<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SupportController extends Controller
{
    public function faq()
    {
        return Inertia::render('Faq');
    }

    public function terms()
    {
        return Inertia::render('Terms');
    }
    public function tutorial()
    {
        return Inertia::render('Tutorial');
    }

    public function changelog()
    {
        return Inertia::render('Changelog');
    }
}
