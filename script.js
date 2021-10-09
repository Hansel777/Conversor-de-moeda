var valor = document.querySelector("#valorConvertido");
var input = document.querySelector("#valor");
var moeda1 = document.querySelector("#dol1");
var moeda2 = document.querySelector("#eur");
var moeda3 = document.querySelector("#bc");
var moeda4 = document.querySelector("#dol2");

function  dolar() {
  if (moeda1.value == "dol1") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
    } else {
      valor.innerText = "R$" + (parseFloat(input.value) * 5.48).toFixed(2).replace('.', ',');
    }
  }
}
  
function euro() {
  if (moeda2.value == "eur") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
    } else {
      valor.innerText = "R$" + (parseFloat(input.value) * 6.35 ).toFixed(2).replace('.', ',');
    }
  }
}

function bitcoin () {
  if (moeda3.value == "bc") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
    } else {
      valor.innerText = "R$" + (parseFloat(input.value) * 281259.97).toFixed(2).replace('.', ',');
    }
  }
}

function dolar2 () {
  if (moeda4.value == "dol2") {
    if (input.value <= 0) {
      valor.innerText = (0).toFixed(2);
    } else {
      valor.innerText = "R$" + (parseFloat(input.value) * 4.35).toFixed(2).replace('.', ',');
    }
  }
}

function Converter() {
  if(moeda1.selected) {
   dolar() 
  } else if (moeda2.selected) {
   euro()
  } else if (moeda3.selected) {
   bitcoin()
  } else if (moeda4.selected) {
   dolar2()
  }
}