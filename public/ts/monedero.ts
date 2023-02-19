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
