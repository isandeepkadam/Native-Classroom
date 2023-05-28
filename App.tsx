import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NativeBaseProvider } from "native-base"
import { Navbar } from "./src/components"
import { Home, Login, Register } from "./src/screens"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
        <Navbar />
      </NavigationContainer>
    </NativeBaseProvider>
  )
}
