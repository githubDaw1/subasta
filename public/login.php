<!DOCTYPE html>

<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iniciar sesión</title>
  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/login.css" rel="stylesheet">
</head>

<body>

  <header>
    <img src="img/cabecera.webp" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="index.php" class="active">Inicio</a>
    <a href="subasta.php" class="disabled">Subastas</a>
    <a href="puja.php" class="disabled">Pujas</a>
    <a href="login.php">Iniciar sesion</a>
    <a href="registro.php">Registrarse</a>

    <!--<input type="text" placeholder="Search.." name="search">
    <button type="submit"><i class="fa fa-search"></i></button>-->

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
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

      <form action="<?php //echo $_SERVER['HTTP_REFERER'] ?>" method="POST">

        <h2 class="text-center text-info">Login</h2>

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

      if (isset($_POST["login"])) {

        $user = $_POST["usuario"];
        $password = $_POST["passw"];
    
        for ($i = 0; $i < count($users) && !$usuarioExiste; $i++) {

          if (strcmp($user, $users[$i]["user"]) == 0 && strcmp($users[$i]["password"], trim(strval(hash('sha512', $password)))) == 0) {
            $usuarioExiste = true;
            $permiso = intval($users[$i]["permiso"]);
            //$_SESSION["usuario"] = $user;
            //$_SESSION["permiso"] = $permiso;
          }
        }

        if ($usuarioExiste) {

          if ($permiso == 1) {
            header("Location: tablas.php");
            exit();
          } else {
            header("Location: portal.php");
            exit();
          }

        } else {
          echo "<script>alert('El usuario o la contraseña son incorrectos');</script>";
        }

        /*if (isset($_SESSION["usuario"])) {

          if ($permiso == 1) {
            header("Location: tablas.php");
            exit();
          } else {
            header("Location: portal.php");
            exit();
          }
        }*/
      }

    ?>

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="js/reloj.js" defer></script>
  <script src="js/nav.js" defer></script>

</body>

</html>