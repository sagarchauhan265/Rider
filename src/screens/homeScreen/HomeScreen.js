import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, PermissionsAndroid, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { colorMain } from "../../constant/Colors";
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./HomeStyle";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { imageName } from "../../constant/Images";
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';
import CurrentLocationMap from "../../component/CurrentLocationMap";

const HomeScreen = (props) => {
  const [address, setAddress] = useState('');
  const dataArry = [
    {
      id: 1,
      loc: 'Anand Cloth Shop',
      desc: 'Pocket 7, Block C, Rohini, Delhi, India',
    }, {
      id: 2,
      loc: 'New Friends Colony',
      desc: 'Panchvati enclave, Sector 5, Daulatpura, Gha...',
    }, {
      id: 3,
      loc: 'Lajpat Nagar Delhi',
      desc: 'Pocket 7, Block C, Rohini, Delhi, India',
    }, {
      id: 4,
      loc: 'Anand Cloth Shop',
      desc: 'Pocket 7, Block C, Rohini, Delhi, India',
    }, {
      id: 5,
      loc: 'New Friends Colony',
      desc: 'Panchvati enclave, Sector 5, Daulatpura, Gha...',
    },
  ];

  useEffect(() => {
    Geocoder.init("AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo"); // Initialize Geocoder

    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getAddressFromCoordinates(latitude, longitude);
      },
      (error) => {
        console.log('Error getting location: ', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const getAddressFromCoordinates = (latitude, longitude) => {
    Geocoder.from(latitude, longitude)
      .then(json => {
        const address = json.results[0].formatted_address;
        setAddress(address); // Set the address to state
      })
      .catch(error => console.warn(error));
  };




  return (
    <View style={Styles.container}>
      <View style={Styles.containerInner}>
         <CurrentLocationMap />
        <View style={Styles.milesTextUpper}>
          <View style={Styles.uprMains}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={Styles.menuIconMain}>
                <Icon
                  name={'menu'}
                  color={colorMain.pinkColor}
                  size={25}
                  onPress={() => props.navigation.navigate(ScreensName.menuScreen)}
                />
              </View>
              <View style={Styles.TopBtnMain}></View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate(ScreensName.takeAddressScreen)}
                style={Styles.currLocMain}>
                <Text numberOfLines={1} ellipsizeMode="tail" style={Styles.textMains}>{address}</Text>
              </TouchableOpacity>
            </View>
            <Icons
              name={'location-on'}
              color={colorMain.pinkColor}
              size={25}
            />
          </View>
        </View>
       
        <View>
          <View style={Styles.milesTextMain}>
            <TouchableOpacity 
             onPress={() => props.navigation.navigate(ScreensName.takeAddressScreen)}
            style={Styles.wherGoingOuter}>
              <Icon
                name={'magnify'}
                color={colorMain.blackColor}
                size={25}
              />
              <View style={Styles.whereGoingmain}>
                <Text style={{ color: colorMain.blackColor }}>{StringData.whereGoing}</Text>
              </View>
            </TouchableOpacity>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              style={{ padding: 10, }}
            >

              {dataArry && dataArry.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={Styles.lwrBtn}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Icons
                        name={'location-on'}
                        color={colorMain.pinkColor}
                        size={25}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text style={Styles.listhead}>
                          {item.loc}
                        </Text>
                        <Text style={Styles.listTwo}>
                          {item.desc}
                        </Text>
                      </View>
                    </View>
                    <Icon
                      name={'cards-heart-outline'}
                      color={colorMain.brownColor}
                      size={20}
                    />
                  </TouchableOpacity>
                )
              })}

              {/* <Image source={imageName.appLogo} style={Styles.imageMain} /> */}
            </ScrollView>
            <View style={Styles.belowOuterMain}>
              <View style={Styles.belowMains}>
                <Text style={Styles.bottomtext}>
                  {StringData.explore}
                </Text>
                <View style={Styles.exploreMain}>
                  <TouchableOpacity>
                    <Text style={Styles.listTwo}>
                      {StringData.viewAll}
                    </Text>
                  </TouchableOpacity>
                  <Icons
                    name={'arrow-forward-ios'}
                    color={colorMain.pinkColor}
                    size={12}
                  />
                </View>
              </View>
              <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={Styles.mainIcons}>
                  <Image resizeMode="contain" style={Styles.btmIcon} source={imageName.pinkBike} />
                  <Text style={Styles.bottomtext}>{StringData.pinkBike}</Text>
                </View>
                <View style={Styles.mainIcons}>
                  <Image resizeMode="contain" style={Styles.btmIcon} source={imageName.motorByke} />
                  <Text style={Styles.bottomtext}>{StringData.bike}</Text>
                </View>
                <View style={Styles.mainIcons}>
                  <Image resizeMode="contain" style={Styles.btmIcon} source={imageName.pinkAuto} />
                  <Text style={Styles.bottomtext}>{StringData.auto}</Text>
                </View>
                <View style={Styles.mainIcons}>
                  <Image resizeMode="contain" style={Styles.btmIcon} source={imageName.pinkCar} />
                  <Text style={Styles.bottomtext}>{StringData.car}</Text>
                </View>
                <View style={Styles.mainIcons}>
                  <Image resizeMode="contain" style={Styles.btmIcon} source={imageName.parcelIcon} />
                  <Text style={Styles.bottomtext}>{StringData.parcel}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default HomeScreen;

