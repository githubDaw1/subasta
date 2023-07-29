<section class="usuarios">

  <h1>Tabla Usuarios</h1>

  <div class="formulario">

    <form method="POST" class="usuario">

      <input type="number" value="<?php echo intval(count($users)) + 1; ?>" name="codUsu" disabled>
      <input type="text" name="nomUsuario">
      <input type="text" name="apeUsuario">
      <input type="email" name="usuario">
      <input type="password" name="secreto">
      <input type="date" name="fecha" value="<?php echo date("Y-m-d"); ?>" disabled>

      <div class="fin-float"></div>

      <button name="btnUser" value="Add user">Añadir usuario</button>
      <button name="btnUser" value="Edit User">Editar usuario</button>
      <button name="btnUser" value="Delete User">Borrar usuario</button>

    </form>

  </div>

  <!-- Tabla usuarios -->
  <div class="tabla">

    <table>

      <thead>

        <tr>
          <th>Código usuario</th>
          <th>nombre usuario</th>
          <th>apellidos usuario</th>
          <th>fecha union</th>
        </tr>

      </thead>

      <tbody>

        <?php
          for ($u = 0; $u < count($users); $u++) {
        ?>

          <tr>
            <td><?php echo $users[$u]['codUsu'] ?></td>
            <td><?php echo $users[$u]['nomUsu'] ?></td>
            <td><?php echo $users[$u]['apeUsu'] ?></td>
            <td><?php echo $users[$u]['fechaUnion'] ?></td>
          </tr>

        <?php
          }
        ?>

      </tbody>

    </table>

  </div>

</section>

<?php

  $usuario = new Usuario();

  $codUsu = $_POST['codUsu'];
  $nombre = $_POST['nomUsuario'];
  $apellidos = $_POST['apeUsuario'];
  $cuenta = $_POST['usuario'];
  $secreto = $_POST['secreto'];
  $fecha = $_POST['fecha'];

  if (isset($_REQUEST['btnUser'])) {

    switch ($_REQUEST['btnUser']) {

      case "Add user":

        // echo "You pressed Button 1<br>";

        if (!empty($_POST['codUsu']) && !empty($_POST['nomUsuario']) && !empty($_POST['apeUsuario']) &&
            !empty($_POST['usuario']) && !empty($_POST['secreto']) && !empty($_POST['fecha'])) {
          $users = $usuario->addUsuarios($codUsu, $nombre, $apellidos, $cuenta, trim(strval(hash('sha512', $secreto))), $fecha);
        }

      break;

      case "Edit User":

        // print "You pressed Button 2<br>";

        if (!empty($_POST['codUsu']) && !empty($_POST['nomUsuario']) && !empty($_POST['apeUsuario']) &&
            !empty($_POST['usuario']) && !empty($_POST['secreto'])) {

          for ($u = 0; $u < count($users); $u++) {

            if (intval($users[$u]['codUsu']) == intval($_POST['codUsu'])) {

              /*print "Id: ". $_POST['codUsu']. "<br>Nombre: ". $_POST['nomUsuario']. "<br>Apellidos: ". $_POST['apeUsuario'];
              print "<br>Correo: ". $_POST['usuario']. "<br>Contraseña: ". $_POST['secreto']. "<br>Fecha: ". $_POST['fecha'];
              
              echo "<br><br>Id: ". $_POST['codUsu']. "<br>Nombre: ". $_POST['nomUsuario']. "<br>Apellidos: ". $_POST['apeUsuario'];
              echo "<br>Correo: ". $_POST['usuario']. "<br>Contraseña: ". $users[$u]['password']. "<br>Fecha: ". $_POST['fecha'];*/

              $users = $usuario->updateUsuarios($_POST['codUsu'], $_POST['nomUsuario'], $_POST['apeUsuario'], $_POST['usuario'], trim(strval(hash('sha512', $_POST['secreto']))));
            }
          }
        }

      break;

      case "Delete User":

        // print "You pressed Button 3<br>";

        if (!empty($_POST['codUsu']) && !empty($_POST['nomUsuario']) && !empty($_POST['apeUsuario']) &&
            !empty($_POST['usuario']) && !empty($_POST['secreto'])) {

          for ($u = 0; $u < count($users); $u++) {

            if (intval($users[$u]['codUsu']) == intval($_POST['codUsu'])) {
              $users = $usuario->deleteUsuarios($_POST['codUsu']);
            }
          }
        }

      break;
    }
  }

  /*
    echo "Puja ganadora: " . $pu[(count($pu) - 1)]['valor'];

    for ($u = 0; $u < count($users); $u++) {

      if ($users[$u]['codUsu'] == $pu[(count($pu) - 1)]['codUsu']) {
        echo "<br/>Ganador de la subasta: " . $users[$u]['nomUsu'] . " " . $users[$u]['apeUsu'];
        break;
      }
    }

    echo "<br/>Precio inicial de subasta: " . $sub[count($sub) - 1]['precIni'];

          break;
        }
      }
    }
  }*/

?>