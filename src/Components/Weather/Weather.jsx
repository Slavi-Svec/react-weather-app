import React from 'react'
import './styles.scss'
import Text from '../Text/Text'
import Image from '../Image/Image'

const Weather = ({ temp }) => (
  <section className="weather">
    <Text className="weather__day" text="monday"></Text>
    <Image className="weather__image" src="http://openweathermap.org/img/wn/04d@2x.png"></Image>
    <div className="weather__container-temp">
      <Text className="weather__temp-min" showUniCode text={temp}></Text>
      <Text className="weather__temp-max" showUniCode text="38"></Text>
    </div>
  </section>
)

export default Weather