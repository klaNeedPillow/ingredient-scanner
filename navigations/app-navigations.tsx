import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "@clerk/clerk-expo";
import { PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";
import Notifications from '../components/Toast'
import { HomeScreen } from '../screens/Home'
import { LoginScreen } from '../screens/Login'
import { Check } from '../screens/check'
import { Menu } from '../screens/menu'
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GluestackUIProvider, config } from "@gluestack-ui/themed"
import { SafeAreaView } from "react-native";
import { Choosed } from "../screens/choosed";
import { Cookie, History } from "lucide-react-native";
import { Cooking } from "../screens/cooking";
import { Recently } from "../screens/history";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'tomato',
        secondary: 'yellow',
    },
};

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    const { userId } = useAuth();

    const options = {
        headerStyle: {
            backgroundColor: '#EF9E3F',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        title: 'Ingredient Scanner',
    } satisfies NativeStackNavigationOptions;

    return (
        <>
            <GluestackUIProvider config={config.theme}>
                <PaperProvider theme={theme}>
                    <NavigationContainer theme={theme}>

                        {userId ? (
                            <Tab.Navigator>
                                <>
                                    <Tab.Screen name="Home" component={HomeScreen}
                                        options={{
                                            tabBarLabel: 'Home',
                                            tabBarIcon: ({ color }) => (
                                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen name="Check" component={Check}
                                        options={{
                                            tabBarLabel: 'Check',
                                            tabBarIcon: ({ color }) => (
                                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen name="Menu" component={Menu}
                                        options={{
                                            tabBarLabel: 'Menu',
                                            tabBarIcon: ({ color }) => (
                                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen name="Choosed" component={Choosed}
                                        options={{
                                            tabBarLabel: 'Choosed',
                                            tabBarIcon: ({ color }) => (
                                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen name="Cooking" component={Cooking}
                                        options={{
                                            tabBarLabel: 'Cooking',
                                            tabBarIcon: ({ color }) => (
                                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                            ),
                                        }}
                                    />
                                    <Tab.Screen name="Recently" component={Recently}
                                        options={{
                                            tabBarLabel: 'Recently',
                                            tabBarIcon: ({ color }) => (
                                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                            ),
                                        }}
                                    />
                                </>
                            </Tab.Navigator>
                        ) : (
                            <Stack.Navigator>
                                <>
                                    <Stack.Screen name="Login" component={LoginScreen}
                                        options={options} />
                                </>
                            </Stack.Navigator>
                        )}

                        <Notifications />
                    </NavigationContainer>
                </PaperProvider>
            </GluestackUIProvider>
        </>
    )
}