import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Alert, TextInput } from "../../../node_modules/react-native/types/index";
import { colorMain } from "../../constant/Colors";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./MainMapStyle";
import BottomSheet from 'react-native-simple-bottom-sheet';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline, Callout } from 'react-native-maps';
import { imageName } from "../../constant/Images";
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import { useRoute } from "@react-navigation/native"
import MapViewDirections from 'react-native-maps-directions';
import Icons from 'react-native-vector-icons/AntDesign';
import CashAndOffer from "../../component/CashAndOffer";
import RideFareList from "../../component/RideFareList";
import AsyncStorage from '@react-native-async-storage/async-storage';


import Geolocation from 'react-native-geolocation-service';

const MainMapScreen = (props, navigation) => {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [Farelist, setFarelist] = useState(null);
  const route = useRoute();
  const origin = { latitude: route.params.iniLatt, longitude: route.params.iniLongg };
  const destination = { latitude: route.params.destLatt, longitude: route.params.destLongg };
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = React.createRef();
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
    props.navigation.navigate(ScreensName.PaymentPage, { selectedItem });
  }




  return (
    <View style={Styles.container}>
      <MapView
        mapPadding={{ top: 200, right: 0, bottom: 0, left: 0 }}
        apikey={'AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo'}
        showsUserLocation={true}
        showsMyLocationButton={true}
        // showsIndoors={true}
        // zoomControlEnabled={true}
        // zoomEnabled={true}
        // zoomTapEnabled={true}
        // showsScale={true}
        // showsBuildings={true}
        // showsCompass={true}
        customMapStyle={Styles.mapStyle}
        provider={PROVIDER_GOOGLE}
        style={{ flex: 0.5, width: '100%' }}
        initialRegion={{
          latitude: route.params.iniLatt,
          longitude: route.params.iniLongg,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="standard"
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          strokeWidth={5}
          strokeColor={colorMain.blueColor}
          apikey={'AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo'}
        />
        <Marker coordinate={origin}>
          <Image source={imageName.greenDot} style={{ height: 16, width: 16 }} />

          <Callout tooltip style={{ backgroundColor: 'white', minWidth: 100, maxWidth: 400 }}><Text style={{ color: 'black' }}>{route?.params?.sourcename?.substring(0, 20)}</Text></Callout>
        </Marker>
        <Marker coordinate={destination}>
          <Image source={imageName.redDot} style={{ height: 16, width: 16 }} />
          <Callout tooltip style={{ backgroundColor: 'white', minWidth: 100, maxWidth: 400 }}><Text style={{ color: 'black' }}>{route?.params?.destiname?.substring(0, 20)}</Text></Callout>
        </Marker>

      </MapView>


      <View style={Styles.milesTextMain}>
        <RideFareList rides={Farelist} onRideSelect={handleRideSelect} selectedId={selectedId} />
        <View style={Styles.offerContainer}>
          {/* <FontAwesome name="gift" size={16} color="pink" /> */}
          <Text style={Styles.offerText}>Get 50% Off on First Ride</Text>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity style={Styles.button}>
            <Image resizeMode='contain' source={require('../../assets/images/money.png')} />
            <Text style={Styles.buttonText}>Cash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.button}>
            <Image resizeMode='contain' source={require('../../assets/images/discount.png')} />
            <Text style={Styles.buttonText}>Offer</Text>
          </TouchableOpacity>
        </View>
        <ButtonComponent title={'Book Ride'}
          onPress={() => gotoPayment()} />
      </View>
      <View style={{
        height: 100,
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

