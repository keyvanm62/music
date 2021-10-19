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
  SafeAreaView,
  Linking
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from '@react-navigation/stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Toast ,Container, Header, Left, Body, Right, Button, Title , FooterTab , Footer , Content , Drawer , Input } from 'native-base';

export default class Resume extends Component<Props> {
  constructor(Props){
    super(Props);
    this.state ={
      name : '',

    }
  }
  //-------------
  render()
  {
    const {navigate} = this.props.navigation;
    var {height, width} = Dimensions.get('window');
    return (
      <Container style={ styles.container }>
          <Content>
            <View style={styles.backgroundImage}>
              <View style={styles.header}>
                <View style={{width : '40%' , paddingLeft : width * 0.03 , paddingTop : width * 0.01 , flexDirection : 'row'}}>
                  <View style={{width : '10%' , marginRight : width * 0 , alignItems : 'center' , justifyContent : 'center'}}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()} style={{flex : 1 , alignItems : 'center' , justifyContent : 'center'}}>
                      <Image source={require('./img/left-arrow.png')} style={styles.menu} />
                    </Button>
                  </View>
                </View>
                <View style={{width : '60%' , alignItems: 'flex-end', paddingTop : width * 0.03}}>
                  <View style={{width : '100%',flexDirection : 'row'}}>
                    <View style={{width : '100%'}}>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{width : '100%' , justifyContent : 'center' , alignItems : 'center' , marginBottom : width * 0.05}}>
                <Text style={{fontSize : RFPercentage(2.8) , color : '#FFF' , fontWeight : 'bold' ,  marginTop : width * 0.07 , textAlign : 'center'}}>My Resume</Text>
              </View>
            </View>
            <View style={{width : '100%' , justifyContent : 'center' , alignItems : 'center' , flexDirection : 'column'}}>
              <View style={{paddingBottom : width * 0.05 , marginBottom : width * 0.05 , backgroundColor : '#FFF' , borderRadius : 40 , flexDirection : 'column' , marginTop : width * -0.29 , width : '90%'}}>
                <View style={{width : '100%' , flexDirection : 'column' , marginTop : width * 0.05}}>
                  <View style={{width : '100%' , height : width * 0.45, borderRadius : 20 , flexDirection : 'row'}}>
                    <View style={{width : '50%' , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
                      <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                        <Image source={require('./img/keyvan.jpg')} style={styles.post} />
                      </View>
                    </View>
                    <View style={{width : '50%' , flexDirection : 'column' , justifyContent : 'center'}}>
                      <Text style={{fontSize : RFPercentage(2.4) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'left'}}>Keyvan Mozaffari</Text>
                      <TouchableOpacity onPress={() => Linking.openURL('tel:0989126183138')} style={{marginTop : width * 0.02, marginLeft : width * -0.015 , flexDirection : 'row'}}>
                        <View style={{width : '20%' , justifyContent : 'center' , alignItems : 'center'}}>
                          <Image source={require('./img/envelop.png')} style={styles.email} />
                        </View>
                        <View style={{width : '80%'}}>
                          <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.00 , textAlign : 'left'}}>coyot1904@gmail.com</Text>
                        </View>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => Linking.openURL('tel:0989126183138')} style={{marginTop : width * 0.01, marginLeft : width * -0.015 , flexDirection : 'row'}}>
                        <View style={{width : '20%' , justifyContent : 'center' , alignItems : 'center'}}>
                          <Image source={require('./img/smartphone.png')} style={styles.email} />
                        </View>
                        <View style={{width : '80%'}}>
                          <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.00 , textAlign : 'left'}}>0989126183138</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{width : '100%' , flexDirection : 'row'}}>
                    <View style={{width : '100%'}}>
                      <Text style={{fontSize : RFPercentage(2) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'left' , marginLeft : width * 0.1}}>My Bio</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1 , lineHeight: 20,}}>I’m keyvan mozaffari, professional websites and mobile applications developer. My programming focus is PHP,Python and React Native for development. I have a Bachelor's Degree in Computer Science with an emphasis on Software Development from the University of Tehran . I have been a PHP developer for the last 10 years and have been developing website and web applications like online games,shops ,etc. also I use to React Native to develop mobile applications.</Text>
                    </View>
                  </View>
                  <View style={{width : '100%' , flexDirection : 'row'}}>
                    <View style={{width : '50%'}}>
                      <Text style={{fontSize : RFPercentage(2) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'center'}}>Backend Developer</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'center'}}>PHP & Python</Text>
                    </View>
                    <View style={{width : '50%'}}>
                      <Text style={{fontSize : RFPercentage(2) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'center'}}>Mobile App Developer</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'center'}}>React-Native</Text>
                    </View>
                  </View>
                  <View style={{width : '100%' , flexDirection : 'row'}}>
                    <View style={{width : '50%'}}>
                      <Text style={{fontSize : RFPercentage(2) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'center'}}>UI/UX Developer</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'center'}}>Responsive Design</Text>
                    </View>
                    <View style={{width : '50%'}}>
                      <Text style={{fontSize : RFPercentage(2) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'center'}}>Frontend Developer</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'center'}}>React & Bootstrap</Text>
                    </View>
                  </View>
                  <View style={{width : '100%' , flexDirection : 'column'}}>
                    <View style={{width : '100%'}}>
                      <Text style={{fontSize : RFPercentage(2) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.05 , textAlign : 'left' , marginLeft : width * 0.1}}>My Work History</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1}}>Freelancer Web/Mobile Developer</Text>
                      <Text style={{fontSize : RFPercentage(1.2) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1}}>Senior Web / Mobile Developer • March 2017 - Present</Text>
                                            <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1 , lineHeight: 20,}}>I use to freelancer as my new job to get new experience of development and have time to reviews new things in while I start use React-Native as new role for develop mobile applications. Right now I develop more than 8 project by React-Native also I use to PHP to write Service for them.</Text>
                    </View>
                    <View style={{width : '100%'}}>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1}}>Azki</Text>
                      <Text style={{fontSize : RFPercentage(1.2) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1}}>CTO • March 2016 - February 2017</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1 , lineHeight: 20,}}>
                        AZKI is online insurance website. My responsibility in AZKI is manage developers to maintrance current version and migrate and develop new version based on website and mobile application. We use to agile methodology and scrum to burndown our tasks. I use to a role for my team as scrum master.
                      </Text>
                    </View>
                    <View style={{width : '100%'}}>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#000' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1}}>Kanon Iran Novin</Text>
                      <Text style={{fontSize : RFPercentage(1.2) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1}}>Technical Development Manager • March 2013 - February 2016</Text>
                      <Text style={{fontSize : RFPercentage(1.6) , color : '#8f8f8f' , fontWeight : 'bold' , marginTop : width * 0.02 , textAlign : 'justify' , marginLeft : width * 0.1 , marginRight : width * 0.1 , lineHeight: 20,}}>
                        I manage a team of developers in different language as head developer. We work on advanced technologies as mobile applications , websites, real time data analytics, custom attractions deployment ...) Kanoon Iran Novin is a place for an experiential application for events and learning. We provide an all-in-one solution to facilitate networking, training, and engagement among customers. Kanoon Iran Novin provides applications for everything from small training seminars to large conferences or events. We have put on over 400 events in the last three years. Companies like ASUS, Saipa, IRANCELL(MTN), Mihan, Renault.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Content>
      </Container>
    );
  }
}
var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent : 'center',
    alignItems : 'center',
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
  },
  header : {
    width : '100%' , flexDirection : 'row'
  },
  menu : {
    width : width * 0.05,
    height : width * 0.05,
    resizeMode: 'contain',
    marginTop : width * 0.05
  },
  backgroundImage: {
    flex: 1,
    height : width * 0.5,
    backgroundColor: '#7700e4',
  },
  notification : {
    width : width * 0.06,
    height : width * 0.06,
    resizeMode: 'contain',
  },
  post : {
    width : width * 0.3,
    height : width * 0.3,
    resizeMode: 'contain',
    borderRadius : width * 0.15
  },
  postdor : {
    width : width * 0.7,
    height : width * 0.5,
    resizeMode: 'contain',
  },
  email : {
    width : width * 0.035,
    height : width * 0.035,
    resizeMode: 'contain',
  }
});
