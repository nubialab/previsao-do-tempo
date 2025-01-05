const key = "1b5abf830fe35ce0e9812786a4544e7d";

// Lista de cidades
const cities = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Recife", "Porto Alegre", "Manaus", "Brasília", "Santa Catarina"];

function getRandomCity() {
  const randomIndex = Math.floor(Math.random() * cities.length); // Escolhe um índice aleatório
  return cities[randomIndex]; // Retorna o nome da cidade
}

function dataScreen(data) {
  console.log(data);
  document.querySelector(".city").innerHTML = "Tempo em " + data.name;
  document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
  document.querySelector(".text-prev").innerHTML = data.weather[0].description;
  document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity + "%";
  document.querySelector(".img-prev").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((response) => response.json());
  dataScreen(data);
}

function clickButton() {
  const city = document.querySelector(".input-city").value;
  searchCity(city);
}

// Exibir cidade aleatória ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const randomCity = getRandomCity(); // Seleciona uma cidade aleatória
  searchCity(randomCity); // Busca os dados para essa cidade
});