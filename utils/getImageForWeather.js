/* eslint-disable global-require */

const images = {
  'clear sky': require('../weather-image/clear.png'),
  'broken clouds': require('../weather-image/brokem.jpg'),
  'scattered cloud': require('../weather-image/scattered.jpg'),
  'rain': require('../weather-image/rain.jpg'),
  'shower rain': require('../weather-image/shower.jpeg'),
  snow: require('../weather-image/snow.jpg'),
  thunderstorm: require('../weather-image/thunderstorm.jpg'),
  "few clouds": require('../weather-image/few.jpg'),
  'overcast clouds': require('../weather-image/overcast.jpg'),
};

export default weather => images[weather];
