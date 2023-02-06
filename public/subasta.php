<?php
  /*function parse_number($number, $dec_point=null) {
    
    if (empty($dec_point)) {
        $locale = localeconv();
        $dec_point = $locale['decimal_point'];
    }
    return floatval(str_replace($dec_point, '.', preg_replace('/[^\d'.preg_quote($dec_point).']/', '', $number)));
  }*/
?>

<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal de Subastas</title>
  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="css/login.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link href="css/login.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
</head>

<body>

  <header>
    <img src="img/cabecera.webp" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="index.php" class="active">Inicio</a>
    <a href="subasta.php">Subastas</a>
    <a href="puja.php">Pujas</a>
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

    <section>

      <h2>Subastas. Busqueda avanzada</h2>

      <ul>

        <li>
          <a href="subastas.php">Busqueda</a>
        </li>

        <li>
          <a href="resultados.php">Resultados</a>
        </li>

        <li>

          <a href="guardar.php" class="guardar">
            Guardar <span>Busqueda</span>
            <img src="img/logoAcceso.png" srcset="img/logoAcceso.svg" alt="Sesion activa" />
          </a>

        </li>

      </ul>

    </section>

    <section class="puja">
      
      <?php

        $numeroSubasta = $_GET["indice"];

        $pujas = new Puja();
        $pu = $pujas->getPujaWin($numeroSubasta);

        for ($i = 0; $i < count($products) - 1; $i++) {

          if ((intval($i) + 1) == intval($numeroSubasta)) {

            $imagen = strtolower(trim($products[$i]['nomProd']));
            $pujaMaxima = number_format(floatval($pu[$i]['valor']), 2, '.', '')
      ?>

      <div class="subasta">

        <ul>
          
          <li>
            <img src="img/productos/<?php echo $imagen ?>.jpg" alt="<?php $products[$i]['nomProd'] ?>" class="imgProd">
          </li>

          <li>
            <h3>Producto: <?php echo $products[$i]['nomProd'] ?></h3>
          </li>

          <li>
            <h4>Materiales: <?php echo $products[$i]['material'] ?></h4>
          </li>

          <li>
            <p>Anchura del producto: <?php echo $products[$i]['anchura'] ?></p>
          </li>

          <li>
            <p>Altura del producto: <?php echo $products[$i]['altura'] ?></p>
          </li>

          <li>
            <p>Categoría del producto: <?php echo $products[$i]['categoria'] ?></p>
          </li>

          <li>
            <p>Fecha inicial: <?php echo $sub[$i]['fechaInic'] ?></p>
          </li>

          <li>
            <p>Fecha fin: <?php echo $sub[$i]['fechaFin'] ?></p>
          </li>

          <li>
            <p>Precio inicial: <?php echo $sub[$i]['precIni'] ?></p>
          </li>

        </ul>

        <input type="number" min="<?php echo $pujaMaxima; ?>" value="<?php echo $pujaMaxima; ?>">

        <!--<input type="number" name="" id="">-->
        <button>Pujar</button>

        <button>
          <a href="portal.php" class="atras">Volver atrás</a>
        </button>

      </div>

      <?php
          }
        }
      ?>

    </section>

    <!--<section>
      
      <div class="center">
        
        <ul class="pagination">

          <li class="page-item">
            <a class="page-link">Previous</a>
          </li>

          <li class="page-item">
            <a class="page-link">1</a>
          </li>

          <li class="page-item">
            <a class="page-link">2</a>
          </li>

          <li class="page-item">
            <a class="page-link">3</a>
          </li>

          <li class="page-item">
            <a class="page-link">4</a>
          </li>

          <li class="page-item">
            <a class="page-link">5</a>
          </li>

          <li class="page-item">
            <a class="page-link">6</a>
          </li>

          <li class="page-item">
            <a class="page-link">7</a>
          </li>

          <li class="page-item">
            <a class="page-link">8</a>
          </li>

          <li class="page-item">
            <a class="page-link">9</a>
          </li>

          <li class="page-item">
            <a class="page-link">10</a>
          </li>

          <li class="page-item">
            <a class="page-link">Next</a>
          </li>

        </ul>

        </div>

    </section>-->

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

</body>

</html>