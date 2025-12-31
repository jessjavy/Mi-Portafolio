const añoActual = document.getElementById("año");

const hoy = new Date();
const año = hoy.getFullYear();

añoActual.textContent = año;