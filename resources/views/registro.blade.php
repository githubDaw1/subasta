<?php
  use App\Models\Usuario;
?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registrarse</title>
<<<<<<< HEAD
  <!--
    <link href="{{ secure_asset('img/logo.png') }}" type="image/x-icon" rel="icon">
    <link href="{{ secure_asset('css/login.css') }}" rel="stylesheet">
    <link href="{{ secure_asset('css/registro.css') }}" rel="stylesheet">
  -->

  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="css/login.css" rel="stylesheet">
  <link href="css/registro.css" rel="stylesheet">
=======
  <link href="{{ secure_asset('img/logo.png') }}" type="image/x-icon" rel="icon">
  <link href="{{ secure_asset('css/login.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/registro.css') }}" rel="stylesheet">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
</head>

<body>

  <header>
<<<<<<< HEAD
    <!--<img src="{{ secure_asset('img/cabecera.webp') }}" alt="Logo de Subasta total">-->
    <img src="img/cabecera.webp" alt="Logo de Subasta total">
=======
    <img src="{{ secure_asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
    <a href="/subasta" class="disabled">Subastas</a>
    <a href="/puja" class="disabled">Pujas</a>
    <a href="/login">Iniciar sesion</a>
    <a href="/registro">Registrarse</a>

    <a href="javascript:void(0);" class="icon nav">
<<<<<<< HEAD
      <!-- <img src="{{ secure_asset('img/menu.svg') }}" alt="Menu"> -->
      <img src="img/menu.svg" alt="Menu">
=======
      <img src="{{ secure_asset('img/menu.svg') }}" alt="Menu">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
    </a>

  </nav>

  <div class="fin-float"></div>

  <main>

    <section>

      <!-- Title: Hora Central Europea / Central European Time -->
      <div>
        <span class="fecha"></span>
        <span class="tiempo"></span>
        <span class="horario">CET</span>
      </div>

    </section>

    <div class="fin-float"></div>

    <section>

      <h2>Subastas. Busqueda avanzada</h2>

      <form action="/login" method="GET" enctype="multipart/form-data">

        @csrf

        <h2 class="text-center text-info">Registrarse</h2>

        <div class="form-group">
          <label for="nombre" class="text-info">Name</label>
          <input type="text" name="nombre" id="nombre" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="apellidos" class="text-info">Surname</label>
          <input type="text" name="apellidos" id="apellidos" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="usuario" class="text-info">User</label>
          <input type="email" name="usuario" id="usuario" class="form-control" required autofocus minlength="1" maxlength="50">
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="passw" class="text-info">Pass</label>
          <input type="password" name="passw" id="passw" class="form-control" required minlength="1" maxlength="256">
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <input type="submit" name="register" id="register" value="Registrarse">
        </div>

      </form>

      <!--
        <div class="container h-100">

        <div class="row d-flex justify-content-center align-items-center h-100">

          <div class="col-xl-9">

            <div class="card" style="border-radius: 15px;">

              <div class="card-body">

                <div class="row align-items-center pt-4 pb-3">

                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Full name</h6>
                  </div>

                  <div class="col-md-9 pe-5">
                    <input type="text" name="nomApe" id="nomApe" class="form-control form-control-lg" />
                  </div>

                </div>

                <hr class="mx-n3">

                <div class="row align-items-center py-3">

                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Email address</h6>
                  </div>

                  <div class="col-md-9 pe-5">
                    <input type="email" name="usuario" id="usuario" class="form-control" required autofocus placeholder="example@subasta.com"/>
                  </div>

                </div>

                <hr class="mx-n3">

                <div class="row align-items-center py-3">

                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Password</h6>
                  </div>

                  <div class="col-md-9 pe-5">
                    <input type="password" name="passw" id="passw" class="form-control" required placeholder="Write your secret code">
                  </div>

                </div>

                <hr class="mx-n3">

                <div class="px-5 py-4">
                  <input type="submit" name="submit" id="submit" value="Verificar credenciales">
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>-->

    </section>

    <?php

      $usuarioExiste = false;
      $permiso = 0;

      if (isset($_GET["register"])) {

        $name = $_GET["nombre"];
        $surname = $_GET["apellidos"];
        $correo = $_GET["usuario"];
        $password = $_GET["passw"];

        $regex = "/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü0-9._%+-]+@subasta.com$/ism";
        //$regex = "/^[A-Za-z]{1,50}$/";

        //$regex = "/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]{1,50}$/";

        //$rege = "/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/";

        for ($i = 0; $i < count($users) && !$usuarioExiste; $i++) {

          if (strcmp($name, $users[$i]["nomUsu"]) != 0 && strcmp($surname, $users[$i]["apeUsu"]) != 0 &&
              strcmp($user, $users[$i]["user"]) != 0 && strcmp($users[$i]["password"], trim(strval(hash('sha512', $password)))) != 0 &&
              $i != count($users)) {

            $usuarioExiste = true;
            //$permiso = intval($users[$i]["permiso"]);

            /*echo "Nombre: ". $name. "<br>";
            echo "Apellidos: ". $surname. "<br>";
            echo "Usuario: ". $correo. "<br>";
            echo "Contraseña: ". $password. "<br>";
            echo "Fecha actual: ". date("Y-m-d"). "<br>";*/

            $usuario = new Usuario();
            $codigo = $usuario->getLastId();

            $id = intval($codigo[0]["codUsu"]) + 1;

            /*echo "Codigo: ". $id. "<br>";
            echo "Codigo: ". intval($codigo[0]["codUsu"]). "<br>";

            echo "<pre>";
            var_dump($codigo);
            echo "</pre>";*/

            //$usuario = new Usuario();
            $users = $usuario->addUsuarios($id, strval($name), strval($surname), $correo, trim(strval(hash('sha512', $password))), date("Y-m-d"));
          }

          /*if (preg_match($regex, ($correo))) {

            echo "Nombre: ". $name. "<br>";
            echo "Apellidos: ". $surname. "<br>";
            echo "Usuario: ". $correo. "<br>";
            echo "Contraseña: ". $password. "<br>";
            echo "Fecha actual: ". date("Y-m-d");

            $usuario = new Usuario();
            $user = $usuario->getLastId();

            $codigo = intval($user[0]['codUsu']) + 1;

            $usuario = new Usuario();
            $users = $usuario->addUsuarios($codigo, $name, $surname, $correo, hash('sha512', $password), date("Y-m-d"));

          } else {
          echo "<script>alert('Hay agún error en el registro');</script>";
          }*/

          /*if ($usuarioExiste) {

            if ($permiso == 1) {
              header("Location: /tablas");
              exit();
            } else {
              header("Location: /portal");
              exit();
            }

          } else {
          echo "<script>alert('El usuario o la contraseña son incorrectos');</script>";
          }*/

        }
      }

    ?>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

<<<<<<< HEAD
  <!--
    <script src="{{ secure_asset('js/app.js') }}" defer></script>
    <script src="{{ secure_asset('js/reloj.js') }}" defer></script>
    <script srtc="{{ secure_asset('js/script.js') }}"></script>
  -->

  <script src="js/app.js" defer></script>
  <script src="js/reloj.js" defer></script>
  <script srtc="js/script.js" defer></script>
=======
  <script src="{{ secure_asset('js/app.js') }}" defer></script>
  <script src="{{ secure_asset('js/reloj.js') }}" defer></script>
  <script srtc="{{ secure_asset('js/script.js') }}"></script>
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

</body>

</html>
