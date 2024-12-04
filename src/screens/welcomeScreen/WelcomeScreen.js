import React from "react";
import { View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./WelcomeStyle";

const WelcomeScreen = (props) => {



  return (
    <View style={Styles.container}>
      <View style={Styles.containerInner}>
      <Image source={imageName.appLogo} style={Styles.imageMain} />
      <Image source={imageName.girlTwo} style={Styles.imageMiddle} />
      <ButtonComponent

        onPress={() => props.navigation.navigate(ScreensName.phoneScreen)} title={StringData.getStarted} />
   </View>
    </View>
  )
}

export default WelcomeScreen;

