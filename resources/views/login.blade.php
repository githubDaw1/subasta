<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iniciar sesión</title>
  <link href="{{ asset('img/favicon.ico') }}" type="image/x-icon" rel="icon">
  <link href="{{ asset('css/login.css') }}" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="index.php" class="active">Inicio</a>
    <a href="buscar.php">Buscar</a>
    <a href="ayuda.php">Ayuda</a>
    <a href="index.php">Iniciar sesion</a>
    <a href="/registro">Registrarse</a>

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>

  </nav>

  <main>

    <div class="fin-float"></div>

    <section>

      <!-- Title: Hora Central Europea / Central European Time -->
      <div>
        <span class="fecha"></span>
        <span class="tiempo"></span>
        <span class="horario">CET</span>
      </div>

    </section>

    <section>

      <form action="/portal" method="POST" class="container">

        <h2 class="text-center text-info">Login</h2>

        <div class="form-group">
          <label for="usuario" class="text-info">User:</label>
          <input type="email" name="usuario" id="usuario" class="form-control w-50" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="passw" class="text-info">Pass:</label>
          <input type="text" name="passw" id="passw" class="form-control w-50" required>
        </div>

        <div class="fin-float"></div>

        <!--<div class="form-group">

          <label for="rol">Seleccionar rol:</label>

          <select name="rol">
            <option value="usuario">usuario</option>
            <option value="admin">admin</option>
          </select>

        </div>-->

        <div class="fin-float"></div>

        <div class="form-group">
          <input type="submit" name="submit" id="submit" value="Verificar credenciales">
        </div>

      </form>

    </section>

    <?php

  $usuarioExiste = false;

  if (isset($_POST['submit'])) {

    if (!empty($_POST['usuario']) && !empty($_POST['passw'])) {

      for ($i = 0; $i < count($users); $i++) {

        if (strcmp($_POST["usuario"], $users[$i]["user"]) && strcmp($users[$i]["password"], intval(hash('sha512', $_POST["passw"])))) {

          if (strcmp($users[$i]["permiso"], 0)) {
            header("Location: portal.php");
            die();
          } else if (strcmp($users[$i]["permiso"], 1)) {
            header("Location: Views/tablas.php");
            die();
          }
        }
      }
    }
  }

?>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="{{ asset('js/reloj.js') }}" defer></script>

</body>

</html>
