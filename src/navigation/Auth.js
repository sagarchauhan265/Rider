import * as React from "react";
import { View } from 'react-native';
import SplashScreen from "../screens/splashScreen/SplashScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from "../screens/welcomeScreen/WelcomeScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreensName } from "../constant/StringC";
import PhoneScreen from "../screens/phoneScreen/PhoneScreen";
import OtpScreen from "../screens/otpScreen/OtpScreen";
import DrawerNavigation from "./DrawerNavigation";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import PaymentPage from "../screens/PaymentScreen/PaymentPage";

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name={ScreensName.splashScreen}
                    component={SplashScreen}
                />
                {/* <Stack.Screen
                    name={ScreensName.welcomeScreen}
                    component={WelcomeScreen}
                /> */}
                <Stack.Screen
                    name={ScreensName.phoneScreen}
                    component={PhoneScreen}
                />
                <Stack.Screen
                    name={ScreensName.otpScreen}
                    component={OtpScreen}
                />
                <Stack.Screen
                    name={ScreensName.profileScreen}
                    component={ProfileScreen}
                />

                <Stack.Screen
                    name={ScreensName.drawerNavigation}
                    component={DrawerNavigation}
                />

                <Stack.Screen
                    name={ScreensName.PaymentPage}
                    component={PaymentPage}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Auth;
