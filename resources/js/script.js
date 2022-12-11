var botones = document.getElementsByClassName("buscarSubasta");

console.log("Buscadores de subastas: " + botones.length);

for (let i = 0; i < botones.length; i++) {

  botones[i].onclick = function() {
    location.replace("http://localhost:8082/subasta/subasta.php?indice=" + (i + 1));
  };
}