<?php
  use App\Models\Usuario;
?>

<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iniciar sesión</title>
  <link href="{{ asset('img/logo.png')}}" type="image/x-icon" rel="icon">
  <link href="{{ asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ asset('css/login.css') }}" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
    <a href="/subasta" class="disabled">Subastas</a>
    <a href="/puja" class="disabled">Pujas</a>
    <a href="/login">Iniciar sesion</a>
    <a href="/registro">Registrarse</a>

    <a href="javascript:void(0);" class="icon nav">
      <img src="{{ asset('img/menu.svg') }}" alt="Menu">
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

      <form action="" method="GET" enctype="multipart/form-data">

        @csrf

        <h2>Login</h2>

        <div class="form-group">
          <label for="usuario" class="text-info">User:</label>
          <input type="email" name="usuario" id="usuario" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="passw" class="text-info">Pass:</label>
          <input type="password" name="passw" id="passw" class="form-control" required>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <input type="submit" name="login" id="login" value="Verificar credenciales">
        </div>

      </form>

    </section>

    <?php

      $usuarioExiste = false;
      $permiso = 0;

      if (isset($_GET["login"])) {

        $user = $_GET["usuario"];
        $password = $_GET["passw"];

        $usuarios = new Usuario();
        $users = $usuarios->getUsuarios();

        for ($i = 0; $i < count($users) && !$usuarioExiste; $i++) {

          if (strcmp($user, $users[$i]["user"]) == 0 && strcmp($users[$i]["password"], trim(strval(hash('sha512', $password)))) == 0) {
            $usuarioExiste = true;
            $permiso = intval($users[$i]["permiso"]);
            //$_SESSION["usuario"] = $user;
            //$_SESSION["permiso"] = $permiso;
            $acceso = $usuarios->getAcceso($user, trim(strval(hash('sha512', $password))));
          }
        }

        if ($usuarioExiste) {

          if ($permiso == 1) {
            header("Location: /tablas");
            exit();
          } else {
            header("Location: /portal");
            exit();
          }

        } else {
          echo "<script>alert('El usuario o la contraseña son incorrectos');</script>";
        }
      }

    ?>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="{{ asset('js/app.js') }}" defer></script>
  <script src="{{ asset('js/reloj.js') }}" defer></script>
  <script src="{{ asset('js/script.js') }}" defer></script>

</body>

</html>
