<?php
  error_reporting(E_ERROR);
  ini_set("display-errors", 0);
?>

<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <title>Login</title>
  <link href="login.css" rel="stylesheet">
  <link href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

  <div class="container">

    <div id="login-row" class="row justify-content-center align-items-center">

      <div id="login-column" class="col-md-6">

        <div id="login-box" class="col-md-12">

          <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">

            <h3 class="text-center text-info">Login</h3>

            <div class="form-group">
              <label for="usuario" class="text-info">User:</label>
              <input type="email" name="usuario" id="usuario" class="form-control" required autofocus>
            </div>

            <div class="form-group">
              <label for="passw" class="text-info">Pass:</label>
              <input type="password" name="passw" id="passw" class="form-control" required>
            </div>

            <div class="form-group mt-3">
              <input type="submit" name="submit" id="submit" value="Verificar credenciales">
            </div>

          </form>

        </div>

      </div>

    </div>

  </div>

  <?php

    $correo = $_POST['usuario'];
    $secreto = $_POST['passw'];

    $conexion = mysqli_connect("localhost", "root", "", "subasta");
    $consulta = "SELECT CONCAT(login('". $correo ."', SHA2('" .$secreto ."', 512)))";
    $resultado = mysqli_query($conexion, $consulta);

    while ($row = mysqli_fetch_row($resultado)) { $mensaje = $row; }

    if (isset($_POST['submit'])) {

      if (!empty($correo) && !empty($secreto)) {

        if ($mensaje[0] == 1) {
          echo "<pre>El login es válido</pre>";
        } else {
          echo "<pre>El login no es válido</pre>";
        }
      }
    }

    mysqli_close($conexion);

  ?>

  <!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" type="text/javascript" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" type="text/javascript" defer></script> -->

</body>

</html>