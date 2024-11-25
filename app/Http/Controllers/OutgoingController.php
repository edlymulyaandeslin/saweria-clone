<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class OutgoingController extends Controller
{
    public function index()
    {
        return Inertia::render('outgoing/Index');
    }
}
