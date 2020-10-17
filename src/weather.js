const weather = document.querySelector(".js-weather")
const API_KEY = '36744aad0e06aed2f64cf1e5d38d70bb';
const COORDS_LS = 'coords';
const LAT_LS = 'latitude';
const LONG_LS = 'longitude';

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json()
    }).then(function(json) {
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} @ ${place}`;
    })
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log('Can\'t access geo location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();