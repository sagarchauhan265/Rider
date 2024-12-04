import React from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import TextInputComponent from "../../component/textInputComponent/TextInputComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./ConfirmPasswordStyle";

const ConfirmPasswordScreen = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [fcmTokenn, setFcmToken] = React.useState('');
  const [icEye, setIcEye] = React.useState('eye-with-line');
  const [showPassword, setShowPassword] = React.useState(true);
  const [emailValid, setEmailValid] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState('');
  const [isemailFocused, setisemailFocused] = React.useState(false);
  const [ispassFocused, setispassFocused] = React.useState(false);

  // for change password eye icon
  const changePwdType = () => {
    if (showPassword) {
      setIcEye('eye');
      setShowPassword(false);
    } else {
      setIcEye('eye-with-line');
      setShowPassword(true);
    }
  };
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
    if (password === '') {
      setPasswordValid(true);
      setPasswordError(StringData.passwordReq);
      setispassFocused(true);
    } else {
      setPasswordValid(false);
      setispassFocused(false);
    }
    if (
      password !== '' &&
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
        <TextInputComponent
          fieldname={StringData.password}
          placename={StringData.password}
          vval={password}
          txtentry={showPassword}
          iconSize={18}
          onChngText={text => setPassword(text)}
          rightIconName={icEye}
          iconClick={changePwdType}
          validd={passwordValid ? passwordError : ''}
          borderColor={ispassFocused ? 'red' : '#C0C0C0'}
          leftIconName={'key-variant'}
        />
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate(ScreenNames.forgotPasswordScreen)
          }
          style={Styles.forgotMain}>
          <Text style={Styles.forgotText}>{StringData.forgotPassword}</Text>
        </TouchableOpacity>
        <ButtonComponent onPress={afterSubmit} title={StringData.login} />

        <View style={Styles.belowMain}>
          <Text style={Styles.textBelow}>
            {StringData.dontAcct}
          </Text>
          <TouchableOpacity
          onPress={()=>props.navigation.navigate(ScreensName.signupScreen)}
          >
            <Text style={Styles.textBelow}>{StringData.signUp}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ConfirmPasswordScreen;

