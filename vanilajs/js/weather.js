const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const city = document.querySelector("#city")
const weather = document.querySelector("#weather")

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    
    fetch(url).then(response => response.json()).then(data => {
        const cityName = data.name;
        const weatherState = data.weather[0].main;

        city.innerText = cityName;
        weather.innerText = weatherState;
    });

}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
