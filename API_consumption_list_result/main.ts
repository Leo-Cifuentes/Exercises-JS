// Espera a que el DOM esté listo
document.addEventListener("DOMContentLoaded", async () => {
  const countriesList = document.querySelector("#countries") as HTMLSelectElement;
  const citiesList = document.querySelector("#cities") as HTMLSelectElement;
  if (!countriesList && !citiesList) return;
  const urls: string[] = [
    "https://countriesnow.space/api/v0.1/countries",
    "https://countriesnow.space/api/v0.1/countries/currency",
  ];
  let dataCountries: string[] = [];

  try {    
      let response = await fetch("https://countriesnow.space/api/v0.1/countries");
      let data = await response.json();
      if (data && Array.isArray(data.data)) {
        countriesList.innerHTML = "<option>País</option>";
        data.data.forEach((item: any) => {
          if (item.country) {
            const optionCountry: HTMLOptionElement =
              document.createElement("option");
            optionCountry.textContent = item.country;
            countriesList.appendChild(optionCountry);
            console.log(item.country);
          }
        });
        dataCountries = data.data;
      }
    
    } catch (error) {
      countriesList.innerHTML = "<option>Error al cargar países</option>";
      citiesList.innerHTML = "<option>Error al cargar ciudades</option>";
    }
    if (countriesList) {
      countriesList.addEventListener("change", (e) => {
        const currentCountry: string = (e?.target as HTMLSelectElement).value;
        const selectedCountry = dataCountries.find(
          (country: any) => country.country === currentCountry
        );
        console.log(selectedCountry);
        citiesList.innerHTML = "<option>Ciudad</option>";
        if (selectedCountry && Array.isArray(selectedCountry.cities)) {
          selectedCountry.cities.forEach((city: any) => {
            const optionCity: HTMLOptionElement = document.createElement("option");
            optionCity.textContent = city;
            citiesList.appendChild(optionCity);
          });
        }
      });
    }
  });