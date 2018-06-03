import axios from "axios";

const OPEN_WEATHER_API_KEY = `6c6cfd0eed2926606d42d73b99ab1001`;
const OPEN_WEATHER_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

let request;
export function fetchWeather(city) {

    const url = `${OPEN_WEATHER_ROOT_URL}&q=${city},us`;
    request = axios.get(url);

    console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }

}
