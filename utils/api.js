

export const fetchWeather = async city => {
  const key = ""
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},nigeria&APPID=${key}&units=metric`,
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
