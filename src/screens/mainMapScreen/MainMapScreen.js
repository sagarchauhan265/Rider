import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Alert, TextInput } from "../../../node_modules/react-native/types/index";
import { colorMain } from "../../constant/Colors";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./MainMapStyle";
import BottomSheet from 'react-native-simple-bottom-sheet';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import { imageName } from "../../constant/Images";
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import { useRoute } from "@react-navigation/native"
import MapViewDirections from 'react-native-maps-directions';
import Icons from 'react-native-vector-icons/AntDesign';
import CashAndOffer from "../../component/CashAndOffer";
import RideFareList from "../../component/RideFareList";
import AsyncStorage from '@react-native-async-storage/async-storage';
const MainMapScreen = (props, navigation) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [Farelist, setFarelist] = useState(null);
  const route = useRoute();
  const origin = { latitude: route.params.iniLatt, longitude: route.params.iniLongg };
  const destination = { latitude: route.params.destLatt, longitude: route.params.destLongg };


  /// call fare api

  const fetchData = async (originLat, originLong, destinationLat, destinationLong, isSurge = false, isNight = false) => {
    const myHeaders = new Headers();

    const token = await AsyncStorage.getItem('TOKEN');
    if (token) {
      console.log("Token", `${token}`)
      const parseToken = JSON.parse(token);
      myHeaders.append("Authorization", `Bearer ${parseToken}`);
    }
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const url = `http://mypinkrides.com:8083/vehicle-categories-with-fares?origin_lat=${originLat}&origin_long=${originLong}&destination_lat=${destinationLat}&destination_long=${destinationLong}&is_surge=${isSurge}&is_night=${isNight}`;

    try {
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("result", result.data);
      setFarelist(result.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (route.params.iniLatt) {
      fetchData(route.params.iniLatt, route.params.iniLongg, route.params.destLatt, route.params.destLongg);
    }

  }, []);

  const handleRideSelect = (selectedRide) => {
    // Alert.alert("Selected Ride", `You selected: ${selectedRide.id} - ${selectedRide.total_fare}`);
    // console.log("Selected Ride Data:", selectedRide);
    setSelectedItem(selectedRide);
    setSelectedId(selectedRide.id)
};

/// Goto payment page
const gotoPayment = () => {
  props.navigation.navigate(ScreensName.PaymentPage, {selectedItem});
}

  return (
    <View style={Styles.container}>
      <MapView
        // customMapStyle={mapStyle}
        // provider={PROVIDER_GOOGLE}
        style={{ flex: 0.5, width: '100%' }}
        initialRegion={{
          latitude: route.params.iniLatt,
          longitude: route.params.iniLongg,
          latitudeDelta: 0.088,
          longitudeDelta: 0.088,
        }}
        mapType="standard"
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeWidth={5}
          strokeColor={colorMain.blueColor}
          apikey={'API Key'}
        />
        <Marker coordinate={origin}>
          <Image source={imageName.greenDot} style={{ height: 16, width: 16 }} />
        </Marker>
        <Marker coordinate={destination}>
          <Image source={imageName.redDot} style={{ height: 16, width: 16 }} />
        </Marker>

      </MapView>
      <View style={Styles.milesTextMain}>
      <RideFareList rides={Farelist}  onRideSelect ={handleRideSelect}  selectedId={selectedId} />
        
        <ButtonComponent title={'Book Ride'}
          onPress={() => gotoPayment()} />
      </View>
      <View style={{
        height: 120,
        position: "absolute",
        right: 0,
        left: 0,
        top: 0,
        // justifyContent: "center",
      }}>
        <View style={{
          justifyContent: 'center', alignItems: 'center',
          marginTop: 10,
          marginLeft: 10,
          height: 40, width: 40, borderRadius: 20, backgroundColor: colorMain.pinkColor
        }}>
          <Icons
            name={'arrowleft'}
            color={colorMain.whiteColor}
            size={30}
            onPress={() => props.navigation.goBack()}
          // style={Styles.iconStyle}
          />
        </View>
      </View>
    </View>
  )
}





export default MainMapScreen;

