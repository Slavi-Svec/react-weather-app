import React, { useState, useEffect } from 'react'
import './App.scss'
import Weather from './Components/Weather/Weather'
import getValidWeatherData from './helpers/getValidWeatherData'
import Input from './Components/Input/Input'
import moment from 'moment'
import url from './api/api'

const App = () => {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((weather) =>  {
        setWeather(getValidWeatherData(weather.list, 8))
      })
  }, [])

  return (
    <div className="App">
    <Input />
      {weather.map((dayOfTheWeekWeather) => (
        <Weather
          key={dayOfTheWeekWeather.dt_txt}
          tempMin={Math.round(dayOfTheWeekWeather.main.temp_min)}
          tempMax={Math.round(dayOfTheWeekWeather.main.temp_max)}
          day={moment(dayOfTheWeekWeather.dt_txt, 'YYYY-MM-DD HH:mm:ss').format('dddd')}
          icon={`http://openweathermap.org/img/wn/${dayOfTheWeekWeather.weather[0].icon}@2x.png`}
        />
      ))}
    </div>
  )
}

export default App