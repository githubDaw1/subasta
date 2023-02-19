/*var botones = document.getElementsByClassName("buscarSubasta");*/
var links = document.getElementsByClassName("disabled");

var cards = document.querySelectorAll(".cardFeatures");

var time = document.getElementsByClassName("tiempo");
var fecha = document.getElementsByClassName("fecha");

function reloj() {

  let today = new Date();
  let horas = today.getHours();
  let minutos = today.getMinutes();
  let segundos = today.getSeconds();
  let dia = today.getDate();
  let mes = today.getMonth();
  const semana = new Array('Lunes','Martes','Miercoles','Jueves','Viernes','Sabado', 'Domingo');

  fecha[0].innerHTML = semana[today.getDay()] + ", " + String(dia).padStart(2, '0') + "/" + String(mes).padStart(2, '0') + "/" + today.getFullYear();
  time[0].innerHTML = String(horas).padStart(2, "0") + ":" + String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0");

  setTimeout(reloj, 1000);
}

function myFunction() {

  let topNav = document.getElementById("myTopnav");

  if (topNav != null) {

    if (topNav.className == "topnav") {
      topNav.className += " responsive";
    } else {
      topNav.className = "topnav";
    }
  }
}

window.onload = function() {
  myFunction();
};

for (let i = 0; i < links.length; i++) {

  links[i].disabled = "true";

  links[i].onclick = function() {

    if (links[i].className == "disabled") {
      links[i].disabled = false;
      links[i].style.pointerEvents = "all";
    }
  };
}

/*window.history.pushState(null, null, window.location.href);
window.onpopstate = function () { window.history.go(1); };*/

for (let i = 0; i < cards.length; i++) {

  cards[i].onclick = function() {
    location.replace("http://127.0.0.1:8000/subasta?indice=" + parseInt(i + 1));
  };
}
