<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pujar</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="css/pujar.css" rel="stylesheet">
</head>

<body>
  
  <h1>Pujas (valores) de la subasta</h1>

  <?php
    
    $pujaInicial = $_POST['inicial'];
    $pujaActual = $_POST['actual'];
    $inicio = $_POST['fecha1'];
    $fin = $_POST['fecha2'];

    if (isset($_POST['submit'])) {

      if (!empty($pujaInicial) && !empty($pujaActual)) {
        echo "<br/>Puja inicial: ". $pujaInicial;
        echo "<br/>Puja actual: ". $pujaActual;
        echo "<br/>Fecha de inicio: ". $inicio;
        echo "<br/>Fecha de fin: ". $fin;
      }
    }

  ?>

  <form action="" method="POST" enctype="multipart/form-data">

    <div class="row">

      <div class="col-25">
        <label for="inicial">Valor inicial</label>
      </div>

      <div class="col-75">
        <input type="number" name="inicial" id="inicial" value="<?php echo $pujaInicial ?>" readonly>
      </div>

    </div>

    <div class="row">

      <div class="col-25">
        <label for="actual">Última puja de la subasta</label>
      </div>

      <div class="col-75">
        <input type="number" name="actual" id="actual" min="<?php echo ($pujaActual + 1) ?>" value="<?php echo ($pujaActual + 1) ?>">
      </div>

    </div>

    <div class="row">
      <input type="hidden" name="fecha1" id="fecha1" value="<?php echo $inicio; ?>" readonly>
    </div>

    <div class="row">
      <input type="hidden" name="fecha2" id="fecha2" value="<?php echo $fin; ?>" readonly>
    </div>

    <div class="row">
      <input type="submit" name="submit" id="submit" value="Pujar">
    </div>

  </form>

  <p id="tictac">Tiempo: </p>

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="js/pujar.js" defer></script>
  <script src="js/nav.js" defer></script>

</body>

</html>