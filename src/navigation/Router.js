import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import SplashScreen from "../screens/splashScreen/SplashScreen";
// import { ScreensName } from "../constant/StringC";

const Stack = createStackNavigator();
// For full stack and auth screens
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name={'SpalshScreen'}
          component={SplashScreen}
          options={{ animationEnabled: false }}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
