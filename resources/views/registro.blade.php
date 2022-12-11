<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Registrarse</title>
  <link href="{{ asset('css/registro.css') }}" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>

  <header>
    <img src="{{ asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
  </header>

  <nav class="topnav" id="myTopnav">

    <a href="index.php" class="active">Inicio</a>
    <a href="buscar.php">Buscar</a>
    <a href="ayuda.php">Ayuda</a>
    <a href="index.php">Iniciar sesion</a>
    <a href="/registro">Registrarse</a>

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>

  </nav>

  <main>

    <div class="fin-float"></div>

    <section>

      <!-- Title: Hora Central Europea / Central European Time -->
      <div>
        <span class="fecha"></span>
        <span class="tiempo"></span>
        <span class="horario">CET</span>
      </div>

    </section>

    <section>

      <h2>Subastas. Busqueda avanzada</h2>

      <div class="container h-100">

        <div class="row d-flex justify-content-center align-items-center h-100">

          <div class="col-xl-9">

            <div class="card" style="border-radius: 15px;">

              <div class="card-body">

                <div class="row align-items-center pt-4 pb-3">

                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Full name</h6>
                  </div>

                  <div class="col-md-9 pe-5">
                    <input type="text" class="form-control form-control-lg" />
                  </div>

                </div>

                <hr class="mx-n3">

                <div class="row align-items-center py-3">

                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Email address</h6>
                  </div>

                  <div class="col-md-9 pe-5">
                    <input type="email" class="form-control form-control-lg" placeholder="example@example.com"/>
                  </div>

                </div>

                <hr class="mx-n3">

                <div class="row align-items-center py-3">

                  <div class="col-md-3 ps-5">
                    <h6 class="mb-0">Password</h6>
                  </div>

                  <div class="col-md-9 pe-5">
                    <input type="password"  class="form-control" placeholder="Write your secret code">
                  </div>

                </div>

                <hr class="mx-n3">

                <div class="px-5 py-4">
                  <button type="submit" class="btn btn-primary btn-lg">Send application</button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  </main>

  <footer>

    <h2>
      <abbr title="proyecto">Proyecto final de Grado Superior</abbr>
    </h2>

    <p>Autor: Rafael Aguilar Muñoz</p>

  </footer>

  <script src="https://subastas.boe.es/lib/js/desplegable.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@latest/dist/umd/popper.min.js" defer></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@latest/dist/js/bootstrap.min.js" defer></script>
  <script src="{{ asset('js/reloj.js') }}" defer></script>


</body>

</html>
