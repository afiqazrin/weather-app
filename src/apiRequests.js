import { apiKey } from "./apiKey"
export function getWeatherData(location) {
    return fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
            return response
        })
}
