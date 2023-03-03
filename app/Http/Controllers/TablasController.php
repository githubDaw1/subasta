<?php

  namespace App\Http\Controllers;

  use Illuminate\Http\Request;

  class TablasControlller extends Controller {

    public function __invoke() {
      //
    }

    public function request() {
      return view('tablas');
    }

    public function imageUploadPost($imagen) {

      request()->validate([
        'image' => 'required|image|mimes:png,jpg,jpeg,gif,svg|max:2048',
      ]);

      /*$imageName = time().'.'.request()->image->getClientOriginalExtension();

      $imageName = time().'.'.request()->image->extension();*/

      request()->image->move(public_path('images'), $imagen);

      return back()->with('success', 'Image uploaded Successfully!')->with('image', $imagen);
    }

    public function metodo(Request $request) {
      // Acceda a los datos del formulario enviados a través de la solicitud POST
    }
  }

?>
