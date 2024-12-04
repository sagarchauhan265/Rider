import AsyncStorage from '@react-native-async-storage/async-storage';

export const TOKEN = 'TOKEN';


// Method for set the item on storage
export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('setItem', error);
  }
};

// Method for get the Item on storage
export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    console.log('getItem', error);
  }
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (exception) {
    console.log('removeItem', exception);
    return false;
  }
};

export const cleanStorage = async key => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (exception) {
    console.log('removeItem', exception);
    return false;
  }
};
