import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FirstPage } from './src/Pages/FirstPage';
import { ScanScreen } from './src/Pages/QrScan';
export default Navigation = ({ token, }) => {

    const MyTheme = {
        dark: false,
        // colors: {
        //     primary: AppColors.White_Color,
        //     background: AppColors.White_Color,
        //     border: AppColors.White_Color,
        // },
    };
    const Stack = createStackNavigator();
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={'FirstPage'}>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
};