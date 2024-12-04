import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import TextInputComponent from "../../component/textInputComponent/TextInputComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./ForgotPasswordStyle";

const ForgotPasswordScreen = (props) => {
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [isemailFocused, setisemailFocused] = React.useState(false);

  const afterSubmit = () => {
    if (email === '') {
      setEmailValid(true);
      setEmailError(StringData.emailReq);
      setisemailFocused(true);
    } else if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      ) === false
    ) {
      setEmailValid(true);
      setEmailError(StringData.validEmailRequired);
      setisemailFocused(true);
    } else {
      setEmailValid(false);
      setisemailFocused(false);
    }

    if (

      email !== '' &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      ) !== false
    ) {
      Alert.alert('valid done');

    }
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.innerOne}>
        <Image source={imageName.appLogo} style={Styles.imageMain} />
      </View>
      <View style={Styles.innerTwo}>
        <Text style={Styles.mainHead}>{StringData.login}</Text>
        <TextInputComponent
          fieldname={StringData.email}
          placename={StringData.email}
          onChngText={text => setEmail(text)}
          vval={email}
          validd={emailValid ? emailError : ''}
          borderColor={isemailFocused ? 'red' : '#C0C0C0'}
          leftIconName={'email'}
        />


        <ButtonComponent onPress={afterSubmit} title={StringData.login} />


      </View>
    </View>
  )
}

export default ForgotPasswordScreen;

