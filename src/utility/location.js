import React, {Component} from 'react';
import {Platform} from 'react-native';
import RNLocation from 'react-native-location';
var locationSubscription;

export default Location = {
  _onLocationCheckPermission: () => {
    return new Promise((resolve, reject) => {
      RNLocation.checkPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
        },
      }).then(granted => resolve(granted));
    });
  },

  _onLocationRequestPermission: () => {
    return new Promise((resolve, reject) => {
      RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
          rationale: {
            title: 'Location permission',
            message: 'Doortax want to access your location',
            buttonNegative: 'Cancel',
            buttonPositive: 'Ok',
          },
        },
      }).then(granted => {
        resolve(granted);
      });
    });
  },

  LocationUpdateUnsubscribe: () => {
    locationSubscription && locationSubscription();
  },

  CurrentLocation: (onSuccess, onFail) => {
    if (Platform.OS === 'android') {
      RNLocation.configure({
        desiredAccuracy: {
          android: 'highAccuracy',
        },
        // Android only
        androidProvider: 'auto',
      });
    } else {
      RNLocation.configure({
        desiredAccuracy: {
          ios: 'best',
        },
      });
    }

    Location._onLocationCheckPermission().then(permission => {
      if (permission) {
        Location.GetLatestLocation(onSuccess, onFail);
      } else {
        Location._onLocationRequestPermission().then(reqPerResult => {
          Location.GetLatestLocation(onSuccess, onFail);
        });
      }
    });
  },

  GetLatestLocation: (onSuccess, onFail) => {
    RNLocation.getLatestLocation({timeout: 6000})
      .then(latestLocation => {
        if (latestLocation != null) {
          onSuccess(latestLocation);
        } else {
          onFail('err');
        }
      })
      .catch(err => {
        onFail(err);
      });
  },
};
