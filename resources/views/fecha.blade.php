<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Validar fechas</title>
  <link href="{{ asset('img/logo.png')}}" type="image/x-icon" rel="icon">
  <link href="{{ asset('css/fecha.css') }}" rel="stylesheet">
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

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="{{ asset('js/fecha.js') }}" defer></script>

</body>

</html>
