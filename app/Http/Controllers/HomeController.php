<?php

    namespace App\Http\Controllers;

    use Illuminate\Http\Request;

    class HomeController extends Controller {
        /**
        * Create a new controller instance.
        * @return void
        */
        public function __construct() {
            $this->middleware('auth');
        }

        /**
        * Show the application dashboard.
        * @ return \Illuminate\Contracts\Support\Renderable
        */
        public function request() {


            return view('home');
        }

        public function metodo(Request $request) {
          // Acceda a los datos del formulario enviados a través de la solicitud POST
        }
    }

?>
