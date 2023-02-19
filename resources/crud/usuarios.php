<section class="usuarios">

  <h1>Tabla Usuarios</h1>

  <div class="formulario">

    <form method="GET" class="usuario">

      <input type="number" name="codigo" value="<?php echo intval(count($users)) + 1; ?>">
      <input type="text" name="nombre">
      <input type="text" name="apellidos">
      <input type="email" name="usuario">
      <input type="password" name="secreto">
      <input type="date" name="fecha" value="<?php echo date("Y-m-d"); ?>">

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

  if (isset($_REQUEST['btnUser'])) {

    $codigo = $_GET['codigo'];
    $nombre = $_GET['nombre'];
    $apellidos = $_GET['apellidos'];
    $cuenta = $_GET['usuario'];
    $secreto = $_GET['secreto'];
    $fecha = $_GET['fecha'];

    switch ($_REQUEST['btnUser']) {

      case "Add user":

        // echo "You pressed Button 1<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['nombre']) && !empty($_GET['apellidos']) &&
            !empty($_GET['usuario']) && !empty($_GET['secreto']) && !empty($_GET['fecha'])) {
          $usuario->addUsuarios($codigo, $nombre, $apellidos, $cuenta, trim(strval(hash('sha512', $secreto))), $fecha);
        }

      break;

      case "Edit User":

        // print "You pressed Button 2<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['nombre']) && !empty($_GET['apellidos']) &&
            !empty($_GET['usuario']) && !empty($_GET['secreto'])) {

          for ($u = 0; $u < count($users); $u++) {

            if (intval($users[$u]['codUsu']) == intval($u + 1)) {

              /*print "Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nombre']. "<br>Apellidos: ". $_GET['apellidos'];
              print "<br>Correo: ". $_GET['usuario']. "<br>Contraseña: ". $_GET['secreto']. "<br>Fecha: ". $_GET['fecha'];

              echo "<br><br>Id: ". $_GET['codigo']. "<br>Nombre: ". $_GET['nombre']. "<br>Apellidos: ". $_GET['apellidos'];
              echo "<br>Correo: ". $_GET['usuario']. "<br>Contraseña: ". $users[$u]['password']. "<br>Fecha: ". $_GET['fecha'];*/

              $codigo = intval($u + 1);

              $usuario->updateUsuarios($codigo, $_GET['nombre'], $_GET['apellidos'], $_GET['usuario'], trim(strval(hash('sha512', $_GET['secreto']))));
            }
          }
        }

      break;

      case "Delete User":

        // print "You pressed Button 3<br>";

        if (!empty($_GET['codigo']) && !empty($_GET['nombre']) && !empty($_GET['apellidos']) &&
            !empty($_GET['usuario']) && !empty($_GET['secreto'])) {

          for ($u = 0; $u < count($users); $u++) {

            if (intval($users[$u]['codUsu']) == intval($_GET['codigo'])) {
              $usuario->deleteUsuarios($_GET['codigo']);
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
