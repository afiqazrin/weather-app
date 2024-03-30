import { getWeatherData } from "./apiRequests";
const searchButton = document.body.querySelector('.search-btn')
const locationInput = document.body.querySelector('.location-input')
const temperatureDiv = document.body.querySelector(".temp-div")
const weatherDataIcon = document.body.querySelector('weather-icon')
const temperatureDesc = document.body.querySelector(".temp-desc")

searchButton.addEventListener('click', () => {
    if (locationInput.value != "" || null) {
        getWeatherData(locationInput.value).then(function (weatherData) {
            console.log("test:", weatherData)
            console.log(weatherData.current.feelslike_c)
            console.log(weatherData.current.condition.icon)
            console.log(weatherData.current.condition.text)
            renderWeatherInfo(weatherData.current.feelslike_c, weatherData.current.condition.icon, weatherData.current.condition.text)
        })
    }
    else {
        alert("Location cannot be blank")
    }
})

function renderWeatherInfo(temp, imgSrc, tempDesc) {

    document.body.querySelector('.data-div').innerHTML = `
    <div class="temp-div">${temp} degrees</div>
    <img src="https:${imgSrc}"alt="Weather Icon" class="weather-icon">
    <div class="temp-desc">${tempDesc}</div>
`
}