<?php

use App\Mail\InstructionMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/registration', [\App\Http\Controllers\RegistrationController::class, 'save'])->name('registration');

Route::get('/test', '\App\Http\Controllers\RegistrationController@saveApi')->name('test');
