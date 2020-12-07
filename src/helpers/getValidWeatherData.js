const getValidWeatherData = (weather, number) => {
  return weather.filter((_, index) => index % number === 0)
}

export default getValidWeatherData