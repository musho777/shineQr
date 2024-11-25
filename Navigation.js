import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstPage } from './src/Pages/FirstPage';
import { ScanScreen } from './src/Pages/QrScan';
import { HallPage } from './src/Pages/HallPage';
import { StatusPage } from './src/Pages/StatusPage';
import { Login } from './src/Pages/LoginPage';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddToken } from './src/store/action/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default Navigation = ({ initialRouteName }) => {
    const Stack = createStackNavigator();
    const dispatch = useDispatch()
    const getToken = async () => {
        let uuid = await AsyncStorage.getItem("UUID")
        let id = await AsyncStorage.getItem("ID")
        dispatch(AddToken(uuid, id))
    }
    useEffect(() => {
        getToken()
    }, [])

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={initialRouteName}>
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