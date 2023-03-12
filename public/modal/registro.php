<?php
  use App\Models\Usuario;
?>

<div id="registroModal" class="modalDialog">

  <div>

    <a href="#close" title="Close" class="close">X</a>

    <form action="https://subasta-production.up.railway.app/#loginModal" method="GET" enctype="multipart/form-data">

        <h2>Registrarse</h2>

        <div class="form-group">
          <label for="nombre" class="text-info">Nombre:</label>
          <input type="text" name="nombre" id="name" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="apellidos" class="text-info">Apellidos:</label>
          <input type="text" name="apellidos" id="surname" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="usuario" class="text-info">Usuario:</label>
          <input type="email" name="usuario" id="user" class="form-control" required autofocus minlength="1" maxlength="50">
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="passw" class="text-info">Contraseña:</label>
          <input type="password" name="passw" id="password" class="form-control" required minlength="1" maxlength="256">
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <button name="register" id="register">Registrarse</button>
        </div>

      </form>

  </div>

</div>


<?php

  $usuarioExiste = false;
  $permiso = 0;

  if (isset($_GET["register"])) {

    $name = $_GET["nombre"];
    $surname = $_GET["apellidos"];
    $correo = $_GET["usuario"];
    $password = $_GET["passw"];

    $regex = "/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]@subasta\.com$/ism";

    //$regex = "/^[A-Za-z]{1,50}$/";
    //$regex = "/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]{1,50}$/";
    //$rege = "/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/";

    for ($i = 0; $i < count($users) && !$usuarioExiste; $i++) {

      if (strcmp($name, $users[$i]["nomUsu"]) != 0 &&
          strcmp($surname, $users[$i]["apeUsu"]) != 0 &&
          strcmp($user, $users[$i]["user"]) != 0 &&
          strcmp($users[$i]["password"], trim(strval(hash('sha512', $password)))) != 0 &&
          $i != count($users)) {

        $usuarioExiste = true;
        //$permiso = intval($users[$i]["permiso"]);

        /*echo "Nombre: ". $name ."<br/>Apellidos: ". $surname ."<br/>";
        echo "Usuario: ". $correo. "<br/>Contraseña: ". $password ."<br/>";
        echo "Fecha actual: ". date("Y-m-d"). "<br/>";*/

        $usuario = new Usuario();
        $codigo = $usuario->getLastId();

        $id = intval($codigo[0]["codUsu"]) + 1;

        /*echo "Codigo: ". $id. "<br>";
        echo "Codigo: ". intval($codigo[0]["codUsu"]). "<br>";

        echo "<pre>";
        var_dump($codigo);
        echo "</pre>";*/

        //$usuario = new Usuario();
        $users = $usuario->addUsuarios($id, strval($name), strval($surname), $correo, trim(strval(hash('sha512', $password))), date("Y-m-d"));
      }

      /*if (preg_match($regex, ($correo))) {

        echo "Nombre: ". $name ."<br/>Apellidos: ". $surname ."<br/>";
        echo "Usuario: ". $correo. "<br/>Contraseña: ". $password ."<br/>";
        echo "Fecha actual: ". date("Y-m-d"). "<br/>";

        $usuario = new Usuario();
        $user = $usuario->GETLastId();

        $codigo = intval($user[0]['codUsu']) + 1;

        $usuario = new Usuario();
        $users = $usuario->addUsuarios($codigo, $name, $surname, $correo, hash('sha512', $password), date("Y-m-d"));

      } else {
        echo "<noscript>alert('Hay agún error en el registro');</noscript>";
      }

      if ($usuarioExiste) {

        if ($permiso == 1) {
          header("Location: /tablas");
          exit();
        } else {
          header("Location: /portal");
          exit();
        }

      } else {
        echo "<noscript>alert('El usuario o la contraseña son incorrectos');</noscript>";
      }*/
    }
  }

?>
