
import React from 'react';
import 'react-native-gesture-handler';
import Splash from './components/Splash'
import Login from './components/Login'
import OTP from './components/OTP'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
