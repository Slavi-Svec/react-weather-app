import React, { useState, useEffect } from 'react'
import './App.css'
import Weather from './Components/Weather/Weather'

const weatherUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=2000,au&units=metric&appid=c984cb8f0420701b13c79b9aae449db6'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const App = () => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weather) => {
        setWeather(weather.list)
      })
  }, [])

  const fiveDayWeather = weather.filter((element, index) => {
    if (index % 8 === 0) {
      return element
    }
  })

  return (
    <div className="App">
      {fiveDayWeather.map((dayOfTheWeekWeather) => (
        <Weather
          tempMin={Math.round(dayOfTheWeekWeather.main.temp_min)}
          tempMax={Math.round(dayOfTheWeekWeather.main.temp_max)}
          day={days[new Date(dayOfTheWeekWeather.dt * 1000).getDay()]}
          icon={`http://openweathermap.org/img/wn/${dayOfTheWeekWeather.weather[0].icon}@2x.png`}
        />
      ))}
    </div>
  )
}

export default App
