<?php
  use App\Models\Usuario;
?>

<div id="loginModal" class="modalDialog">

  <div>

    <a href="#close" title="Close" class="close">X</a>

    <form action="/" method="GET" enctype="multipart/form-data">

      <h2>Login</h2>

      <div class="form-group">
        <label for="usuario">Usuario:</label>
        <input type="email" name="usuario" id="cuenta" class="form-control" required autofocus>
      </div>

      <div class="fin-float"></div>

      <div class="form-group">
        <label for="passw">Contraseña:</label>
        <input type="password" name="passw" id="clave" class="form-control" required>
      </div>

      <div class="fin-float"></div>

      <div class="form-group">
        <button name="login" id="login">Verificar credenciales</button>
      </div>

    </form>

  </div>

</div>

<?php

  $usuarioExiste = false;
  $permiso = 0;
  $codUsuario;

  if (isset($_GET["login"])) {

    $user = $_GET["usuario"];
    $password = $_GET["passw"];

    $usuarios = new Usuario();
    $users = $usuarios->getUsuarios();

    for ($i = 0; $i < count($users) && !$usuarioExiste; $i++) {

      if (strcmp($user, $users[$i]["user"]) == 0 && strcmp($users[$i]["password"], trim(strval(hash('sha512', $password)))) == 0) {
        $usuarioExiste = true;
        $codUsuario = intval($i + 1);
        $permiso = intval($users[$i]["permiso"]);
        $acceso = $usuarios->getAcceso($user, trim(strval(hash('sha512', $password))));
      }
    }

    if ($usuarioExiste) {

      if ($permiso == 1) {
        header("Location: /tablas");
        exit();
      } else {
        header("Location: /portal?idUsu=$codUsuario&pagina=1");
        exit();
      }

    } else {
      echo '<script type="text/javascript">alert("El usuario o la contraseña son incorrectos");</script>';
    }
  }

?>
