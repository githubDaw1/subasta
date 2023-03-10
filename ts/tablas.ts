var botones = document.getElementsByTagName("button");
var formularios = document.getElementsByClassName("formulario");
var tablas = document.getElementsByTagName("table");
var filas = tablas[(tablas.length - 1)].getElementsByTagName("tr");
var columnas = [];
var col = 0;

for (var fil = 1;  fil < filas.length; fil++) {
  columnas[col] = filas[fil].getElementsByTagName("td")
  col++;
}

//console.log(columnas);

/*for (let column = 0; column < columnas.length; column++) {

  console.log(columnas[column]);

  columnas[fil] = filas[fil].getElementsByTagName("td")[0];
}*/

for (var f = 0; f < formularios.length; f++) {

  //console.log("Input: " + formularios[0]);
  let input = formularios[f].getElementsByTagName("input");
  let botones = formularios[f].getElementsByTagName("button");

  input[0].disabled = true;

  if (f == (formularios.length - 1) || f == 0) {
    input[(input.length - 1)].disabled = true;
  }

  for (var b = 0; b < botones.length; b++) {

    botones[b].onclick = function() {

      input[0].disabled = false;
      input[(input.length - 1)].disabled = false;

      if (b != 0) {
        input[0].min = 1;
        input[0].max = columnas[col][(columnas.length - 1)] + 1;
        botones[1].type = "submit";
        botones[2].type = "submit";
      } else {

        for (let c = 0; c < columnas.length; c++) {

          for (let col = 0; col < columnas[0].lenght; col++) {

            input[0].value = columnas[col][(columnas.length - 1)] + 1;
            input[0].min = columnas[col][(columnas.length - 1)] + 1;
            input[0].max = columnas[col][(columnas.length - 1)] + 1;

            input[(input.length - 1)].innerHTML = columnas[(columnas.length - 1)] + 1;
            input[(input.length - 1)].min = columnas[(columnas.length - 1)] + 1;
            input[(input.length - 1)].max = columnas[(columnas.length - 1)] + 1;
          }
        }
      }
    };
  }
}
