import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Spalsh from './src/splash';
import Login from './src/login';
import Register from './src/register';
import Auth from './src/auth';
import Forget from './src/forget';
import Term from './src/term';
import Home from './src/home';
import Ui from './src/ui';
import Mobile from './src/mobile';
import Web from './src/web';
import Seo from './src/seo';
import Book from './src/book';
import Portfolio from './src/porfolio';
import Resume from './src/resume';
import Inv from './src/inv';
import Help from './src/help';
import Setting from './src/setting';
import Notification from './src/notification';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Spalsh" component={Spalsh}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Auth" component={Auth}/>
        <Stack.Screen name="Forget" component={Forget}/>
        <Stack.Screen name="Term" component={Term}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Ui" component={Ui}/>
        <Stack.Screen name="Mobile" component={Mobile}/>
        <Stack.Screen name="Web" component={Web}/>
        <Stack.Screen name="Seo" component={Seo}/>
        <Stack.Screen name="Book" component={Book}/>
        <Stack.Screen name="Portfolio" component={Portfolio}/>
        <Stack.Screen name="Resume" component={Resume}/>
        <Stack.Screen name="Inv" component={Inv}/>
        <Stack.Screen name="Help" component={Help}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Notification" component={Notification}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
