import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput} from 'react-native';
import styles from './styles';
import { fetchWeather, fetchWeatherByCity } from '../Components/Api/weather.js';
import moment from "moment";
import Icon from 'react-native-vector-icons/Ionicons'
import countryData from 'country-data'
// const countries = require('country-data').countries
const {countries} = countryData;
// const countries = countryData.countries;
const iconName = {
  Clear: "ios-sunny-outline",
  Rain: "ios-rainy-outline",
  thunderstorm:'ios-thunderstorm-outline',
  Clouds: 'ios-cloud-outline',
  Snow:'ios-snow-outline',
  Drizzle:'ios-umbrella-outline',
  Haze: 'md-cloudy'
}
const imagePicture ={
  Clear: require("./images/bg/clear.jpg"),
  Clouds: require("./images/bg/cloud.jpg"),
  Drizzle: require("./images/bg/drizzle.jpg"),
  Haze: require("./images/bg/Haze.jpg"),
  Rain: require("./images/bg/rain.jpg"),
  Snow: require("./images/bg/snow.jpg"),
  thunderstorm: require("./images/bg/thunderstorm.jpg"),
}

export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city2: 'tokyo',
      city: "default",
      country: "US",
      pressure: 1013.75,
      temp: 24,
      tempMax: '',
      tempMin: '',
      weather: "Clear",
      windSpeed: 5.52,
      isVisible: true,
    }
  }

componentDidMount(){
  this.getLocation()
  console.log(this.state.city2);

}
 getLocation () {
   navigator.geolocation.getCurrentPosition(
     (posData) =>  fetchWeather(posData.coords.latitude, posData.coords.longitude)
     .then( res => {
      this.setState({
        city: res.city,
        country: res.country,
        pressure: res.pressure,
        temp: Math.round(res.temp),
        tempMin: res.tempMin,
        tempMax: res.tempMax,
        weather: res.weather,
        windSpeed: res.windSpeed
      });
      console.log(res);
    } ),
     (error) => console.log(error),
      {timeout: 10000}
  );
 }
  onChangeText (text) {
    console.log(text);
  }
  onSubmitEditing (event) {
    console.log(event);
    fetchWeatherByCity (event)
     .then(res => {
      this.setState({
        city: event,
        country: res.country,
        pressure: res.pressure,
        temp: Math.round(res.temp),
        tempMin: res.tempMin,
        tempMax: res.tempMax,
        weather: res.weather,
        windSpeed: res.windSpeed
      })
       console.log(res);
     })
    (error) => console.log(error),
    {timeout: 1000}
}
  render () {

    console.log(this.state.weather);
    console.log(this.state.city);
    console.log(imagePicture[this.state.weather]);
    return (

      <Image source={imagePicture[this.state.weather]} style={styles.container}>
        <Image source={require('./images/bg/shadow.png')} style={styles.container2}>
          <StatusBar hidden={this.state.hideStatusBar} />
          <View style={styles.header}>
            <TextInput   style={{height: 40, borderColor: 'gray', borderLeftWidth: 1, width: '100%'}}
              placeholder='search other cities'
              onSubmitEditing={(event) => this.onSubmitEditing(event.nativeEvent.text)}
              // onSubmitEditing={(e) => this.onSubmitEditing(e.nativeEvent.text)}
            />
                {/* <Icon style={styles.icon} name ={iconName[this.state.weather]} size={100}/> */}
              <Text style ={ styles.temp}>{this.state.temp}</Text>
              <Text style ={ styles.city}>{this.state.city}</Text>
              <Text style= {styles.country}>{countries[this.state.country].name}</Text>
          </View>
          <View style= { styles.body}>
                <Text style={styles.date} >
                  {moment().format('llll')}
                </Text>
                <View style={styles.bodyContainer}>
                  <View style={styles.columnBody}>
                    <Text style={styles.textTop}>Pressure</Text>
                    <Text style= {styles.textBottom}>{this.state.pressure}</Text>
                  </View>
                  <View style={styles.columnBody}>
                    <Text style={styles.textTop}>Wind Speed</Text>
                    <Text style= {styles.textBottom}>{this.state.windSpeed}</Text>
                  </View>
                  <View style={styles.columnBody}>
                    <Text style={styles.textTop}>Min Temp</Text>
                    <Text style= {styles.textBottom}>{this.state.tempMin}</Text>
                  </View>
                  <View style={styles.columnBody}>
                    <Text style={styles.textTop}>Max Temp</Text>
                    <Text style= {styles.textBottom}>{this.state.tempMax}</Text>
                  </View>
                </View>
          </View>
        </Image>
    </Image>
    );
  }
}
