<?php
  error_reporting(E_ERROR);
  ini_set("display-errors", 0);
?>

<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validar fechas</title>
  <link href="fecha.css"rel="stylesheet">
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
        <div class="tiempo"><?php echo date_format($fechaIni, "H:i:s") ?></div>
      </div>

    </div>


    <div class="fin">

      <div class="fecha">
        <div class="tiempo"><?php echo date_format($fechaFin, "H:i:s") ?></d>
      </div>

    </div>

  </main>

  <script src="fecha.js" type="text/javascript" defer></script>

</body>

</html>