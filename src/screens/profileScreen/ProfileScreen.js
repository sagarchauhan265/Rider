import React, { useEffect, useState } from "react";
import { View, Button, PermissionsAndroid, TouchableOpacity, Text, Image, Modal, Alert, ScrollView, StyleSheet, SafeAreaView, TextInput,Dimensions } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import TextInputComponent from "../../component/textInputComponent/TextInputComponent";
import { imageName } from "../../constant/Images";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./ProfileStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import { getProfileRequest, updateProfileRequest } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import DateTimePicker from "react-native-modal-datetime-picker";
import { ShowProgressBar } from "../../utility/Utility";
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButtonGroup from '../../component/RadioButtonGroup';
const { width, height } = Dimensions.get('window');
import Toast from 'react-native-toast-message';


export default function ProfileScreen(props) {
  const dispatch = useDispatch();
  const getProfileData = useSelector(state => state.app.getProfileData);
  const updateProfileData = useSelector(state => state.app.updateProfileData);
 console.log("getProfileData",getProfileData?.response);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  useEffect(()=>{
    if(getProfileData?.response.statusCode==200){
      setFirstName(getProfileData?.response?.data?.data?.first_name);
      setLastName(getProfileData?.response?.data?.data?.last_name);
      setDateOfBirth(getProfileData?.response?.data?.data?.dob);
      setGender(getProfileData?.response?.data?.data?.gender);
    }
  },[getProfileData])


  /// get profile data from api
 useEffect(() => {
  const fetchProfileData = async () => {
    try {
      dispatch(getProfileRequest());
    } catch (error) {
      console.error("Error fetching profile data:", error);
      Alert.alert("Error fetching profile data");
    }
  };

  fetchProfileData();
}, []);


  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  // validation 
  const handleSubmit = () => {
    if (!gender) {
        Alert.alert("Validation Error", "Please select a gender");
        return;
    }

    // Validate first name
    if (!firstName.trim()) {
        Alert.alert("Validation Error", "First name is required.");
        return;
    } else if (!/^[a-zA-Z]+$/.test(firstName)) {
        Alert.alert("Validation Error", "First name should only contain alphabetic characters.");
        return;
    }

    // Validate last name
    if (!lastName.trim()) {
        Alert.alert("Validation Error", "Last name is required.");
        return;
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
        Alert.alert("Validation Error", "Last name should only contain alphabetic characters.");
        return;
    }

    // Validate date of birth
    if (!dateOfBirth) {
        Alert.alert("Validation Error", "Date of birth is required.");
        return;
    } else {
        const dob = new Date(dateOfBirth);
        const today = new Date();
        if (isNaN(dob.getTime())) {
            Alert.alert("Validation Error", "Date of birth must be a valid date.");
            return;
        } else if (dob >= today) {
            Alert.alert("Validation Error", "Date of birth must be in the past.");
            return;
        }
    }

    // If all validations pass, proceed with form submission
    const profileData = {
        "first_name": firstName,
        "last_name": lastName,
        "dob": dateOfBirth,
        "gender": gender
    };

    dispatch(updateProfileRequest(profileData));
    Alert.alert("Success", "Form submitted successfully");
    // Reset the form or handle submission as needed
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name={'arrowleft'} color={colorMain.pinkColor} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile Info</Text>
        <TouchableOpacity>
          <Icon name={'questioncircleo'} color={colorMain.pinkColor} size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image source={imageName.appLogo} style={styles.profileImage} />
        <TouchableOpacity>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={styles.input}
            value={firstName}
            editable={true}
            onChangeText={(d) => setFirstName(d)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            editable={true}
            onChangeText={(d) => setLastName(d)}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={dateOfBirth}
            editable={true}
            onChangeText={(d) => setDateOfBirth(d)}
          />
        </View>
        <RadioButtonGroup
          options={genderOptions}
          label="Gender"
          onSelect={handleGenderSelect}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  editText: {
    color: 'blue',
  },
  form: {
    flex: 1,
    marginTop:20,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    color: 'gray',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    color:'black',
    backgroundColor: '#f9f9f9',
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioInput: {
    marginRight: 8,
  },
  submitButton: {
    backgroundColor: '#eb6587',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop:10,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});