/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  ActivityIndicator,
  KeyboardAvoidingView,
  TextInput,
  ImageBackground,
} from 'react-native';
import SearchInput from './components/SearchInput';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {fetchWeather} from './utils/api';
import getImageForWeather from './utils/getImageForWeather';
const image = {uri: 'https://reactjs.org/logo-og.png'};
class App extends React.Component {
  state = {
    location: '',
    loading: false,
    error: false,
    temperature: 0,
    weather: '',
  };

  componentDidMount() {
    this.handleUpdateLocation('Lagos');
  }
  handleUpdateLocation = async (city) => {
    if (!city) return;
    this.setState({loading: true}, async () => {
      try {
      
        const {location, weather, temperature} = await fetchWeather(city);
        this.setState({
          loading: false,
          error: false,
          location,
          temperature,
          weather,
        });
      } catch (e) {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };
  render() {
    const {loading, error, location, weather, temperature} = this.state;

    return (
      <>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getImageForWeather(`${weather}`)}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} size="large" color="black" />
            {!loading && (
              <View>
                {error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different city.
                  </Text>
                )}
              </View>
            )}
            {!error && (
              <View>
                <Text style={[styles.largeText, styles.textStyle]}>
                  {location}
                </Text>
                <Text style={[styles.smallText, styles.textStyle]}>
                  {weather}
                </Text>
                <Text
                  style={[styles.largeText, styles.textStyle]}>{`${Math.round(
                  temperature,
                )}°`}</Text>
              </View>
            )}
            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: 'white',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
});

export default App;
