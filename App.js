
import React, { useEffect } from 'react';
import { NativeRouter, Route, Switch } from "react-router-native";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Splash from './components/Splash'
import Login from './components/Login'
import OTP from './components/OTP'
import Home from './components/Home'

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Text>home!</Text>,
    main: () => <Splash />
  },
  {
    path: "/login",
    sidebar: () => <Text>Home!</Text>,
    main: () => <Login />
  },
  {
    path: "/otp",
    sidebar: () => <Text>OTP!</Text>,
    main: () => <OTP />
  },
  {
    path: "/home",
    sidebar: () => <Text>OTP!</Text>,
    main: () => <Home />
  },

];


const App = () => {


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NativeRouter>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>

          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>

            <View>
              <Switch>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as
                  // above, but different components this time.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                  />
                ))}
              </Switch>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NativeRouter>
  );
};

export default App;
