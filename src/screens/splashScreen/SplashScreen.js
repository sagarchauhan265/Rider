import React, { useEffect } from "react";
import { View, Text, ImageBackground, Image } from 'react-native';
// import * as AsyncStorage from '../../utility/AsyncStorage';
import { imageName } from "../../constant/Images";
import { ScreensName } from "../../constant/StringC";
import Styles from "./SplashStyle";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = (props) => {
  const [authLoaded, setAuthLoaded] = React.useState(false);

  // navigate after 2 second
  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 2500);
  }, []);
  const forNavigateScreen = async () => {
    const Token = await AsyncStorage.getItem('TOKEN');
    console.log(Token, 'Tokennnnnnnnnnnnnnnnnnnnnn');
    if (Token) {
      props.navigation.replace(ScreensName.drawerNavigation);
    } else {
      props.navigation.replace(ScreensName.phoneScreen);
    }
  };

  useEffect(() => {
    if (authLoaded) {
      // props.navigation.replace(ScreensName.welcomeScreen);
      forNavigateScreen();
    }
  });
  return (
    <ImageBackground resizeMode="cover" source={imageName.bgDot} style={Styles.container}>
      <Image source={imageName.appLogo} style={Styles.imageMainee} />
    </ImageBackground>
  )
}

export default SplashScreen;