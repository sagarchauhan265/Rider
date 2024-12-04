import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image, ImageBackground ,KeyboardAvoidingView,ScrollView} from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./OtpStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import { OtpInput } from "react-native-otp-entry";
import { verifyRequest, sendOtpFailure,getProfileRequest } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { imageName } from "../../constant/Images";
import DeviceInfo from 'react-native-device-info';


const OtpScreen = (props) => {
  const [otp, setOtp] = React.useState('');
  const [otpError, setOtpError] = React.useState('');
  const [OtpApiData, setOtpApiData] = React.useState('');
  const getProfileData = useSelector(state => state.app.getProfileData?.response?.data?.data?.first_name);
  const verifyOtpData = useSelector(state => state.app.verifyOtpData);
  // const loadingSEND = useSelector(state => state.app.sendOtpLoading);
  const dispatch = useDispatch();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'OTP Verfied Successfully!',
      text2: 'Please update your profile',
    });
  };

  const showToastError = () => {
    Toast.show({
      type: 'error',
      text1: 'Server Error!',
      text2: 'Something went wrong please try again!',
    });
  };

  const getMacAddress = async () => {
    try {
      const macAddress = await DeviceInfo.getMacAddress();
      console.log('MAC Address:', macAddress);
      return macAddress;
    } catch (error) {
      console.error('Failed to get MAC Address:', error);
      return null;
    }
  };



  const storeData = async (value) => {

    console.log(value, 'valuevvvvvv');
    const jsonValue = JSON.stringify(value);
    // alert('mmmm');
    await AsyncStorage.setItem('TOKEN', jsonValue);
    showToast();
   if(getProfileData){
    props.navigation.navigate(ScreensName.drawerNavigation);
   } else{
    props.navigation.navigate(ScreensName.drawerNavigation);
   }
   

  };

  useEffect(() => {
    if (verifyOtpData) {
      // let verifyData = JSON.parse(OtpApiData);
      console.log(verifyOtpData?.response?.data, 'person....');
      if (verifyOtpData?.response?.data?.code == 200) {
        storeData(verifyOtpData.response.data.data.token);
        // (async () => {
        //   if (verifyOtpData.response.data.data.token) {
        //     await AsyncStorage.setItem(
        //       AsyncStorage.TOKEN,
        //       verifyOtpData.response.data.data.token,
        //     );
        //     alert(verifyOtpData.response.data.data.token);
        //     props.navigation.navigate(ScreensName.drawerNavigation);
        //   }
        // })();

      } else {
        showToastError();
        // alert(verifyOtpData.response.data.message);
      }
      // props.navigation.navigate(ScreensName.otpScreen, { mobile: phone });
    }
  }, [verifyOtpData]);

  const afterSubmit = async () => {
    const macId = await DeviceInfo.getUniqueId();
    console.log('MAC Address:', macId);
    if (otp === '') {
      setOtpError(StringData.otpReq);
    } else if (otp.length < 6) {
      setOtpError('6 digit required');
    } else {
      setOtpError('');
    }
    if (
      otp !== '' && otp.length == 6
    ) {

      const raw = ({
        "phone": "+91" + props.route.params.mobile,
        "otp": otp,
        "device_id": macId,

      });
      // props.navigation.navigate(ScreensName.profileScreen);

    dispatch(verifyRequest(raw));
      // const myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");
      // const raw = JSON.stringify({
      //   "phone": "+91" + props.route.params.mobile,
      //   "otp": otp,
      // });
      // const requestOptions = {
      //   method: "POST",
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: "follow"
      // };

      // fetch("https://mypinkrides.com:8081/verify-otp", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => setOtpApiData(result))
      //   .catch((error) => console.error(error));

      // alert('valid done');
    }
  };


  return (

    // <View style={Styles.container}>
    //   <ImageBackground
    //     style={{ height: '100%' }}
    //     source={imageName.bg} >
    //     <View style={Styles.containerInner}>
    //       <View style={Styles.headMain}>

    //         <View />
    //         <Icon
    //           name={'questioncircleo'}
    //           color={colorMain.whiteColor}
    //           size={25}
    //         />
    //       </View>

    //       <Text style={Styles.headingOne}>
    //         {StringData.verifyPhn}
    //       </Text>
    //       <Text style={Styles.headingMini}>
    //         {StringData.codeSentTo}{' '}{props.route.params.mobile}
    //       </Text>
    //     </View>
    //     <View style={{
    //       marginTop: 20,
    //       flex: 1,
    //       backgroundColor: colorMain.whiteColor,
    //       borderTopLeftRadius: 20,
    //       borderTopRightRadius: 20,
    //       // position:'absolute'
    //     }}>
    //       <View style={Styles.containerInnerTwo}>
    //         <View style={{ flex: 0.25, paddingTop: 30 }}>

    //           {/* <OtpInput numberOfDigits={6} onTextChange={(text) => console.log(text)} /> */}
    //           <OtpInput
    //             numberOfDigits={6}
    //             onTextChange={(text) => setOtp(text)}
    //             focusColor="pink" 

    //             selectionColor={colorMain.pinkColor}
    //             theme={{
    //               pinCodeTextStyle: Styles.pinCodeText,
    //               filledPinCodeContainerStyle: colorMain.pinkColor,
    //             }}
    //           />
    //           <Text style={Styles.errortext}>{otpError}</Text>
    //           <View style={{ marginTop: '10%' }}>
    //             <Text style={{ alignSelf: 'center', color:'black'}}>{StringData.didntReceiveCode}</Text>
    //             <TouchableOpacity onPress={()=> {props.navigation.navigate(ScreensName.phoneScreen)}}>
    //               <Text style={Styles.termText}> {StringData.resendCode}</Text>
    //             </TouchableOpacity>
    //           </View>
    //         </View>
    //         <View style={{ flex: 0.5 }} />
    //         {/* <Image source={imageName.girlTwo} style={Styles.imageMiddle} /> */}
    //         <View style={{ flex: 0.15 }}>
    //           <ButtonComponent onPress={afterSubmit} title={StringData.verifyOpt} />
    //         </View>
    //       </View>
    //     </View>
    //     <Toast />
    //   </ImageBackground>

    // </View>

    <View style={Styles.container}>
      <ImageBackground
        style={{ height: '100%' }}
        source={imageName.bg}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={Styles.containerInner}>
              <View style={Styles.headMain}>
                <View />
                <Icon
                  name={'questioncircleo'}
                  color={colorMain.whiteColor}
                  size={25}
                />
              </View>

              <Text style={Styles.headingOne}>
                {StringData.verifyPhn}
              </Text>
              <Text style={Styles.headingMini}>
                {StringData.codeSentTo}{' '}{props.route.params.mobile}
              </Text>
            </View>

            <View style={{
              marginTop: 20,
              flex: 1,
              backgroundColor: colorMain.whiteColor,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
              <View style={Styles.containerInnerTwo}>
                <View style={{ flex: 0.25, paddingTop: 30 }}>
                  <OtpInput
                    numberOfDigits={6}
                    onTextChange={(text) => setOtp(text)}
                    focusColor="pink"
                    selectionColor={colorMain.pinkColor}
                    theme={{
                      pinCodeTextStyle: Styles.pinCodeText,
                      filledPinCodeContainerStyle: colorMain.pinkColor,
                    }}
                  />
                  <Text style={Styles.errortext}>{otpError}</Text>
                  <View style={{ marginTop: '10%' }}>
                    <Text style={{ alignSelf: 'center', color: 'black' }}>{StringData.didntReceiveCode}</Text>
                    <TouchableOpacity onPress={() => { props.navigation.navigate(ScreensName.phoneScreen) }}>
                      <Text style={Styles.termText}> {StringData.resendCode}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{ flex: 0.5 }} />
                <View style={{ flex: 0.15 }}>
                  <ButtonComponent onPress={afterSubmit} title={StringData.verifyOpt} />
                </View>
              </View>
            </View>
            <Toast />
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>


  )
}

export default OtpScreen;

