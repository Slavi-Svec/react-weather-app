import React, { useState, useEffect } from 'react';
import Text from './Components/Text/Text'
import './App.css';

const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa'

const App = () => {
  const [temp, setTemp] = useState('')
  useEffect(() => {
    fetch(weatherUrl)
      .then((response) => response.json())
      .then((weather) => {
      const currentWeather = weather.main.temp
      setTemp(currentWeather)
    })
  })

  return (
    <div className="App">
    <Text
        text={temp}
        className="Main__title"
        variant="h1"
      />
    </div>
  )
}

export default App;