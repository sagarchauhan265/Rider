import AsyncStorage from '@react-native-async-storage/async-storage';

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const getHeaders = async (isTokenRequired) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
 
  // const headers = {
  //   'Content-Type': 'application/json',
  // };

  if (isTokenRequired) {
    const token = await AsyncStorage.getItem('TOKEN');
    if (token) {
      console.log("Token",`${ token}`)
      const parseToken = JSON.parse(token)
      console.log("Token",`${parseToken}`)
            // headers["Authorization"] = `Bearer ${token}`;
      myHeaders.append("Authorization", `Bearer ${parseToken}`);
    }
  }
  return myHeaders;
};


export async function callApi(methodType, apiUrl, requestBody, isDelete = false) {
  let apiResponse;

  const reqOpts = {
    method: methodType,
    headers: await getHeaders(true),
    
  };
  console.log('header---',reqOpts);
  
  console.log("request header", reqOpts);
  if ([HTTP_METHODS.POST, HTTP_METHODS.PUT].includes(methodType)) {
    reqOpts.body = JSON.stringify(requestBody);
  }

  try {
    console.log('Request Options:', { apiUrl, reqOpts });
    const response = await fetch(apiUrl, reqOpts);
    const data = await response.json();

    apiResponse = {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    console.error('API call failed:', error);
    apiResponse = {
      error: error.message || 'An error occurred',
      statusCode: 500, // Consider using a more appropriate status code
    };
  }

  return apiResponse;
}




export async function callUploadApi(methodType, apiUrl, requestBody, isTokenRequired = false) {
  let apiResponse;

  const reqOpts = {
    method: methodType,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  };

  try {
    if (isTokenRequired) {
      const token = await AsyncStorage.getItem('TOKEN');
      if (token) {
        reqOpts.headers.Authorization = `Bearer ${token}`;
      }
    }

    if ([HTTP_METHODS.POST, HTTP_METHODS.PUT].includes(methodType)) {
      const formData = new FormData();
      Object.keys(requestBody).forEach(key => {
        formData.append(key, requestBody[key]);
      });
      reqOpts.body = formData;
    }

    console.log('Upload Request Options:', { apiUrl, reqOpts });
    const response = await fetch(apiUrl, reqOpts);
    const data = await response.json();

    apiResponse = {
      data,
      statusCode: response.status,
    };
  } catch (error) {
    console.error('Upload API call failed:', error);
    apiResponse = {
      error: error.message || 'An error occurred',
      statusCode: 500, // Consider using a more appropriate status code
    };
  }

  return apiResponse;
}