import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./EmailStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import TextInputComponent from "../../component/textInputComponent/TextInputComponent";
import { OtpInput } from "react-native-otp-entry";

const EmailScreen = (props) => {
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
      props.navigation.navigate(ScreensName.otpScreen);
      // alert('valid done');

    }
  };


  return (
    <View style={Styles.container}>
      <View style={Styles.containerInner}>
        <View style={Styles.headMain}>
          <Image source={imageName.appLogo} style={Styles.imageMain} />
          <View style={Styles.roundHelp}>
            <Icon
              name={'questioncircleo'}
              color={colorMain.blueColor}
              size={20}
            // style={Styles.iconStyle}
            />
            <Text>Help</Text>
          </View>
        </View>
        <Text style={Styles.headingOne}>
          {StringData.whatEmail}
        </Text>
        <Text style={Styles.headingTwo}>
          {StringData.enterEmail}
        </Text>
        {/* <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)} /> */}
        <TextInputComponent
          fieldname={StringData.email}
          placename={StringData.email}
          onChngText={text => setEmail(text)}
          vval={email}
          validd={emailValid ? emailError : ''}
          borderColor={isemailFocused ? 'red' : '#C0C0C0'}
          leftIconName={'email'}
        />
        {/* <Image source={imageName.girlTwo} style={Styles.imageMiddle} /> */}

        <View style={{ flexDirection: 'row', marginTop: '10%' }}>
          <Text>By continuing you agree to the</Text>
          <TouchableOpacity>
            <Text style={Styles.termText}> T&C </Text>
          </TouchableOpacity>
          <Text>and </Text>
          <TouchableOpacity>
            <Text style={Styles.termText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
        <ButtonComponent onPress={afterSubmit} title={StringData.sendOtp} />
        <TouchableOpacity
          onPress={() => props.navigation.navigate(ScreensName.phoneScreen)}
        >
          <Text style={Styles.textBelow}>{StringData.loginPhone}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EmailScreen;

