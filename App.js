import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { colorMain } from "./src/constant/Colors";
import Auth from "./src/navigation/Auth";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";

export default App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1, backgroundColor: colorMain.pinkColor }} >
        <Auth />
      </SafeAreaView>
    </Provider>
  )
}