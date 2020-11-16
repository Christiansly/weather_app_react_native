

export const fetchWeather = async city => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},nigeria&APPID=233b5ef1c65353899f5d7313fb196cbd&units=metric`,
  );
  const { name, weather, main } = await response.json();
  const { description } = weather[0];
  const { temp } = main;
  

  return {
    location: name,
    weather: description,
    temperature: temp,
  };
};
