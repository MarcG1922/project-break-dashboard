function añadirCero(num) {
  if (num < 10) {
    return "0" + num;
  } 
  return num;
}


function obtenerMensaje(horas, minutos) {
  const totalMinutos = horas * 60 + minutos;

  if (totalMinutos >= 1 && totalMinutos <= 420) {
    return "Es hora de descansar. Apaga y sigue mañana.";
  }
  if (totalMinutos >= 421 && totalMinutos <= 720) {
    return "Buenos días, desayuna fuerte y a darle al código.";
  }
  if (totalMinutos >= 721 && totalMinutos <= 840) {        
    return "Echa un rato más pero no olvides comer.";
  }
  if (totalMinutos >= 841 && totalMinutos <= 960) {
    return "Espero que hayas comido.";
  }
  if (totalMinutos >= 961 && totalMinutos <= 1080) {
    return "Buenas tardes, el último empujón.";
  }
  if (totalMinutos >= 1081 && totalMinutos <= 1320) {
    return "Esto ya son horas extras... piensa en parar pronto.";
  }
  if (totalMinutos >= 1321 || totalMinutos === 0) {
    return "Buenas noches, es hora de pensar en parar y descansar.";
  }

  return "Que tengas un buen día :)";
}


function actualizarReloj() {
  const ahora = new Date(); 

  const horas = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();

  document.getElementById("time").textContent =
    añadirCero(horas) + ":" + añadirCero(minutos) + ":" + añadirCero(segundos);

  const dia = añadirCero(ahora.getDate());
  const mes = añadirCero(ahora.getMonth() + 1);
  const año = ahora.getFullYear();

  document.getElementById("date").textContent = dia + "/" + mes + "/" + año;

  document.getElementById("message").textContent =
    obtenerMensaje(horas, minutos);
}


actualizarReloj();


setInterval(actualizarReloj, 1000);