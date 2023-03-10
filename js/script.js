// var botones = document.getElementsByClassName("buscarSubasta");
var links = document.getElementsByClassName("disabled");

var cards = document.querySelectorAll(".cardFeatures");

var time = document.getElementsByClassName("tiempo");
var fecha = document.getElementsByClassName("fecha");

const nav = document.getElementsByClassName("nav");

const pujar = document.getElementsByClassName("pujar");

var final = false;


/*function showTime() {

  let [hora1, minuto1, segundo1] = time[0].innerHTML.split(":");
  let [hora2, minuto2, segundo2] = time[1].innerHTML.split(":");

  if (parseInt(hora1) < parseInt(hora2)) {
    hora1++;
  } else if (parseInt(minuto1) < parseInt(minuto2)) {
    minuto1++;
  } else if (parseInt(segundo1) < parseInt(segundo2)) {
    segundo1++;
  } else {
    final = true;
  }

  if (!final) {
    arrayTime[0].innerHTML = String(hora1).padStart(2, "0") + ":" + String(minuto1).padStart(2, "0") + ":" + String(segundo1).padStart(2, "0");
    setTimeout(showTime, 1000);
  }
}

showTime();*/

function reloj() {

  let today = new Date();
  let horas = today.getHours();
  let minutos = today.getMinutes();
  let segundos = today.getSeconds();
  let dia = today.getDate();
  let mes = today.getMonth();
  const semana = new Array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo');

  fecha[0].innerHTML = semana[today.getDay()] + ", " + String(dia).padStart(2, '0') + "/" + String(mes).padStart(2, '0') + "/" + today.getFullYear();
  time[0].innerHTML = String(horas).padStart(2, "0") + ":" + String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0");

  setTimeout(reloj, 1000);
}

window.onload = function() {
  reloj();
};

nav[0].onclick = function foldNav() {

  var topNav = document.getElementById("myTopnav");

  if (topNav.className == "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
};

//var ctx = document.getElementById("myChart").getContext("2d");
const ctx = document.getElementById("myChart");

var representacion = new Chart(ctx, {

  type: "line",

  data: {

    labels: [0, 1, 2, 3, 4, 5],

    datasets: [{
      label: "Evolución de las pujas",
      data: [0, 1, 2, 3, 4, 5],
      backgroundColor: "rgb(255, 0, 0)",
      borderColor: "rgb(255, 0, 0)",
      tension: 0.1,
      borderWidth: 1,
      fill: false,
    }]
  },

  options: {

    responsive: true,
    animation: false,

    scales: {
      y: { beginAtZero: true, min: 0, max: 5 }
    },
  }
});



function grafica(codSub, arrayFechas, arrayPujas) {

  console.log(codSub);
  console.log(arrayFechas);
  console.log(arrayPujas);


  /*representacion.data.labels = JSON.parse(arrayPujas);
  representacion.data.datasets[0].data = JSON.parse(arrayPujas);
  representacion.update();*/
}

for (let i = 0; i < links.length; i++) {

  links[i].disabled = true;

  links[i].onclick = function () {

    if (links[i].className == "disabled") {
      links[i].disabled = false;
      links[i].style.pointerEvents = "all";
    }
  };
}

/*window.history.pushState(null, null, window.location.href);
window.onpopstate = function () { window.history.go(1); };*/

for (let i = 0; i < cards.length; i++) {

  cards[i].onclick = function () {
    location.replace("http://127.0.0.1:8000/subasta?indice=" + parseInt(i + 1));
  };
}

if (pujar.length > 0) {

  pujar[0].onclick = function() {

    let ultimaPuja = document.getElementsByClassName("valorPuja")[0].min;
    let valorActual = document.getElementsByClassName("valorPuja")[0].value;

    let codigoUsu = document.getElementsByClassName("codUsu")[0].value;
    let codigoSub = document.getElementsByClassName("indice")[0].value;

    console.log("Ultimo valor: " + parseFloat(ultimaPuja).toFixed(2));
    console.log("Valor actual: " + parseFloat(valorActual).toFixed(2));

    if (parseFloat(valorActual).toFixed(2) > parseFloat(ultimaPuja).toFixed(2)) {
      document.getElementsByClassName("valorPuja")[0].min = valorActual;
      document.getElementsByClassName("valorPuja")[0].value = valorActual;
    }
  };
}

/*var diccionario = {
  "hola": "hello",
  "adiós": "goodbye",
  "casa": "house",
  "coche": "car",
  "hello": "hola",
  "goodbye": "adiós",
  "house": "casa",
  "car": "coche"
};

function traducir(palabra) {
  return diccionario[palabra];
}

function detectarIdioma(palabra) {

  if (palabra in diccionario) {
    return "español";
  } else {

    for (var key in diccionario) {

      if (diccionario[key] === palabra) {
        return "inglés";
      }
    }
  }
}

function traducirInversa(palabra) {

  var idioma = detectarIdioma(palabra);

  if (idioma === "inglés") {

    for (var key in diccionario) {

      if (diccionario[key] === palabra) {
        return key;
      }
    }

  } else {
    return diccionario[palabra];
  }
}

function preventBack() {
  window.history.forward();
}

setTimeout("preventBack()", 0);

window.onunload = function() {
  window.location.href = "http://localhost:8082/subasta/portal.php";
  null
};

window.onbeforeunload = function() { return "You will  leave this page"; };

window.history.back() = function() {
  window.location.href = "http://localhost:8082/subasta/portal.php";
};

window.history.go(-1);*/

document.getElementsByTagName("img")[0].draggable = true;

document.getElementsByTagName("img")[0].ondragend = function loadImage() {
  document.getElementsByTagName("img")[1].style.opacity = "0.3";
  document.getElementById("load").style.display = "block";
};

function gastar() {
  document.getElementsByTagName("img")[1].src = "../img/carteraVacia.jfif";
  document.getElementsByTagName("img")[1].style.opacity = "1";
  document.getElementById("load").style.display = "none";
}

document.getElementsByTagName("img")[0].ondrop = function llenar() {
  document.getElementsByTagName("img")[1].src = "../img/carteraLlena.jpg";
  document.getElementsByTagName("img")[1].style.opacity = "1";
  document.getElementById("load").style.display = "none";
};
