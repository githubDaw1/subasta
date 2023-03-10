var arrayTime = document.getElementsByClassName("tiempo");
var final = false;

function showTime() {

  var [hora1, minuto1, segundo1] = arrayTime[0].innerHTML.split(":");
  var [hora2, minuto2, segundo2] = arrayTime[1].innerHTML.split(":");

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

showTime();
