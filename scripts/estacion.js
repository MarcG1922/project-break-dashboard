const apiKey = "b3d5bf2a341e4beda83172312251312";
const ciudad = "Valencia, Spain";

const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciudad}&days=1&aqi=no&alerts=no`;

async function obtenerTiempo() {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    document.getElementById("location").textContent =
      datos.location.name + ", " + datos.location.country;

    document.getElementById("condition").textContent =
      datos.current.condition.text;

    document.getElementById("icon").src =
      "https:" + datos.current.condition.icon;

    document.getElementById("temp").textContent =
      datos.current.temp_c;

    document.getElementById("rain").textContent =
      datos.current.precip_mm;

    document.getElementById("humidity").textContent =
      datos.current.humidity;

    document.getElementById("wind").textContent =
      datos.current.wind_kph;

    const horas = datos.forecast.forecastday[0].hour;
    const contenedor = document.getElementById("forecast");
    contenedor.innerHTML = "";

    horas.forEach(hora => {
      const div = document.createElement("div");
      div.classList.add("hour");

      div.innerHTML = `
        <p>${hora.time.split(" ")[1]}</p>
        <img src="https:${hora.condition.icon}">
        <p>${hora.temp_c} °C</p>
      `;

      contenedor.appendChild(div);
    });

  } catch (error) {
    console.log("Error al obtener el tiempo:", error);
  }
}

obtenerTiempo();
