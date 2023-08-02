<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="content-security-policy|content-type|default-style|refresh">
  <title>Página principal</title>
<<<<<<< HEAD
  <link href="img/logo.png" type="image/x-icon" rel="icon">
  <link href="icons/icomoon.min.css" rel="stylesheet">
  <link href="css/modal.css" rel="stylesheet">
  <link href="css/estilos.css" rel="stylesheet">
=======
  <link href="{{ secure_asset('img/logo.png')}}" type="image/x-icon" rel="icon">
  <link href="{{ secure_asset('icons/icomoon.min.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/modal.css') }}" rel="stylesheet">
  <link href="{{ secure_asset('css/estilos.css') }}" rel="stylesheet">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
</head>

<body>

  <header>

    <h1 class="titulo">Subastas</h1>

    <div class="info">

      <h1>Big bid on Total auction</h1>

      <p>
        Los mayores eventos de puja se ven en Subasta Total.
        Si pujas con todos tus bolsillos. Esta es tu plataforma "Subasta Total"
      </p>

      <!-- rel="nofollow noopener" -->
      <a class="botonGetStarted" href="#">Puja rápida</a>

    </div>

    <div class="imagen">
<<<<<<< HEAD
      <img src="img/cabecera.webp" alt="Logo de Subasta total">
=======
      <img src="{{ secure_asset('img/cabecera.webp') }}" alt="Logo de Subasta total">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
    </div>

  </header>

  <div class="fin-float"></div>

  <nav class="topnav" id="myTopnav">

    <a href="/" class="active">Inicio</a>
    <a href="/portal" class="disabled">Portal</a>
    <a href="/subasta" class="disabled">Subastas</a>

    <a href="#loginModal" data-target="#loginModal">Iniciar sesion</a>
    <a href="#registroModal" data-target="#registroModal">Registrarse</a>

    <a href="javascript:void(0);" class="icon nav">
<<<<<<< HEAD
      <img src="img/menu.svg" alt="Menu">
=======
      <img src="{{ secure_asset('img/menu.svg') }}" alt="Menu">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
    </a>

  </nav>

  <div class="fin-float"></div>

  <!-- Contenedor Main -->
  <main>

    <section>

      <!-- Title: Hora Central Europea / Central European Time -->
      <div>
        <span class="fecha"></span>
        <span class="tiempo"></span>
        <span class="horario">CET</span>
      </div>

    </section>

    <!-- Sección productos -->
    <section class="products">

      <h1>Products</h1>

      <div class="cardFeatures">

<<<<<<< HEAD
        <img src="img/piedrasPreciosas.jpg" alt="Piedras muy valiosas">
=======
        <img src="{{ secure_asset('img/piedrasPreciosas.jpg') }}" alt="Piedras muy valiosas">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

        <h2>Piedras preciosas</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit est ullam quis recusandae ab illum
          sunt ut in excepturi tenetur a.
        </p>

        <a href="#">Learn More</a>

      </div>

      <div class="cardFeatures">

<<<<<<< HEAD
        <img src="img/autos.webp" alt="Autos de lujo">
=======
        <img src="{{ secure_asset('img/autos.webp') }}" alt="Autos de lujo">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

        <h2>Vehículos lujosos</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit est ullam quis recusandae ab illum
          sunt ut in excepturi tenetur a.
        </p>

        <a href="#">Learn More</a>

      </div>

      <div class="cardFeatures">

<<<<<<< HEAD
        <img src="img/mobiliario.jpg" alt="Hogar del futuro">
=======
        <img src="{{ secure_asset('img/mobiliario.jpg') }}" alt="Hogar del futuro">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

        <h2>Futuro hogar</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit est ullam quis recusandae ab illum sunt ut in excepturi tenetur a.
        </p>

        <a href="#">Learn More</a>

      </div>

        <!--
        <div class="cardFeatures">

          <span class="icon-refresh"></span>

          <h4>Titulo</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit est ullam quis recusandae ab illum
            sunt ut in excepturi tenetur a.
          </p>

          <a href="#">Learn More</a>

        </div>

        <div class="cardFeatures">

          <span class="icon-refresh"></span>

          <h4>Titulo</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit est ullam quis recusandae ab illum
            sunt ut in excepturi tenetur a.
          </p>

          <a href="#">Learn More</a>

        </div>

        <div class="cardFeatures">

          <span class="icon-refresh"></span>

          <h4>Titulo</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit est ullam quis recusandae ab illum
            sunt ut in excepturi tenetur a.
          </p>

          <a href="#">Learn More</a>

        </div>
      -->
      </div>

    </section>

    <div class="fin-float"></div><hr>

    <!-- Sección informacion de eventos -->
    <section class="infoEvento">

      <!--<div class="callToActions">-->

        <h1>Eventos únicos</h1>

        <div class="imgCallToActions">
<<<<<<< HEAD
          <img src="img/evento.jpg" alt="Evento único">
=======
          <img src="{{ secure_asset('img/evento.jpg') }}" alt="Evento único">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
        </div>

        <article class="contenido">

          <h1>Subastas para tu futuro</h1>

          <p>
            Vive, disfruta, siente cada subasta para coleccionar diferentes productos que pueden ser útiles para
            adornar tu futuro hogar o recordar cada participación en "Subasta Total". Si no puedes esperar a pujar en algunos de los eventos. Participa sin nervios porque "Subasta Total" alegra a cualquier pujador para el crecimiento del negocio.
          </p>

          <ul>

            <li>
              <span class="icon-check"></span>
              Seguridad y velocidad de la aplicación web
            </li>

            <li>
              <span class="icon-check"></span>
              Sin promociones y a prueba de estafas
            </li>

            <li>
              <span class="icon-check"></span>
              Importante valoración sobre los pujadores y respeto absoluto
            </li>

          </ul>

          <div class="boxCardCallToActions">

            <div class="cardCallToActions">

              <div class="boxProfesional">

                <div class="imgProfesional">
<<<<<<< HEAD
                  <img src="img/cara.png" alt="Cara del Administrador">
=======
                  <img src="{{ secure_asset('img/cara.png') }}" alt="Cara del Administrador">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
                </div>

                <div class="datosProfesional">
                  <h5>Rafael Aguilar Muñoz</h5>
                  <h6>Administrador de "Subasta Total"</h6>
                </div>

              </div>

              <p>Encargado de supervisar cada detalle de la aplicación web</p>

            </div>

          </div>

        </article>

      <!--</div>-->

    </section>

    <div class="fin-float"></div><hr>

    <!-- Sección personal -->
    <section class="sobre">

      <h1>About</h1>

      <div class="personal">

        <div class="imagen">
<<<<<<< HEAD
          <img src="img/personal.jpg" alt="Imagen del personal">
=======
          <img src="{{ secure_asset('img/personal.jpg') }}" alt="Imagen del personal">
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae
        </div>

        <article class="contenidoAbout">

          <h1>Aplicación web - Proyecto final</h1>

          <p>
            Si algún usuario está descontento con la aplicación, ya sea por un error, interfaz (mala experencia notada por algú pujador).
            Por favor, informé al encargado o admininstrador de "Subasta Total". De momento, todo es de prueba (moneda, subastas, pujas, etc.) por el bien del funcionamiento de la aplicación web.
          </p>

          <p>
            "Subasta Total" desea ser un gran referente en el mundo de subastas. Todo depende de hasta donde puede llegar la unión y la confianza de cualquier pujador con el desarrollo de la aplicación web y las innovaciones aplicadas por el administrador.
            "Subasta Total" os desea lo mejor en cualquier aspecto y sobre todo la experencia de cualquier usuario.
          </p>

          <a class="botonGetStarted" href="#">Algo más</a>

        </article>

      </div>

    </section>

  </main>

  <?php
    require_once("modal/login.php");
    echo "<br/>";
    require_once("modal/registro.php");
  ?>

  <footer>
    <h2>Proyecto final de Grado Superior</h2>
    <p>Autor: Rafael Aguilar Muñoz</p>
  </footer>

<<<<<<< HEAD
  <script src="js/app.js" defer></script>
  <script src="js/script.js" defer></script>
=======
  <script src="{{ secure_asset('js/app.js') }}" defer></script>
  <script src="{{ secure_asset('js/script.js') }}" defer></script>
>>>>>>> cb28d42300f589250e9e4e73c0bac9df75c8c4ae

</body>

</html>
