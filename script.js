let planetaElegido = "saturno";
function calcularPeso() {
  let pesoOriginalObjeto = prompt("¿Cuánto pesa tu objeto en la tierra?");
  let pesoFinalObjeto = pesoOriginalObjeto * 0.93;
  alert("Tu objeto pesaría " + pesoFinalObjeto + "kg en " + planetaElegido);
}
let planetaElegidos = "marte";
function calcularPesom() {
  let pesoOriginalObjeto = prompt("¿Cuánto pesa tu objeto en la tierra?");
  let pesoFinalObjeto = pesoOriginalObjeto * 0.38;
  alert("Tu objeto pesaría " + pesoFinalObjeto + "kg en " + planetaElegidos);
}
function signup() {
  let nombre = prompt("cual es tu nombre");
  let num = prompt("cual es tu numero deja el +#");
  let contra = prompt("cual seria tu contra");
  alert(
    "felicidades " +
      nombre +
      " te registraste correctamente, tu numero es " +
      num +
      " con contraseña: " +
      contra
  );
}
