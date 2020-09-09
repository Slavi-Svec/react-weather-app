import React, { useState, useEffect } from 'react';
import Text from './Components/Text/Text'
import './App.css';
import Image from './Components/Image/Image'

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa'

const App = () => {
  const [temp, setTemp] = useState('')
  const [iconID,setIconID] = useState('')
  const [city, setCity] = useState('')
  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weather) => {
      const currentWeather = Math.round(weather.main.temp)
      const  cityName = weather.name
      const weatherIcon = weather.weather[0].icon
      setTemp(currentWeather)
      setCity(cityName)
      setIconID(weatherIcon)
    })
  })

  return (
    <div className="App">
      <Text
        text={city}
        className="weather__title"
        variant="h1"
      />
      <Text
        text={temp}
        className="weather__temperature"
        variant="h2"
      />
      <Image className="weather__icon" src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} />
    </div>
  )
}

export default App;



