import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Toast, {DURATION} from 'react-native-easy-toast';

export default class Register extends Component<Props> {
  render()
  {
    const {navigate} = this.props.navigation;
    var {height, width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={{width : '100%' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}}>
          <View style={{width : "80%"}}>
            <Text style={styles.subText}>Create Account</Text>
              <Text style={{textAlign : 'left' , color : '#7749bd' , fontWeight : 'bold' , fontSize : RFPercentage(3) , marginTop : width * -0.05}}>The Mobile Applicaiton / Digital Service you only dreamed of</Text>
          </View>
          <View style={{width : "80%" , justifyContent : 'center' , alignItems : 'center'}}>
            <Image source={require('./img/regsiter.jpg')} style={styles.register} />
          </View>
        </View>
        <View style={styles.submitPlace}>
          <View style={{width : '100%'}}>
          <TouchableOpacity onPress={() => navigate('Auth')} style={{width : '100%' , height : width * 0.14 , backgroundColor : '#7749bd' , borderRadius : 10 , justifyContent : 'center' , alignItems : 'center'}}>
            <Text style={{color : '#FFF' , fontSize : RFPercentage(2.6) , fontWeight : 'bold'}} >SIGNUP</Text>
          </TouchableOpacity>
          </View>
          <View style={{width : '100%'}}>
            <TouchableOpacity onPress={() => navigate('Term')} style={{width : '100%' , marginTop : width * 0.05 , borderRadius : 10 , justifyContent : 'center' , alignItems : 'center'}}>
              <Text style={{color : '#808080' , fontSize : RFPercentage(2)}} >Term of service</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent : 'center',
    alignItems : 'center',
  },
  backgroundImage: {
    width : width *1,
    height: width * 1.65,
    resizeMode: 'contain', // or 'stretch',
    justifyContent: 'center',
  },
  headerText : {
    color : '#000',
    textAlign : 'center',
    fontSize : RFPercentage(4)
  },
  subText : {
    color : '#000',
    textAlign : 'left',
    fontSize : RFPercentage(2),
    marginTop : width * 0.03,
    marginBottom : width * 0.07,
  },
  inpNumber: {
      color: '#FFF',
      fontSize:RFPercentage(2.6) ,
      width : '100%' ,
      textAlign : 'left',
      backgroundColor : '#c2c2c2',
      width : '60%',
      padding : width * 0.03,
      borderRadius : 10
  },
  inputPlace : {
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : width * 0.03
  },
  register : {
    width : width * 0.6,
    height : width * 0.6,
    marginTop : width * 0.07
  },
  submitPlace : {
    width : '80%',
    flexDirection : 'column',
    marginTop : width * 0.2
  }
});
