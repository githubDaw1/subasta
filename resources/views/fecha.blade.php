<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validar fechas</title>
<<<<<<< HEAD
  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="icons/icomoon.min.css" rel="stylesheet">
  <link href="css/fecha.css" rel="stylesheet">
=======
  <link href="{{ secure_asset('img/logo.png')}}" type="image/x-icon" rel="icon">
  <link href="{{ secure_asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/fecha.css') }}" rel="stylesheet">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
</head>

<body>

  <?php

    $fechaIni = date_create("2020-04-01 10:00:00");
    $fechaFin = date_create("2020-04-01 10:00:05");

    /*
      echo date_format($fechaIni, "d/m/Y H:i:s") ."<br/><br/>";
      echo date_format($fechaFin, "d/m/Y H:i:s") ."<br/><br/>";
    */

  ?>

  <main>

    <div class="inicio">

      <div class="fecha">
        <div class="tiempo"><?php echo date_format($fechaIni, "H:i:s"); ?></div>
      </div>

    </div>

    <div class="fin">

      <div class="fecha">
        <div class="tiempo"><?php echo date_format($fechaFin, "H:i:s"); ?></d>
      </div>

    </div>

  </main>

<<<<<<< HEAD
  <script src="js/app.js" defer></script>
  <script src="js/script.js" defer></script>
=======
  <script src="{{ secure_asset('js/app.js') }}" defer></script>
  <script src="{{ secure_asset('js/script.js') }}" defer></script>
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

</body>

</html>
