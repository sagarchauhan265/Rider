import {Alert, Modal, View, Text, ActivityIndicator} from 'react-native';
// import moment from 'moment';
// import NavigationService from '../Navigation/navigationService';
import * as AsyncStorage from './AsyncStorage';
import React from 'react';

// export function groupedDays(messages) {
//   return messages.reduce((acc, el, i) => {
//     const messageDay = moment(el.created_at).format('YYYY-MM-DD');
//     if (acc[messageDay]) {
//       return {...acc, [messageDay]: acc[messageDay].concat([el])};
//     }
//     return {...acc, [messageDay]: [el]};
//   }, {});
// }

// export function generateItems(messages) {
//   const days = groupedDays(messages);
//   const sortedDays = Object.keys(days).sort(
//     (x, y) => moment(y, 'YYYY-MM-DD').unix() - moment(x, 'YYYY-MM-DD').unix(),
//   );
//   const items = sortedDays.reduce((acc, date) => {
//     const sortedMessages = days[date].sort(
//       (x, y) => new Date(y.created_at) - new Date(x.created_at),
//     );
//     return acc.concat([...sortedMessages, {type: 'day', date, id: date}]);
//   }, []);
//   return items;
// }
// show message alert
export function showMessage(isError = false, message) {
  Alert.alert(
    isError ? 'Alert' : 'Success',
    message,
    [{text: 'Ok', style: 'cancel'}],
    {cancelable: false},
  );
}

export const logout = async () => {
  await AsyncStorage.removeItem(AsyncStorage.TOKEN);
  await AsyncStorage.removeItem(AsyncStorage.USERDETAIL);
  await AsyncStorage.removeItem(AsyncStorage.USERTYPE);
  await AsyncStorage.removeItem(AsyncStorage.CUSTOMERID);
  await AsyncStorage.removeItem(AsyncStorage.UID);

  // NavigationService.navigate('Login');
};

//Convert Phone Number In UK formate
// export function phoneConvert(numbers) {
//   var cleaned = ('' + numbers).replace(/\D/g, '');
//   var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
//   if (match) {
//     var intlCode = match[1] ? '+1 ' : '',
//       number = [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join(
//         '',
//       );
//     return number;
//   }
// }

export const pickerList = async pickerItem => {
  return new Promise((resolve, reject) => {
    let array = [];
    pickerItem.forEach(data => {
      array.push({
        value: data.customerRelativesId,
        label: data.firstName + ' ( ' + data.title + ' ) ',
      });
    });
    return resolve(array);
  });
};

export const pickerSubList = async (pickerItem, key) => {
  return new Promise((resolve, reject) => {
    let array = [];
    if (key === 'state') {
      array.push({value: 0, label: 'Select State'});
      pickerItem.forEach(data => {
        array.push({value: data.id, label: data.stateName});
      });
    } else if (key === 'team') {
      array.push({value: 0, label: 'Select Team'});
      pickerItem.forEach(data => {
        array.push({value: data.id, label: data.teamName});
      });
    } else if (key === 'position') {
      pickerItem.forEach(data => {
        array.push({value: data.id, label: data.position});
      });
    } else if (key === 'sub') {
      array.push({value: 0, label: 'Select Plan'});
      pickerItem.forEach(data => {
        array.push({value: data.planId, label: data.name});
      });
    } else if (key === 'category') {
      array.push({value: 0, label: 'Select Category'});
      pickerItem.forEach(data => {
        array.push({value: data.id, label: data.name});
      });
    } else if (key === 'phase') {
      array.push({value: 0, label: 'Select Phase'});
      pickerItem.forEach(data => {
        array.push({value: data.id, label: data.name});
      });
    } else if (key === 'association') {
      array.push({value: 'NA', label: 'Select Association'});
      pickerItem.forEach(data => {
        array.push({value: data.userName, label: data.associationName});
      });
    } else {
      pickerItem.forEach(data => {
        array.push({value: data.planId, label: data.name});
      });
    }
    return resolve(array);
  });
};

const clone = obj => Object.assign({}, obj);
export const renameKey = (object, key, newKey) => {
  const clonedObj = clone(object);
  const targetKey = clonedObj[key];
  delete clonedObj[key];
  clonedObj[newKey] = targetKey;
  return clonedObj;
};

export const currentTime = () => {
  var current = new Date();
  var hours = current.getHours();
  var minutes = current.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const zipRegex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
export const phoneRegex = /^\d{10}$/;
export const numberRegex = /^\d+$/;

export const ShowProgressBar = props => {
  const {isLoaderShow, message} = props;
  return (
    <>
      <Modal transparent={true} onTouchCancel={false} visible={isLoaderShow}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: '#00000055',
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#ffff',
              marginStart: 20,
              marginEnd: 20,
              borderRadius: 5,
            }}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
              <ActivityIndicator
                animating={true}
                color={'#0190c8'}
                size={'large'}
                style={{
                  margin: 15,
                }}
              />
              <Text style={{color: 'black'}}>{message}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
