import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from './screens/Home';
import { LoginScreen } from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  const options = {
    headerStyle: {
      backgroundColor: '#EF9E3F',
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    title: 'Ingredient Scanner'
  } satisfies NativeStackNavigationOptions

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} 
        options={options} />
        <Stack.Screen name="Home" component={HomeScreen} 
        options={options} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
