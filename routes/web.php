<?php

use Illuminate\Support\Facades\Route;

// Serve the welcome page for the home route
Route::get('/', function () {
    return view('welcome');
});

// Serve the projects page
Route::get('/projects', function () {
    return view('projects');
});

// Serve the about page
Route::get('/about', function () {
    return view('about');
});

Route::get('/projects/python', function () {
    return view('allpythonprojects');
});

Route::get('/projects/react', function () {
    return view('allreactprojects');
});


Route::get('/projects/rust', function () {
    return view('allrustprojects');
});


Route::get('/cv', function () {
    return view('cv');
});

Route::get('/contact', function () {
    return view('contact');
});

