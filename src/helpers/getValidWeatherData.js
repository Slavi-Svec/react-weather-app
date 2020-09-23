const getValidWeatherData = (weather, number) => {
  weather.filter((_, index) => index % number === 0)
}

export default getValidWeatherData