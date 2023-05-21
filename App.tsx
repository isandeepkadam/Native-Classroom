import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens';
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<NativeBaseProvider>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NativeBaseProvider>
		</NavigationContainer>
	);
}
