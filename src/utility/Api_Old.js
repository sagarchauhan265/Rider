/* eslint-disable prettier/prettier */

// import * as AsyncStorage from './AsyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';
export async function callApi(methodType, apiUrl, requestBody, isDelete) {
  //console.log(t, "<====tttt")
  let apiResponse;
  const reqOpts = {
    method: methodType,
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const token = await AsyncStorage.getItem('TOKEN');
    // console.log('GET token------------>', token);
    if (token) {
      // reqOpts.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    if (methodType === 'POST' || methodType === 'PUT') {
      //reqOpts.headers['Content-Type'] = 'multipart/form-data'
      reqOpts.body = JSON.stringify(requestBody);
      // console.log('reqOpts:------------>', reqOpts);
      // console.log('API:------------>', methodType, apiUrl, requestBody);
    }

    // if (isDelete === 'isDelete') {
    //   apiUrl = apiUrl + requestBody;
    // }


    console.log('reqOpts:------------>', apiUrl,reqOpts);
    const response = await fetch(apiUrl,reqOpts);
    // console.log('response:------------>', response);
    const data = await response.json();
    console.log('API data:------------->', data);
    apiResponse = {
      data,
      statusCode: response.status,
    };
    // console.log('apiResponse:-------------->', apiResponse);
  } catch (error) {
    apiResponse = {
      error,
      statusCode: error,
    };
    console.log('callApiError:---------->', error);
  }
  // console.log('response', apiResponse);
  return apiResponse;
}
export async function callUploadApi(methodType, apiUrl, requestBody, isTokent) {
  let apiResponse;
  const reqOpts = {
    method: methodType,
    headers: {
      'content-type': 'multipart/form-data',
      accept: 'application/json',
    },
  };
  try {
    const token = await AsyncStorage.getItem(AsyncStorage.TOKEN);
    if (token && isTokent) {
      reqOpts.headers.Authorization = `Bearer ${token}`;
    }
    if (methodType === 'POST' || methodType === 'PUT') {
      var formData = new FormData();
      // formData.append('firstName', "userName");
      // formData.append('lastName', "test005");
      // formData.append('phoneNumber', "9136709958");
      // formData.append('email', "abn_test005@yopmail.com");
      // formData.append('vehicleType',"4 wheeler")
      // formData.append('testDrive',"final")
      // formData.append('stock',1003)
      // formData.append('tradeMake',"May 03")
      // formData.append('tradeYear',2021)
      // formData.append('tradeModel',"Trisla")
      // formData.append('notes',"test")
      // formData.append('status',"sold")
      // formData.append('hasTrade',1)
      // formData.append('sourceId',1)
      reqOpts.body = formData;
    }
    // console.log('apiUrl, requestBody:------------------>', {apiUrl, requestBody});

    let headerData = {
      // Authorization: `Bearer ${token}`,
      'Content-type': 'multipart/form-data',
      Accept: 'application/json',
    };
    if (isTokent) {
      headerData.Authorization = `Bearer ${token}`;
    }
    const response = await fetch(apiUrl, {
      body: requestBody,
      method: 'post',
      headers: headerData,
    });
    const data = await response.json();
    apiResponse = {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    console.log('callApi', error);
  }
  // console.log('response', apiResponse);
  return apiResponse;
}
