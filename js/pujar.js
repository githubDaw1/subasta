var inicio = document.getElementById("fecha1");
var fin = document.getElementById("fecha2");
var reloj = document.getElementById("tictac").innerHTML;
var final = false;

function showTime() {

  var [hora1, minuto1, segundo1] = inicio.innerHTML.split(":");
  var [hora2, minuto2, segundo2] = fin.innerHTML.split(":");

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
    console.log(reloj.innerHTML);
    reloj.innerHTML += String(hora1).padStart(2, "0") + ":" + String(minuto1).padStart(2, "0") + ":" + String(segundo1).padStart(2, "0");
    setTimeout(showTime, 1000);
  }
}

showTime();