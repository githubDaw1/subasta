<?php

  use Illuminate\Support\Facades\Route;
  use App\Support\Csp\Policies\CustomPolicy;
  use Spatie\Csp\AddCspHeaders;

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

  Route::get('/', function() {
    return view('principal');
  });

  /*Route::get('/login', function() {
    return view('login');
  });

  Route::get('/registro', function() {
    return view('registro');
  });*/

  Route::get('/portal', function() {
    return view('portal');
  });

  Route::get('/subasta', function() {
    return view('subasta');
  });

  Route::get('/pujas', function() {
    return view('pujas');
  });

  Route::get('/tablas', function() {
    return view('tablas');
  });

  /*Route::get('/producto', function() {
    return view('producto');
  });*/

  //Route::get('example-route', 'ExampleController')->middleware(AddCspHeaders::class);

?>
