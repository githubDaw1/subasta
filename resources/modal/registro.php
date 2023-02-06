<div id="registroModal" class="modalDialog">

  <div>

    <a href="#close" title="Close" class="close">X</a>

    <form action="/login" method="POST" enctype="multipart/form-data">

        <h2>Registrarse</h2>

        <div class="form-group">
          <label for="nombre" class="text-info">Nombre:</label>
          <input type="text" name="nombre" id="nombre" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="apellidos" class="text-info">Apellidos:</label>
          <input type="text" name="apellidos" id="apellidos" class="form-control" required autofocus>
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="usuario" class="text-info">Usuario:</label>
          <input type="email" name="usuario" id="usuario" class="form-control" required autofocus minlength="1" maxlength="50">
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <label for="passw" class="text-info">Contraseña:</label>
          <input type="password" name="passw" id="passw" class="form-control" required minlength="1" maxlength="256">
        </div>

        <div class="fin-float"></div>

        <div class="form-group">
          <input type="submit" name="register" id="register" value="Registrarse">
        </div>

      </form>

  </div>

</div>
