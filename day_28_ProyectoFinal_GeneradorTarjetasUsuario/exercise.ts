document.addEventListener("DOMContentLoaded", () => {
  // ---Constantes para los elementos del HTML.---
  const userCardContainer = document.querySelector("#tarjeta-usuario-contenedor") as HTMLElement;
  const userBtnGenerate = document.querySelector("#generar-usuario-btn") as HTMLButtonElement;

  // ---Declaración del type para la construcción del objeto user.---
  type UserRamdom = {
    name: { first: string; last: string };
    email: string;
    picture: { large: string };
    location: { city: string; country: string };
  };

  // --- Función async que realiza la petición a la API, la cual retorna un usuario aleatorio.---
  async function obtenerUsuarioAleatorio() {
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        //--- Condicional para manejar errores, si los hay, desde la API.---
        throw new Error(`Error al obtener datos. Status: ${response.status}`);
      }
      const data = await response.json();
      const user = data.results[0];
      mostrarUsuario(user);
    } catch (error) {
      console.log(error);
    }
  }

  // ---Función por la cual se reciben los datos del user y se insertan en el HTML por medio de las etiquetas.---
  function mostrarUsuario(user: UserRamdom) {
    userCardContainer.innerHTML = `
    <div class="tarjeta">
        <figure>
            <img src=${user.picture.large}>
        </figure>
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.email}</p>
        <p>${user.location.city}</p>
        <p>${user.location.country}</p>
    </div>
    `;
  }

  // --- Botón con el cual se obtienen un nuevo usuario aleatorio.---
  userBtnGenerate.addEventListener("click", async () => {
    await obtenerUsuarioAleatorio();
  });
  // ---Carga Inicial---
  userBtnGenerate.click();
});
