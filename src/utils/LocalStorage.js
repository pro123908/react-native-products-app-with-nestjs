import AsyncStorage from '@react-native-community/async-storage';

export const handleGoogleUserInLocalStorage = (googleUser = null) => {
  if (localStorage.getItem('GOOGLE_USER')) {
    return JSON.parse(localStorage.getItem('GOOGLE_USER'));
  } else if (googleUser) {
    localStorage.setItem('GOOGLE_USER', JSON.stringify(googleUser));
  }
};

export const handleAccessTokenInLocalStorage = (key, token) => {
  if (token) {
    return localStorage.setItem(key, JSON.stringify(token));
  } else if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const handleUserInLocalStorage = (key, data) => {
  if (data) {
    return localStorage.setItem(key, JSON.stringify(data));
  } else if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const clearLocalStorage = (key) => {
  if (key) localStorage.removeItem(key);
};

export const handleInAndOutFromLocalStorage = async (key, data) => {
  let result;
  try {
    if (data) {
      result = await AsyncStorage.setItem(key, JSON.stringify(data));
    } else if (AsyncStorage.getItem(key)) {
      result = await JSON.parse(AsyncStorage.getItem(key));
    }

    return result;
  } catch (error) {
    console.log('AsyncStorage => ', error);
  }
};
