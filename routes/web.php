<?php

use App\Http\Controllers\IntegrationController;
use App\Http\Controllers\OutgoingController;
use App\Http\Controllers\OverlayController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\TransactionController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get("faq", [SupportController::class, 'faq'])->name('faq');
Route::get("terms", [SupportController::class, 'terms'])->name('terms');
Route::get("tutorial", [SupportController::class, 'tutorial'])->name('tutorial');
Route::get("changelog", [SupportController::class, 'changelog'])->name('changelog');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get("overlays", [OverlayController::class, "index"])->name("overlays.index");
    Route::get("transactions", [TransactionController::class, "index"])->name("transactions.index");
    Route::get("transactions/outgoing", [OutgoingController::class, "index"])->name("outgoing.index");
    Route::get("integration", [IntegrationController::class, "index"])->name("integration.index");
});

require __DIR__ . '/auth.php';
