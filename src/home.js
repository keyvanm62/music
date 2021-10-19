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
import { Toast ,Container, Header, Left, Body, Right, Button, Title , FooterTab , Footer , Content , Drawer , Input } from 'native-base';
import Sidebar from './menu';

export default class Home extends Component<Props> {
  constructor(Props){
    super(Props);
    this.state ={
      name : '',
      profileImage : '/img/a1.png',
      sex : 'Male'

    }
  }
  //-------------
  closeDrawer(){
    this.drawer && this.drawer._root && this.drawer._root.close();
  };
  //-----------
  openDrawer(){
    this.drawer && this.drawer._root && this.drawer._root.open();
  };
  //------------
  render()
  {
    const {navigate} = this.props.navigation;
    var {height, width} = Dimensions.get('window');
    return (
      <Drawer
        side="left"
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar onClose= {this.closeDrawer} closeDrawer={() => this.closeDrawer()} navigation={navigate} name={this.state.name} image={this.state.profileImage} sex={this.state.sex}/>}
        onClose={() => this.closeDrawer()} >
        <Container style={ styles.container }>
          <Content>
            <View style={styles.backgroundImage}>
              <View style={styles.header}>
                <View style={{width : '70%' , paddingLeft : width * 0.03 , paddingTop : width * 0.01 , flexDirection : 'row'}}>
                  <View style={{width : '10%' , marginRight : width * 0 , alignItems : 'center' , justifyContent : 'center'}}>
                    <Button transparent onPress={()=>this.openDrawer()} style={{flex : 1 , alignItems : 'center' , justifyContent : 'center'}}>
                      <Image source={require('./img/menu.png')} style={styles.menu} />
                    </Button>
                  </View>
                </View>
                <View style={{width : '30%' , alignItems: 'flex-end' , marginLeft : width * 0.16 , alignItems : 'center' , justifyContent : 'center' , paddingTop : width * 0.03}}>
                  <View style={{width : 100,flexDirection : 'row'}}>
                    <View style={{width : '100%' , alignItems: 'flex-end'}}>
                      <Button transparent onPress={()=>navigate('Notification')}>
                        <Image source={require('./img/notification.png')} style={styles.notification} />
                      </Button>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Text style={{fontSize : RFPercentage(4) , color : '#FFF' , fontWeight : 'bold' , marginLeft : width * 0.03 , marginTop : width * 0.01}}>Start</Text>
                <Text style={{fontSize : RFPercentage(4) , color : '#FFF' , fontWeight : 'bold' , marginLeft : width * 0.03 , marginTop : width * 0.0}}>Digital Business</Text>
                <Text style={{fontSize : RFPercentage(4) , color : '#FFF' , fontWeight : 'bold' , marginLeft : width * 0.03 , marginTop : width * 0.0 , marginBottom : width * 0.06}}>Comfortably</Text>
              </View>
            </View>
            <View style={{height : width * 1.2 , backgroundColor : '#FFF' , borderTopRightRadius : 40 , borderTopLeftRadius : 40 , flexDirection : 'column' , marginTop : width * -0.08}}>
              <View style={{width : '100%' , flexDirection : 'row' , marginTop : width * 0.05}}>
                <View style={{width : '4%'}}></View>
                <View style={{width : '45%' , backgroundColor : '#00f6' , height : width * 0.5 , borderRadius : 20 , flexDirection : 'column'}}>
                  <TouchableOpacity onPress={() => navigate('Ui')} style={{flex : 1 , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Image source={require('./img/ui.png')} style={styles.post} />
                    </View>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Text style={{fontSize : RFPercentage(2.6) , color : '#FFF' , fontWeight : 'bold' , marginTop : width * 0.0}}>UI/UX Developement</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{width : '2%'}}></View>
                <View style={{width : '45%' , backgroundColor : '#00c3' , height : width * 0.5 , borderRadius : 20 , flexDirection : 'column'}}>
                  <TouchableOpacity onPress={() => navigate('Mobile')} style={{flex : 1 , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Image source={require('./img/mobile.png')} style={styles.post} />
                    </View>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Text style={{fontSize : RFPercentage(2.6) , color : '#FFF' , fontWeight : 'bold' , marginTop : width * 0.0}}>Mobile Developement</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{width : '4%'}}></View>
              </View>
              <View style={{width : '100%' , flexDirection : 'row' , marginTop : width * 0.05}}>
                <View style={{width : '4%'}}></View>
                <View style={{width : '45%' , backgroundColor : '#00c3' , height : width * 0.5 , borderRadius : 20 , flexDirection : 'column'}}>
                  <TouchableOpacity onPress={() => navigate('Web')} style={{flex : 1 , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Image source={require('./img/web.png')} style={styles.post} />
                    </View>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Text style={{fontSize : RFPercentage(2.4) , color : '#FFF' , fontWeight : 'bold' , marginTop : width * 0.0}}>Website Developement</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{width : '2%'}}></View>
                <View style={{width : '45%' , backgroundColor : '#00f6' , height : width * 0.5 , borderRadius : 20 , flexDirection : 'column'}}>
                  <TouchableOpacity onPress={() => navigate('Seo')} style={{flex : 1 , flexDirection : 'column' , alignItems : 'center' , justifyContent : 'center'}}>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Image source={require('./img/seo.png')} style={styles.post} />
                    </View>
                    <View style={{width : '90%' , alignItems : 'center' , justifyContent : 'center'}}>
                      <Text style={{fontSize : RFPercentage(2.6) , color : '#FFF' , fontWeight : 'bold' , marginTop : width * 0.0}}>SEO & Google Ads</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{width : '4%'}}></View>
              </View>
            </View>
          </Content>
        </Container>
      </Drawer>
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
    width : width * 0.06,
    height : width * 0.08,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    height : width * 0.55,
    backgroundColor: '#7700e4',
  },
  notification : {
    width : width * 0.06,
    height : width * 0.06,
    resizeMode: 'contain',
  },
  post : {
    width : width * 0.65,
    height : width * 0.35,
    resizeMode: 'contain',
  }
});
