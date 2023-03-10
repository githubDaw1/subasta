<?php

  namespace App\Models;

  class Usuario {

    private $con;

    protected $fillable = [];

    protected $table = 'usuario';

    protected $hidden = ['password'];

    public function __construct() {
      $this->con = mysqli_connect('containers-us-west-31.railway.app', 'root' , 'pK091DOyf7nqKTxSKcqM', 'railway');
    }

    // Obtener todos los usuarios
    public function getUsuarios() {

      $selectUsers = mysqli_query($this->con, "SELECT * FROM usuario ORDER BY 1");

      while ($row = mysqli_fetch_array($selectUsers)) { $usuarios[] = $row; }

      //$usuarios = DB::table('usuario')->where('user', $correo)->where('password', $passw);

      return $usuarios;
    }

    // Obtener acceso
    public function getAcceso($correo, $passw) {

      $selectUsers = mysqli_query($this->con, "SELECT * FROM usuario WHERE user LIKE '$correo' AND password LIKE '$passw'");

      while ($row = mysqli_fetch_array($selectUsers)) { $usuarios[] = $row; }

      //$usuarios = DB::table('usuario')->where('user', $correo)->where('password', $passw);

      return $usuarios;
    }

    // Obtener el último usuario
    public function getLastId() {

      $lastId = mysqli_query($this->con, "SELECT * FROM usuario ORDER BY codUsu DESC LIMIT 1");

      while ($row = mysqli_fetch_array($lastId)) { $id[] = $row; }

      return $id;
    }

    // Añadir un usuario
    public function addUsuarios($id, $nombre, $ape, $correo, $passw, $inicio) {

      mysqli_query($this->con, "INSERT INTO usuario(codUsu, nomUsu, apeUsu, user, password, fechaUnion, permiso) VALUES ('$id', '$nombre', '$ape', '$correo', '$passw', '$inicio', '0')");

      /*while ($row = mysqli_fetch_array($insertUsers)) { $usuarios[] = $row; }

      return $usuarios;*/
    }

    // Eliminar un usuario
    public function deleteUsuarios($id) {

      mysqli_query($this->con, "DELETE FROM usuario WHERE codUsu='$id'");

      /*while ($row = mysqli_fetch_array($deleteUsers)) { $usuarios[] = $row; }

      return $usuarios;*/
    }

    // Actualizar un usuario
    public function updateUsuarios($codigo, $nombre, $ape, $correo, $passw) {

      mysqli_query($this->con, "UPDATE usuario SET nomUsu='$nombre', apeUsu='$ape', user='$correo', password='$passw' WHERE codUsu='$codigo'");

      /*while ($row = mysqli_fetch_array($updateUsers)) { $usuarios[] = $row; }

      return $usuarios;*/
    }
  }

?>
