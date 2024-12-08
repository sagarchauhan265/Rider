import React, { useEffect, useState } from 'react';
import { View, Image, PermissionsAndroid, Platform, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { imageName } from "../constant/Images";

const CurrentLocationMap = () => {
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {

        const requestLocationPermission = async () => {
            if (Platform.OS === 'android') {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'This app needs access to your location.',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the location');
                    getCurrentLocation();
                } else {
                    console.log('Location permission denied');
                }
            } else {
                getCurrentLocation(); // For iOS, permissions are handled differently
            }
        };

        const getCurrentLocation = () => {
            Geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ latitude, longitude });
                    console.log("loc", latitude, longitude)
                },
                (error) => {
                    console.log('Error getting location: ', error);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        };

        requestLocationPermission();
    }, []);

    if (!currentLocation) {
        return null;
    }

    return (
        <View style={{}}>
            <MapView
            mapPadding={{ top: 250, right: 0, bottom: 0, left: 0 }}
                provider={PROVIDER_GOOGLE}
                style={{ height: '100%', width: '100%' }}
                // showsUserLocation={true}
                // showsMyLocationButton={true}
                initialRegion={{
                    latitude: currentLocation.latitude,
                    longitude: currentLocation.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={currentLocation}>
                    <Image source={imageName.greenDot} style={{ height: 30, width: 30 }} />
                </Marker>
            </MapView>
        </View>
    );
};

export default CurrentLocationMap;