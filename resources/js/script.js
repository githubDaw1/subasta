var botones = document.getElementsByClassName("buscarSubasta");
var links = document.getElementsByClassName("disabled");

console.log("Buscadores de subastas: " + botones.length);

/*for (let i = 0; i < botones.length; i++) {

  botones[i].onclick = function() {
    location.replace("http://localhost:8082/subasta/subasta.php?indice=" + (i + 1));
  };
}*/

for (let i = 0; i < links.lenght; i++) {

  links[i].disabled = true;

  links[i].onclick = function() {

    if (links[i].className == "disabled") {
      links[i].disabled = false;
      links[i].style.pointerEvents = "all";
    }
  };
}

/*window.history.pushState(null, null, window.location.href);
window.onpopstate = function () { window.history.go(1); };*/
