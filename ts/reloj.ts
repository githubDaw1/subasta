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

reloj();
