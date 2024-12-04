import React, { useEffect } from "react";
import { View, Text, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./PhoneStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import { sendOtpRequest, sendOtpFailure } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInputComponent from "../../component/phoneInputComponent/phoneInputComponent";
import { ShowProgressBar } from "../../utility/Utility";
import Toast from 'react-native-toast-message';

const PhoneScreen = (props) => {
  const [phone, setPhone] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [phoneapiData, setPhoneApiData] = React.useState('');
  const loginDa = useSelector(state => state.app.sendOtpData);
  const loadingSEND = useSelector(state => state.app.sendOtpLoading);
  const dispatch = useDispatch();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'OTP Sent!',
      text2: 'Please check and verify your otp',
    });
  };

  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Server Error!',
      text2: 'Something went wrong please try again!',
    });
  };

  useEffect(() => {
    if (loginDa) {
      // let person = JSON.parse(phoneapiData);
      console.log(loginDa, 'person');
      if (loginDa.response.data.code == 200) {
        props.navigation.navigate(ScreensName.otpScreen, { mobile: phone });
        showToast();
        // alert(loginDa.response.data.message);
      } else {
        showToastError();
        // alert(loginDa.response.data.message);
      }
      // props.navigation.navigate(ScreensName.otpScreen, { mobile: phone });
    }
  }, [loginDa]);


  const afterSubmit = async () => {
    if (phone === '') {
      setPhoneError(StringData.phoneReq);
    } else if (phone.length < 10) {
      setPhoneError('10 digit required');
    } else {
      setPhoneError('');
    }
    if (
      phone !== '' && phone.length == 10
    ) {
      const raw = ({
        "phone": "+91" + phone
      });
      dispatch(sendOtpRequest(raw));

      // props.navigation.navigate(ScreensName.otpScreen, { mobile: phone });
      // const myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");

      // const raw = JSON.stringify({
      //   "phone": "+918077411804"
      // });

      // const requestOptions = {
      //   method: "POST",
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: "follow"
      // };

      // fetch("http://35.154.192.153:8081/request-otp", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.error(error));
    }
  };


  return (
    <View style={Styles.container}>
      <ShowProgressBar isLoaderShow={loadingSEND} message={'Loading...'} />
      
      <ImageBackground
        style={{ height: '100%' }}
        source={imageName.bg} >
        <View style={Styles.containerInner}>
          <View style={Styles.headMain}>
            <Image source={imageName.appLogo} style={Styles.imageMainPhone} />
            <Icon
              name={'questioncircleo'}
              color={colorMain.whiteColor}
              size={25}
            />
          </View>

          <Text style={Styles.headingOne}>
            {StringData.whatPhoneNumber}
          </Text>
          <Text style={Styles.headingMini}>
            {StringData.createYourAcnt}
          </Text>
        </View>
        <View style={{
          flex: 1,
          backgroundColor: colorMain.whiteColor,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // position:'absolute'
        }}>
          <View style={Styles.containerInnerTwo}>
            <View style={{ flex: 0.25 }}>
              <Text style={Styles.headingTwo}>
                {StringData.enterPhoneNumber}
              </Text>
              {/* <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)} /> */}
              <PhoneInputComponent
                fieldname={StringData.phone}
                placename={StringData.phone}
                onChngText={text => setPhone(text)}
                vval={phone}
                validd={phoneError ? phoneError : ''}
                leftIconName={'cellphone'}
                keyboardType={'numeric'}
                maxLength={10}
              />
            </View>
            <View style={{ flex: 0.4 }} />
            {/* <Image source={imageName.girlTwo} style={Styles.imageMiddle} /> */}
            <View style={{ flex: 0.25 }}>
              <View style={{ marginBottom: 30, flexDirection: 'row', marginTop: '10%' }}>
                <Text style={Styles.remainText}>By continuing you agree to the</Text>
                <TouchableOpacity>
                  <Text style={Styles.termText}> T&C </Text>
                </TouchableOpacity>
                <Text style={Styles.remainText}>and </Text>
                <TouchableOpacity>
                  <Text style={Styles.termText}>Privacy Policy</Text>
                </TouchableOpacity>
              </View>

            
              <ButtonComponent onPress={afterSubmit} title={StringData.next} />
            </View>
          </View>
        </View>
        <Toast />
      </ImageBackground>

    </View>
  )
}

export default PhoneScreen;

