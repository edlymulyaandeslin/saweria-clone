<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class OverlayController extends Controller
{
    public function index()
    {
        return Inertia::render('overlay/Index');
    }
}