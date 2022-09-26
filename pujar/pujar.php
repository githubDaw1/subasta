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
  <title>Pujar</title>
  <link href="../tablas/tablas.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
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
        <label for="inicial">Precio inicial de la subasta</label>
      </div>

      <div class="col-75">
        <input type="number" name="inicial" id="inicial" value="<?php echo $pujaInicial ?>" readonly>
      </div>

    </div>

    <div class="row">

      <div class="col-25">
        <label for="actual">Precio actual de la subasta</label>
      </div>

      <div class="col-75">
        <input type="number" name="actual" id="actual" min="<?php echo $pujaActual ?>">
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

  <div id="tictac">Tiempo: </div>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" type="text/javascript" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" type="text/javascript" defer></script>
  <script src="script.js" type="text/javascript" defer></script>

</body>

</html>