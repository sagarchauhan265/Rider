import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from 'react-native';
import ButtonComponent from "../../component/buttonComponent/ButtonComponent";
import Icons from 'react-native-vector-icons/MaterialIcons';
import { ScreensName, StringData } from "../../constant/StringC";
import Styles from "./TakeAddressStyle";
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import { OtpInput } from "react-native-otp-entry";
import { verifyRequest, sendOtpFailure } from '../../Redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import TextInputComponent from "../../component/textInputComponent/TextInputComponent";
import { onGetProfileRequest } from "../../Redux/sagas/index";
import { imageName } from "../../constant/Images";
import Geocoder from 'react-native-geocoding';
import Geolocation from 'react-native-geolocation-service';


const TakeAddressScreen = (props) => {
    // const [pickup, setPickup] = useState('');
    const [droploc, setDropLoc] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchDestKeyword, setSearchDestKeyword] = useState('');
    const [searchDestResults, setSearchDestResults] = useState([]);
    const [isShowingResults, setisShowingResults] = useState(false);
    const [isShowingDestResults, setIsShowingDestResults] = useState(false);
    const [iniLat, setiniLat] = useState('');
    const [iniLong, setiniLong] = useState('');
    const [iniPlaceId, setiniPlaceId] = useState('');
    const [destPlaceId, setdestPlaceId] = useState('');
    const [destLat, setdestLat] = useState('');
    const [destLong, setdestLong] = useState('');

    // search initial location
    const searchLocation = async (text) => {
        // this.setState({ searchKeyword: text });
        setSearchKeyword(text);
        if (searchKeyword.length > 2) {
            try {
                const reqOpts = {
                    method: "POST",
                };
                // let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchKeyword}&key=AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo`;
                let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo&input=${searchKeyword}`;
                const response = await fetch(url, reqOpts);
                const data = await response.json();
                console.log("errrrrrrrrr", data);
                setSearchResults(data.predictions);
                setisShowingResults(true);
                // this.setState({
                //     searchResults: data.predictions,
                //     isShowingResults: true,
                // });
            } catch (error) {
                console.log("errrrrrrrrr", error);
                alert(error);
            }
        }
    };
    // serach destination location
    // search first destination location
    const searchDestLocation = async (text) => {
        // this.setState({ searchDestKeyword: text });
        setSearchDestKeyword(text);
        if (searchDestKeyword.length > 2) {
            try {
                const reqOpts = {
                    method: "POST",
                };
                // let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyAKVuQDG3sj4-eTfJjcIDeBrI3LYaM9PCE&input=${this.state.searchDestKeyword}`;
                let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo&input=${searchDestKeyword}`;

                const response = await fetch(url, reqOpts);
                const data = await response.json();
                setSearchDestResults(data.predictions);
                setIsShowingDestResults(true);
                // this.setState({
                //   searchDestResults: data.predictions,
                //   isShowingDestinationResult: true,
                // });
            } catch (error) {
                alert(error);
            }
        }
    };
    const setAddress = async (item) => {
        setSearchKeyword(item.description);
        setisShowingResults(false);
        setiniPlaceId(item.place_id);
    };
    const setDestAddress = async (item) => {
        setSearchDestKeyword(item.description);
        setIsShowingDestResults(false);
        setdestPlaceId(item.place_id);
    };

    // get dest location
    useEffect(() => {
        // const unsubscribe = props.navigation.addListener('focus', () => {
        async function fetchMyAPI() {
            // try {
            const reqOpts = {
                method: "POST",
            };
            let url = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo&placeid=${destPlaceId}`;
            const response = await fetch(url, reqOpts);
            const data = await response.json();
            setdestLat(data?.result?.geometry?.location.lat);
            setdestLong(data?.result?.geometry?.location.lng);

        }
        fetchMyAPI();
    }, [destPlaceId, searchDestKeyword, isShowingDestResults]);


    // get ini location

    useEffect(() => {
        // const unsubscribe = props.navigation.addListener('focus', () => {
        async function fetchMyAPI() {
            // try {
            const reqOpts = {
                method: "POST",
            };
            let url = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo&placeid=${iniPlaceId}`;
            const response = await fetch(url, reqOpts);
            const data = await response.json();
            setiniLat(data?.result?.geometry?.location.lat);
            setiniLong(data?.result?.geometry?.location.lng);
        }
        fetchMyAPI();
    }, [iniPlaceId, searchKeyword, isShowingResults]);


    // get destination location
    // loacationDestDetail = async (placeId) => {
    //     if (placeId) {
    //         try {
    //             const reqOpts = {
    //                 method: "POST",
    //             };
    //             let url = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyCuSvci8lirkNBrHMr_fK3jX80gZRL0CKw&placeid=${placeId}`;
    //             const response = await fetch(url, reqOpts);
    //             const data = await response.json();
    //             this.setState({
    //                 destLat: data.result.geometry.location.lat,
    //                 destLog: data.result.geometry.location.lng,
    //             });
    //             console.log(
    //                 "initiallll locationnnnnn------------------->",
    //                 this.state.destLat,
    //                 this.state.destLog
    //             );
    //         } catch (error) {
    //             alert(error);
    //         }
    //     }
    // };



    const OnGo = () => {
        console.log("sent data", iniLat, iniLong, destLat, destLong);
        if (iniLat && iniLong && destLat && destLong) {
            props.navigation.navigate(ScreensName.mainMapScreen, {
                iniLatt: parseFloat(iniLat),
                iniLongg: parseFloat(iniLong),
                destLatt: parseFloat(destLat),
                destLongg: parseFloat(destLong),
                sourcename: searchKeyword,
                destiname: searchDestKeyword,
            });
        }
        setSearchKeyword('');
        setSearchDestKeyword('');
    }

    useEffect(() => {
        if (iniLat && iniLong && destLat && destLong) {

            // Coordinates for two points
            const origin = { latitude: iniLat, longitude: iniLong };
            const destination = { latitude: destLat, longitude: destLong };

            // Google Maps API key
            const apiKey = 'AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo';

            // Construct the API URL
            const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${apiKey}`;

            // Fetch data from Google Maps Directions API
            const fetchDistance = async () => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();

                    if (data.routes.length) {
                        // Distance in meters
                        const distanceMeters = data.routes[0].legs[0].distance.value;
                        // Convert to kilometers
                        // setDistance(distanceMeters / 1000);
                        console.log('111111=====>', distanceMeters / 1000);
                    } else {
                        console.warn("No route found");
                    }
                } catch (error) {
                    console.error("Error fetching directions", error);
                }
            };

            fetchDistance();
        }
    }, [iniLat, iniLong, destLat, destLong]);

    const fetchMyAPI = async (initaddres) => {
        // try {
        const reqOpts = {
            method: "POST",
        };
        let url = `https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo&placeid=${initaddres}`;
        const response = await fetch(url, reqOpts);
        const data = await response.json();
        console.log("current loc source", data);
        setiniLat(data?.result?.geometry?.location.lat);
        setiniLong(data?.result?.geometry?.location.lng);
    }

    const GetCurrenAndSet = () => {
        Alert.alert("hi")
        Geocoder.init("AIzaSyBptxrRpSLKE2pYCk5Lqr9fg7g7rrFWPOo"); // Initialize Geocoder

        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                Geocoder.from(latitude, longitude)
                    .then(json => {
                        const address = json.results[0].formatted_address;
                        const placeId = json.results[0].place_id;
                        console.log("place id", json.results[0].place_id)
                        setSearchKeyword(address); // Set the address to state
                        fetchMyAPI(placeId)
                    })
                    .catch(error => console.warn(error));
            },
            (error) => {
                console.log('Error getting location: ', error);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );

    }


    const swapValues = () => {
        // Swap the values of input1 and input2
        const temp = searchKeyword;
        setSearchKeyword(searchDestKeyword);
        setSearchDestKeyword(temp);
        const tempSource = iniLat;
        setiniLat(destLat)
        setdestLat(tempSource)
        const tempDest = iniLong;
        setiniLong(destLong)
        setdestLong(tempDest)
        //  iniLat, iniLong,destLat,destLong
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.containerInner}>
                <View style={Styles.headMain}>
                    <View style={{ flexDirection: 'row', }}>
                        <Icon
                            name={'arrowleft'}
                            color={colorMain.pinkColor}
                            size={30}
                            onPress={() => props.navigation.goBack()}
                        // style={Styles.iconStyle}
                        />
                        {/* <Text style={Styles.headingOne}>
                            {'Back'}
                        </Text> */}
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'row',
                            width: '100%',
                            marginTop: 10,
                        }}>
                            <TouchableOpacity
                                onPress={() => GetCurrenAndSet()}
                                style={{
                                    alignItems: 'center', justifyContent: 'center', marginRight: 10,
                                    borderRadius: 5,
                                    height: 40, width: 40, backgroundColor: colorMain.pinkColor
                                }}>
                                <Image source={imageName.iniPoint} />
                            </TouchableOpacity>
                            <View style={{ width: '75%', height: 40 }}>
                                <TextInputComponent
                                    fieldname={StringData.phone}
                                    placename={StringData.pickLocation}
                                    onChngText={text => searchLocation(text)}
                                    vval={searchKeyword}
                                    // validd={phoneError ? phoneError : ''}
                                    // leftIconName={'dot'}
                                    leftRedPin={'location-pin'}
                                />

                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'row',
                            width: '100%',
                            marginTop: 10,
                        }}>
                            <View style={{
                                alignItems: 'center', justifyContent: 'center', marginRight: 10,
                                height: 40, width: 40, backgroundColor: colorMain.pinkColor,
                                borderRadius: 5
                            }}>
                                <Icons
                                    name={'location-on'}
                                    color={colorMain.whiteColor}
                                    size={22}
                                />
                            </View>
                            <View style={{ width: '75%', height: 40 }}>
                                <TextInputComponent
                                    fieldname={StringData.phone}
                                    placename={StringData.dropLocation}
                                    onChngText={text => searchDestLocation(text)}
                                    vval={searchDestKeyword}
                                    leftGreenPin={'location-pin'}
                                // validd={phoneError ? phoneError : ''}
                                // leftIconName={'dor'}

                                />

                            </View>
                        </View>
                    </View>
                    <View style={{ marginLeft: -20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => swapValues()}
                            style={{
                                alignItems: 'center', justifyContent: 'center',
                                borderRadius: 5,
                                height: 40, width: 40, backgroundColor: colorMain.pinkColor
                            }}>
                            <Image source={imageName.circleSwap} />
                        </TouchableOpacity>

                    </View>
                </View>
                {isShowingResults && (
                    <View style={Styles.flatListPick}>
                        <FlatList
                            data={searchResults}
                            initialNumToRender={5}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => setAddress(item)}
                                        style={Styles.lwrBtn}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icons
                                                name={'location-on'}
                                                color={colorMain.pinkColor}
                                                size={25}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={Styles.listhead}>
                                                    {item.description}
                                                </Text>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.place_id}
                        //   style={styles.searchResultsContainer}
                        />
                    </View>
                )}
                {isShowingDestResults && (
                    <View style={Styles.flatListMainTwo}>
                        <FlatList
                            data={searchDestResults}
                            initialNumToRender={5}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => setDestAddress(item)}
                                        style={Styles.lwrBtn}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Icons
                                                name={'location-on'}
                                                color={colorMain.pinkColor}
                                                size={25}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={Styles.listhead}>
                                                    {item.description}
                                                </Text>

                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                            keyExtractor={(item) => item.place_id}
                        //   style={styles.searchResultsContainer}
                        />
                    </View>
                )}
                {/* <ButtonComponent title={'Go'} onPress={() => props.navigation.navigate(ScreensName.mainMapScreen)} /> */}
                <ButtonComponent title={'Go'} onPress={() => OnGo()} />
            </View>
        </View>
    )
}

export default TakeAddressScreen;

