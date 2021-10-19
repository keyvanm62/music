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

export default class Forget extends Component<Props> {
  //--------------
  login()
  {

  }
  //-------------
  render()
  {
    const {navigate} = this.props.navigation;
    var {height, width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Image source={require('./img/logo.png')} style={styles.logo} />
        <Text style={styles.subText}>Recovering Your Password</Text>
        <View style={styles.inputPlace}>
          <View style={{width : '80%'}}>
            <Text style={{color : '#808080' , fontSize : RFPercentage(1.8) , fontWeight : 'bold' , textAlign : 'left' , marginBottom : width * -0.03}} >Username or Email</Text>
          </View>
          <TextInput
              placeholder={''}
              style={styles.inpNumber}
              onChangeText={(text) =>this.setState({text:text})}
              selectTextOnFocus={false}
          />
        </View>
        <View style={styles.submitPlace}>
          <View style={{width : '100%'}}>
          <TouchableOpacity onPress={() => this.login()} style={{width : '100%' , height : width * 0.14 , backgroundColor : '#7749bd' , borderRadius : 10 , justifyContent : 'center' , alignItems : 'center'}}>
            <Text style={{color : '#FFF' , fontSize : RFPercentage(2.6) , fontWeight : 'bold'}} >Recover Password</Text>
          </TouchableOpacity>
          </View>
          <View style={{width : '100%'}}>
            <TouchableOpacity onPress={() => navigate('Login')} style={{width : '100%' , marginTop : width * 0.07 , borderRadius : 10 , justifyContent : 'center' , alignItems : 'center' , flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={{color : '#808080' , fontSize : RFPercentage(2) , fontWeight : 'bold'}} >Or </Text>
              <Text style={{color : '#7749bd' , fontSize : RFPercentage(2) , fontWeight : 'bold'}} >Login</Text>
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
    textAlign : 'center',
    fontSize : RFPercentage(2),
    marginTop : width * 0.03,
    marginBottom : width * 0.07
  },
  inpNumber: {
      color: '#000',
      fontSize:RFPercentage(2.6) ,
      width : '100%' ,
      textAlign : 'left',
      width : '80%',
      padding : width * 0.03,
      borderBottomColor: '#7749bd',borderBottomWidth: 1
  },
  inputPlace : {
    width : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : width * 0.03
  },
  logo : {
    width : width * 0.2,
    height : width * 0.2,
  },
  submitPlace : {
    width : '80%',
    flexDirection : 'column',
    marginTop : width * 0.06
  }
});
