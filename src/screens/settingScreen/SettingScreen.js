import React from "react";
import { View, Text } from 'react-native';

import Styles from "./SettingStyle";


const SettingScreen = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerInner}>
        <Text>Setting screensss</Text>
      </View>
    </View>
  )
}

export default SettingScreen;

