<?php
  require_once("Models/Usuario.php");
  $usuarios = new Usuario();
  $users = $usuarios->getUsuarios();
  require_once("Views/registro.php");
?>