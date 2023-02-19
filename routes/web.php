<?php

  use Illuminate\Support\Facades\Route;

  /*use App\Http\Controllers\LoginController;
  use App\Http\Controllers\PortalController;
  use App\Http\Controllers\ProductosController;
  use App\Http\Controllers\RegistroController;
  use App\Http\Controllers\SubastaController;
  use App\Http\Controllers\TablasController;
  use App\Http\Controllers\UsuariosController;*/

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

  Route::get('/login', function() {
    return view('login');
  });

  Route::get('/registro', function() {
    return view('registro');
  });

  Route::get('/portal', function() {
    return view('portal');
  });

  Route::get('/subasta', function() {
    return view('subasta');
  });

  Route::get('/pujar', function() {
    return view('pujar');
  });

  Route::get('/tablas', function() {
    return view('tablas');
  });

  /*Route::get('/producto', function() {
    return view('producto');
  });*/

?>
