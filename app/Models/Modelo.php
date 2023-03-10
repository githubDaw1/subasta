<?php

  class Modelo {

    private $con;

    public function __construct() {
      $this->con = mysqli_connect('containers-us-west-31.railway.app', 'root' , 'pK091DOyf7nqKTxSKcqM', 'railway');
    }

    // Obtener todos los usuarios
    public function getUsuarios() {

      $usuarioResult = $this->con->query("SELECT * FROM usuario");

      while ($row = mysqli_fetch_array($usuarioResult)) { $usuarios[] = $row; }

      return $usuarios;
    }

    // Otener todos los productos
    public function getProductos() {

      $productResult = $this->con->query("SELECT * FROM producto");

      while ($row = mysqli_fetch_array($productResult)) { $productos[] = $row; }

      return $productos;
    }

    // Obtener todos las subastas
    public function getSubastas() {

      $subastaResult = $this->con->query("SELECT * FROM subasta WHERE precIni > 0");

      while ($row = mysqli_fetch_array($subastaResult)) { $subastas[] = $row; }

      return $subastas;
    }

    // Obtener todas las pujas
    public function getPujas() {

      $pujasResult = $this->con->query("SELECT * FROM puja");

      while ($row = mysqli_fetch_array($pujasResult)) { $pujas[] = $row; }

      return $pujas;
    }

    /*public function addUsuarios($usuario) {

    }

    public function addProductos($producto) {

      $query = $this->con->query("INSERT INTO genero (genero) VALUES genero=$genero");

      while ($row = $query->fetch_array(MYSQLI_ASSOC)) { $generos[] = $row; }

      return $generos;
    }

    public function addSubastas($subasta) {

      $query = $this->con->query("INSERT INTO genero (genero) VALUES genero=$genero");

      while ($row = $query->fetch_array(MYSQLI_ASSOC)) { $generos[] = $row; }

      return $generos;
    }

    public function addPujas($puja) {

      $query = $this->con->query("INSERT INTO genero (genero) VALUES genero=$genero");

      while ($row = $query->fetch_array(MYSQLI_ASSOC)) { $generos[] = $row; }

      return $generos;
    }


    public function delProducto($genero) {

      $query = $this->con->query("DELETE FROM genero WHERE genero=$genero");

      while ($row = $query->fetch_array(MYSQLI_ASSOC)) { $generos[] = $row; }

      return $generos;
    }

    public function updateSerie($serie) {

      $codigo = $serie[0];
      $fecha = $serie[2];
      $temporadas = $serie[3];
      $puntuacion = $serie[4];
      $argumento = $serie[5];

      $query = $this->con->query("UPDATE serie SET fecha='$fecha' , temporadas='$temporadas', puntuacion='$puntuacion', argumento='$argumento' WHERE ids='$codigo'");

      while ($row = $query->fetch_array(MYSQLI_ASSOC)) { $series[] = $row; }

      return $series;
    }*/
  }

  //$this->con->close();

?>
