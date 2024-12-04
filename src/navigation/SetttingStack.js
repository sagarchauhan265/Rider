import * as React from "react";
import { View } from 'react-native';
import SplashScreen from "../screens/splashScreen/SplashScreen";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreensName } from "../constant/StringC";
import SettingScreen from "../screens/settingScreen/SettingScreen";


const StackSetting = createNativeStackNavigator();

const SetttingStack = () => {
    return (

        <StackSetting.Navigator screenOptions={{ headerShown: false }}>
            <StackSetting.Screen
                name={ScreensName.settingScreen}
                component={SettingScreen}
            />

        </StackSetting.Navigator>

    );
};

export default SetttingStack;
