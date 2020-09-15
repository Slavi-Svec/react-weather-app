import React from 'react'
import './styles.scss'

const Weather = () => (
  <>
    <section className="weather">
      <div className="weather__container">
        <text className="weather__Day">Mon</text>
        <img className="weather__Image" src='http://openweathermap.org/img/wn/04d@2x.png' alt=''></img>
        <div className="weather__contantainer-temp">
          <text className="weather__Temp-min">19<span>&#176;</span></text>
          <text className="weather__Temp-max">30<span>&#176;</span></text>
        </div>
      </div>
    </section>
  </>
)

export default Weather





