import * as React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreensName } from "../constant/StringC";
import HomeScreen from "../screens/homeScreen/HomeScreen";


const StackHome = createNativeStackNavigator();

const HomeStack = () => {
    return (

        <StackHome.Navigator screenOptions={{ headerShown: false }}>
            <StackHome.Screen
                name={ScreensName.homeScreen}
                component={HomeScreen}
            />

        </StackHome.Navigator>

    );
};

export default HomeStack;
