import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from "react-native-modal";
import {Content , Container , Footer , FooterTab} from 'native-base';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export default class SideBar extends Component {
  constructor(Props){
    super(Props);
    this.state ={
      isModalVisible2: false,
    }
  }
  //---------
  logout()
  {

  }
  //---------
  render() {
    const {height, width} = Dimensions.get('window');
    return (
        <Container style={{backgroundColor: "#2c3747"}}>
          <Content style={{ flex: 1, backgroundColor: "#2c3747"}}>
            <View style={styles.row}>
              <View style={styles.leftRow}>
                <View style={styles.userBox}>
                  <View style={styles.userImage}>
                    <View style={{width : width * 0.14 , height : width * 0.14 , borderRadius : width * 0.07 , overflow : 'hidden' , borderWidth : 1 , borderColor : '#FFF'}}>
                      <Image source={require('./img/profile.png')} style={styles.profileImage} />
                    </View>
                  </View>
                  <View style={styles.userInfo}>
                    <View style={styles.userName}>
                        <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Bold' , fontSize : RFPercentage(1.6) , color : '#FFF'}}>Keyvan Mozaffari</Text>
                    </View>
                    <View style={styles.userSex}>
                        <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(1.4) , color : '#FFF'}}>@keyvanm62</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.rightRow}>
                <TouchableOpacity onPress={() => this.props.closeDrawer()} >
                  <Image source={require('./img/cancel.png')} style={styles.closeIcon} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.menuBox}>
              <TouchableOpacity onPress={() => this.props.navigation('Book')} style={{width : '100%'}}>
                <View style={styles.menu}>
                  <View style={styles.menuIcon}>
                    <Image source={require('./img/book.png')} style={styles.menuIconStyle} />
                  </View>
                  <View style={styles.menuTitle}>
                    <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>Book Now</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.space}></View>
              <TouchableOpacity onPress={() => this.props.navigation('Portfolio')} style={{width : '100%'}}>
                <View style={styles.menu}>
                  <View style={styles.menuIcon}>
                    <Image source={require('./img/emergency.png')} style={styles.menuIconStyle} />
                  </View>
                  <View style={styles.menuTitle}>
                    <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>Portfolio</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.space}></View>
              <TouchableOpacity onPress={() => this.props.navigation('Resume')} style={{width : '100%'}}>
                <View style={styles.menu}>
                  <View style={styles.menuIcon}>
                    <Image source={require('./img/profiles.png')} style={styles.menuIconStyle} />
                  </View>
                  <View style={styles.menuTitle}>
                    <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>My Resume</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.space}></View>
                <TouchableOpacity onPress={() => this.props.navigation('Inv')} style={{width : '100%'}}>
                  <View style={styles.menu}>
                    <View style={styles.menuIcon}>
                        <Image source={require('./img/contact.png')} style={styles.menuIconStyle} />
                    </View>
                    <View style={styles.menuTitle}>
                        <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>Invite Friends</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              <View style={styles.space}></View>
              <TouchableOpacity onPress={() => this.props.navigation('Help')} style={{width : '100%'}}>
                <View style={styles.menu}>
                  <View style={styles.menuIcon}>
                    <Image source={require('./img/discuss-issue.png')} style={styles.menuIconStyle} />
                  </View>
                  <View style={styles.menuTitle}>
                    <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>Help Center</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.space}></View>
              <TouchableOpacity onPress={() => this.props.navigation('Setting')} style={{width : '100%'}}>
                <View style={styles.menu}>
                  <View style={styles.menuIcon}>
                    <Image source={require('./img/settings.png')} style={styles.menuIconStyle} />
                  </View>
                  <View style={styles.menuTitle}>
                    <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>Setting</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.space}></View>
              <TouchableOpacity onPress={() => this.props.navigation('Login')} style={{width : '100%'}}>
              <View style={styles.menu}>
                <View style={styles.menuIcon}>
                  <Image source={require('./img/logout.png')} style={styles.menuIconStyle} />
                </View>
                <View style={styles.menuTitle}>
                  <Text style={{textAlign : 'left' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(2) , color : '#FFF' }}>Sign Out</Text>
                </View>
              </View>
              </TouchableOpacity>
            </View>
          </Content>
          <Footer style={{backgroundColor: "#2c3747" , borderWidth : 0}}>
            <FooterTab style={styles.footer}>
            <View style={styles.copyright}>
              <Text style={{textAlign : 'center' , fontFamily : 'Roboto-Regular' , fontSize : RFPercentage(1.8) , color : '#79808a' , marginTop : -5}}>Version 1.1</Text>
            </View>
            </FooterTab>
          </Footer>
        </Container>
    );
  }
}
const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  row : { width : '100%' , flexDirection : 'row' , marginTop : 40},
  leftRow : {
    width : '80%',
    paddingLeft : 20,
    flexDirection : 'row'
  },
  rightRow : {
    width : '20%'
  },
  closeIcon : {
    width : width * 0.07,
    height : width * 0.07,
    resizeMode: 'contain',
  },
  userBox : {
    width : '90%',
    backgroundColor : '#222a36',
    borderRadius : 18,
    height : 80,
    flexDirection : 'row'
  },
  userImage : {
    width : '40%',
    justifyContent : 'center',
    alignItems : 'center'
  },
  userInfo : {
    width : '60%',
    flexDirection : 'column'
  },
  profileImage : {
    width : width * 0.14,
    height : width * 0.14,
    resizeMode: 'cover',
  },
  userName : {
    width : '100%',
    paddingTop : width * 0.06
  },
  userSex : {
    width : '100%',
    paddingTop : width * 0.01
  },
  menuBox : {
    flexDirection : 'column',
    width : '100%',
    paddingLeft : 20,
    marginTop : 20
  },
  menu : {
    flexDirection : 'row',
    width : '100%'
  },
  menuIcon : {
    width : '15%'
  },
  menuTitle : {
    width : '85%',
    justifyContent : 'center'
  },
  menuIconStyle : {
    width : width * 0.06,
    height : width * 0.06,
    resizeMode: 'contain',
  },
  space : {padding : width * 0.03},
  copyright : {
    position : 'absolute',
    bottom : 10,
    width : '100%'
  },
  footer : {
    backgroundColor: "#2c3747",
    borderWidth : 0
  }
});
