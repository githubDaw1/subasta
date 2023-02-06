<?php

  namespace App\Http\Controllers;

  class ProductosController extends Controller {

    public function __invoke() {
      //
    }

    public function store() {
      return view('productos');
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
  }

?>
