import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import Home from './src/screens/home';
import LoginScreen from './src/screens/login';
import {useUser} from './src/store';

const NavStack = createNativeStackNavigator();

function App(): JSX.Element {
  const user = useUser(state => state.user);
  const isLoggedIn = user.id?.length > 1;
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName={isLoggedIn ? 'Home' : 'Login'}>
        <NavStack.Screen name="Home" component={Home} />
        <NavStack.Screen name="Login" component={LoginScreen} />
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
