const city = document.querySelector(".city");
const country = document.querySelector(".country");
const time = document.querySelector(".weather__time");
const temperature = document.querySelector(".temperature");
const state = document.querySelector(".weather__state");
const visibility = document.querySelector(".visibility");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const input = document.querySelector(".weather__input");
const containerInfo = document.querySelector(".weather__info");
const body = document.querySelector("body");


async function changeWeather() {
    let valueSearch = input.value.trim();
    let apiWeather = `http://api.openweathermap.org/data/2.5/weather?q=${valueSearch}&appid=d16cfb3283e035c2611bda1ac76cf8cb`;
    
    let data = await fetch(apiWeather).then(resp => resp.json());
    if(data.cod === 200) {
        containerInfo.classList.remove("hide");
        city.innerText = data.name;
        country.innerText = data.sys.country;
        time.innerText = new Date().toLocaleString("vi");
        let tempera = Math.round(data.main.temp - 273.15);
        temperature.innerHTML = tempera + "<sup>o</sup>C";
        state.innerText = data.weather[0].main;
        visibility.innerText = data.visibility + " (m)";
        wind.innerText = data.wind.speed + " (m/s)";
        humidity.innerText = data.main.humidity + " (%)";

        if(tempera <= 15) {
            body.setAttribute("class", "cold");
        } else if(tempera > 15 && tempera <= 25) {
            body.setAttribute("class", "cool");
        } else {
            body.setAttribute("class", "hot");
        }
    } else {
        containerInfo.classList.add("hide");
    }
}
changeWeather();

input.addEventListener("keypress", (e) => {
    if(e.code === "Enter") {
        changeWeather();
    }
})