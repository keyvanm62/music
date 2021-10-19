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

export default class Term extends Component<Props> {
  //--------------
  render()
  {
    const {navigate} = this.props.navigation;
    var {height, width} = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <View style={{width : '100%' , paddingLeft : width * 0.08}}>
          <Image source={require('./img/logo.png')} style={styles.logo} />
          <Text style={styles.subText}>Welcome To ProNativeApp</Text>
          <Text style={styles.subTextTerm}>{'\u2022'} ProNativeApp built the ProNativeApp app as a Free app. This SERVICE is provided by ProNativeApp at no cost and is intended for use as is.</Text>
          <Text style={styles.subTextTerm}>{'\u2022'} This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.</Text>
          <Text style={styles.subTextTerm}>{'\u2022'} If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.</Text>
          <Text style={styles.subTextTerm}>{'\u2022'} The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at PronativeApp unless otherwise defined in this Privacy Policy.</Text>
          <Text style={styles.subTextTerm}>{'\u2022'} For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.</Text>
          <Text style={styles.subTextTerm}>{'\u2022'} The app does use third party services that may collect information used to identify you.</Text>
        </View>
        <View style={styles.submitPlace}>
          <View style={{width : '100%'}}>
            <TouchableOpacity onPress={() => navigate('Register')} style={{width : '100%' , marginTop : width * 0.01 , borderRadius : 10 , justifyContent : 'center' , alignItems : 'center' , flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={{color : '#808080' , fontSize : RFPercentage(2) , fontWeight : 'bold'}} >Or </Text>
              <Text style={{color : '#7749bd' , fontSize : RFPercentage(2) , fontWeight : 'bold'}} >View More</Text>
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
    fontSize : RFPercentage(2.6),
    fontWeight : 'bold',
    marginTop : width * 0.03,
    marginBottom : width * 0.07
  },
  subTextTerm : {
    color : '#000',
    textAlign : 'justify',
    fontSize : RFPercentage(2),
    marginTop : width * 0.03,
    marginRight : width * 0.07,
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
