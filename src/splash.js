import React, {Component} from 'react';
import {Dimensions ,Platform, StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  setCustomView,
  setCustomTextInput,
  setCustomText,
  setCustomImage,
  setCustomTouchableOpacity
} from 'react-native-global-props';

export default class Splash extends Component<Props> {
  //----------
  componentDidMount(){
    setTimeout(() => {
      const {navigate} = this.props.navigation;
      navigate('Login');
    },2000);
  }
  //----------
  render()
  {
    const customTextProps = {
        style: {
          fontSize: 20,
          fontFamily: 'Lato',
          color: 'blue'
        }
    };
    setCustomText(customTextProps);
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./img/splash.jpg')} style={styles.backgroundImage} resizeMode='stretch'>
        </ImageBackground>
      </View>
    );
  }
}
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent : 'center',
    alignItems : 'center',
  },
  backgroundImage: {
    width : width * 1,
    height: width * 1.80,
    resizeMode: 'contain', // or 'stretch',
    justifyContent: 'center',
  },
});
