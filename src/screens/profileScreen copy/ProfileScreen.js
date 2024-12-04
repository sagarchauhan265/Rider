import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import TextInputComponent from "../../component/textInputComponent/TextInputComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./ProfileStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import { getProfileRequest, updateProfileRequest } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

const ProfileScreen = (props) => {
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [fcmTokenn, setFcmToken] = React.useState('');

  const [emailValid, setEmailValid] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [fullnameValid, setfullnameValid] = React.useState(false);
  const [fullnameError, setfullnameError] = React.useState('');
  const [isemailFocused, setisemailFocused] = React.useState(false);
  const [isfullnameFocused, setisfullnameFocused] = React.useState(false);

  const getProfileData = useSelector(state => state.app.getProfileData);
  const updateProfileData = useSelector(state => state.app.updateProfileData);
  // const loadingSEND = useSelector(state => state.app.sendOtpLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    callgetProfile();
  }, [null])

  useEffect(() => {
    if (getProfileData) {
      if (getProfileData.response.data.code == 200) {
        setEmail(getProfileData.response.data.data.email);
        setPhone(getProfileData.response.data.data.phone);
        setFullname(getProfileData.response.data.data.name);
      }
      console.log('getProfileData', getProfileData.response.data);
    }
  }, [getProfileData])

  useEffect(() => {
    if (updateProfileData) {
      // if (getProfileData.response.data.code == 200) {
      //   setEmail(getProfileData.response.data.data.email);
      //   setPhone(getProfileData.response.data.data.phone);
      //   setFullname(getProfileData.response.data.data.name);
      // }
      console.log('getProfileData', updateProfileData.response.data);
    }
  }, [updateProfileData])

  const callgetProfile = () => {
    dispatch(getProfileRequest());
  }

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
    if (phone === '') {

      setPhoneError(StringData.phoneReq);

    } else {
      setPhoneError('');
    }
    if (fullname === '') {
      setfullnameValid(true);
      setfullnameError(StringData.fullnameReq);
      setisfullnameFocused(true);
    } else {
      setfullnameValid(false);
      setisfullnameFocused(false);
    }
    if (
      fullname !== '' &&
      phone !== '' &&
      email !== '' &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
      ) !== false
    ) {
      const raw = {
        "name": fullname,
        "email": email,
        "phone": phone
      }
      dispatch(updateProfileRequest(raw));
      // Alert.alert('valid done');

    }
  };

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.headMain}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{ flexDirection: 'row', }}>
          <Icon
            name={'arrowleft'}
            color={colorMain.pinkColor}
            size={25}
          />

        </TouchableOpacity>
        <View style={Styles.roundHelp}>
          <Icon
            name={'questioncircleo'}
            color={colorMain.pinkColor}
            size={20}
          />
        </View>
      </View>
      {/* <Text style={{ fontSize: 26, marginTop: 15, marginLeft: 10, fontWeight: 'bold' }}>Profile</Text> */}
      <View style={Styles.innerOne}>
        <Image source={imageName.appLogo} style={Styles.imageMain} />
        <Text style={Styles.textBelow}>
          {getProfileData?.response?.data?.data?.phone}
        </Text>
      </View>
      <View style={Styles.innerTwo}>
        {/* <Text style={Styles.mainHead}>{StringData.signUp}</Text> */}
        <TextInputComponent
          fieldname={StringData.fullname}
          placename={StringData.fullname}
          onChngText={text => setFullname(text)}
          vval={fullname}
          validd={fullnameValid ? fullnameError : ''}
          borderColor={isfullnameFocused ? 'red' : '#C0C0C0'}
          leftIconName={'account'}
        />
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
          fieldname={StringData.phone}
          placename={StringData.phone}
          onChngText={text => setPhone(text)}
          vval={phone}
          validd={phoneError ? phoneError : ''}
          leftIconName={'cellphone'}
          keyboardType={'numeric'}
        />
        <ButtonComponent onPress={afterSubmit} title={StringData.save} />

      </View>
    </ScrollView>
  )
}

export default ProfileScreen;

