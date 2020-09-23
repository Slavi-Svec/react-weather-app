import React from 'react'
import './styles.scss'
import Text from '../Text/Text'
import Image from '../Image/Image'

const Weather =  ({ day, tempMin, tempMax, icon }) => (
  <section className="weather">
    <Text className="weather__day" text={day}></Text>
    <Image className="weather__image" src={icon}></Image>
    <div className="weather__container-temp">
      <Text className="weather__temp-min" showUniCode text={tempMin}></Text>
      <Text className="weather__temp-max" showUniCode text={tempMax}></Text>
    </div>
  </section>
)

export default Weather