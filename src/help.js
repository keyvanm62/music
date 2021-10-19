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
  SafeAreaView
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from '@react-navigation/stack';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Textarea ,Toast ,Container, Header, Left, Body, Right, Button, Title , FooterTab , Footer , Content , Drawer , Input } from 'native-base';

export default class Help extends Component<Props> {
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
                <Text style={{fontSize : RFPercentage(2.8) , color : '#FFF' , fontWeight : 'bold' ,  marginTop : width * 0.07 , textAlign : 'center'}}>Help Center</Text>
              </View>
            </View>
            <View style={{width : '100%' , justifyContent : 'center' , alignItems : 'center'}}>
              <View style={{height : width * 1.2 , backgroundColor : '#FFF' , borderRadius : 40 , flexDirection : 'column' , marginTop : width * -0.29 , width : '90%'}}>
                <View style={{width : '100%' , flexDirection : 'column' , marginTop : width * 0.05}}>
                  <View style={{width : '100%' , height : width * 0.45, borderRadius : 20 , flexDirection : 'column'}}>
                    <View style={{flex : 1 , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
                      <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                        <Image source={require('./img/help.png')} style={styles.post} />
                      </View>
                    </View>
                  </View>
                  <View style={{width : '100%' , flexDirection : 'column'}}>
                    <View style={styles.inputPlace}>
                      <View style={{width : '80%'}}>
                        <Text style={{color : '#808080' , fontSize : RFPercentage(1.8) , fontWeight : 'bold' , textAlign : 'left' , marginBottom : width * -0.03}} >Email</Text>
                      </View>
                      <TextInput
                          placeholder={''}
                          style={styles.inpNumber}
                          onChangeText={(text) =>this.setState({text:text})}
                          selectTextOnFocus={true}
                      />
                    </View>
                    <View style={styles.inputPlace}>
                      <View style={{width : '80%'}}>
                        <Text style={{color : '#808080' , fontSize : RFPercentage(1.8) , fontWeight : 'bold' , textAlign : 'left' , marginBottom : width * -0.03}} >Message</Text>
                      </View>
                      <Textarea
                          placeholder={''}
                          rowSpan={4}
                          style={styles.inpNumber}
                          onChangeText={(text) =>this.setState({text:text})}
                          selectTextOnFocus={true}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={{width : '90%' , marginTop : width * 0.05}}>
                <TouchableOpacity onPress={() => this.login()} style={{width : '100%' , height : width * 0.14 , backgroundColor : '#7749bd' , borderRadius : 10 , justifyContent : 'center' , alignItems : 'center'}}>
                  <Text style={{color : '#FFF' , fontSize : RFPercentage(2.6) , fontWeight : 'bold'}} >Give Help</Text>
                </TouchableOpacity>
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
    marginTop : width * 0.1
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
    width : width * 0.7,
    height : width * 0.6,
    resizeMode: 'contain',
  }
});
