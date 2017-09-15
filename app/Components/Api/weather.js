const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?appid=ff7feb49a21b2bc0b792c98578c02c33"

const fetchWeather =(lat,lon) =>{
  const url = weatherUrl+ '&lat=' + lat +'&lon='+lon+"&units=metric"
  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      country: json.sys.country,
      city: json.name,
      temp: json.main.temp,
      weather: json.weather[0].main,
      windSpeed: json.wind.speed,
      pressure: json.main.pressure,
      tempMax: json.main.temp_max,
      tempMin: json.main.temp_min,
  }))
}

export default fetchWeather
