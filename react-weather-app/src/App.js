import React from 'react';
import Text from './Components/Text/Text'
import './App.css';

const App = () => {

  const updateWeather = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((weather) => {
        const currentWeather = weather.main.temp
        console.log(currentWeather)
      })
  }
  updateWeather('http://api.openweathermap.org/data/2.5/weather?zip=2000,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa')

  return (
    <div className="App">
    <Text
        text="Weather App"
        className="Main__title"
        variant="h1"
      />
    </div>
  )
}

export default App;