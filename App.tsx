import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Home from './src/screens/home';

const NavStack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="Home">
        <NavStack.Screen name="Home" component={Home} />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = (): JSX.Element => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

export default MainApp;
