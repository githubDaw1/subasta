<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Todas las tablas</title>
  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/tablas.css" rel="stylesheet">
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

    <button name="out" id="out">Log out</button>

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

    <!--
    <section>

      <form action="" method="POST" enctype="multipart/form-data">

        <div class="row">

          <div class="col-25">
            <label for="categoria">Según la categoría:</label>
          </div>

          <div class="col-75">

            <select name="categoria" id="categoria">
              <option></option>
              <option value="Multiherramientas">Multiherramientas</option>
              <option value="Mueble Autotransformable">Mueble Autotransformable</option>
              <option value="Super coches">Super coches</option>
              <option value="Dispositivo cambiante">Dispositivo cambiante</option>
              <option value="Piedras preciosas" disabled>Piedras preciosas</option>
            </select>

          </div>

        </div>

        <div class="row">
          <input type="submit" name="submit" id="submit" value="Mostrar datos">
        </div>

      </form>

      <?php

        //$category = $_POST['categoria'];

        //if (isset($_POST['submit'])) {

        //if (!empty($category)) {
      ?>

    </section>
    -->
    <?php
      require_once("crud/Productos.php");
    ?>

    <div class="fin-float"></div><hr />

    <?php
      require_once("crud/Subastas.php");
    ?>

    <div class="fin-float"></div> <hr />

    <?php
      require_once("crud/Pujas.php");
    ?>

    <div class="fin-float"></div><hr />

    <?php
      require_once("crud/Usuarios.php");
    ?>

    <div class="fin-float"></div>

    <!--
    <section>

      <form action="../pujar/pujar.php" method="POST" enctype="multipart/form-data">

        <div class="row">

          <div class="col-25">
            <label for="inicial">Precio inicial de la subasta</label>
          </div>

          <div class="col-75">
            <input type="number" name="inicial" id="inicial" value="<?php echo $sub[count($sub) - 1]['precIni'] ?>"
              readonly>
          </div>

        </div>

        <div class="row">

          <div class="col-25">
            <label for="actual">Precio actual de la subasta</label>
          </div>

          <div class="col-75">
            <input type="number" name="actual" id="actual" min="<?php echo ($sub[count($sub) - 1]['precIni'] + 1) ?>">
          </div>

        </div>

        <div class="row">
          <input type="hidden" name="fecha1" id="fecha1" value="<?php echo $sub[count($sub) - 1]['fechaInic']; ?>"
            readonly>
        </div>

        <div class="row">
          <input type="hidden" name="fecha2" id="fecha2" value="<?php echo $sub[count($sub) - 1]['fechaFin']; ?>"
            readonly>
        </div>

        <div class="row">
          <input type="submit" name="submit" id="submit" value="Pujar">
        </div>

      </form>

    </section>
    -->

  </main>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="js/reloj.js" defer></script>
  <script src="js/script.js" defer></script>
  <script src="js/nav.js" defer></script>
  <script src="js/tablas.js" defer></script>

</body>

</html>