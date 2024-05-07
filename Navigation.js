import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstPage } from './src/Pages/FirstPage';
import { ScanScreen } from './src/Pages/QrScan';
import { HallPage } from './src/Pages/HallPage';
import { StatusPage } from './src/Pages/StatusPage';
import { Login } from './src/Pages/LoginPage';
import { useState } from 'react';
export default Navigation = ({ initialRouteName }) => {
    const [i, setI] = useState(initialRouteName)
    const Stack = createStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={i}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="FirstPage"
                    component={FirstPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="ScanScreen"
                    component={ScanScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="HallPage"
                    component={HallPage}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="StatusPage"
                    component={StatusPage}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};