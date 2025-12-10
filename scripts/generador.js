const MAYUS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUS = "abcdefghijklmnopqrstuvwxyz";
const NUMS = "0123456789";
const SIMBOLOS = "!@#$%^&*()-_=+";

document.getElementById("generar").addEventListener("click", () => {

  const longitud = document.getElementById("longitud").value

  if (longitud < 12 || longitud > 50) {
    alert("La contraseña debe tener entre 12 y 50 caracteres.");
    return;
  }

  let pass = "";

  pass += MAYUS[Math.floor(Math.random() * MAYUS.length)];
  pass += MINUS[Math.floor(Math.random() * MINUS.length)];
  pass += NUMS[Math.floor(Math.random() * NUMS.length)];
  pass += SIMBOLOS[Math.floor(Math.random() * SIMBOLOS.length)];

  const TODO = MAYUS + MINUS + NUMS + SIMBOLOS;

  while (pass.length < longitud) {
    pass += TODO[Math.floor(Math.random() * TODO.length)];
  }

  document.getElementById("resultado").textContent = pass;
});
