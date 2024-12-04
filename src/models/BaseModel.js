import { callApi, callUploadApi } from '../utility/Api';
import * as apiUrl from '../utility/ApiUrl';

export default class BaseModel {
  static sendOtp(requestBody) {
    return callApi('POST', apiUrl.SendOtp, requestBody);
  }

  static verifyOtp(requestBody) {
    return callApi('POST', apiUrl.VerifyOtp, requestBody);
  }
  static getProfile(requestBody) {
    return callApi('GET', apiUrl.GetProfile, requestBody);
  }
  static updateProfile(requestBody) {
    return callApi('POST', apiUrl.UpdateProfile, requestBody);
  }

  //////////////////// 
  static login(requestBody) {
    return callUploadApi('POST', apiUrl.Login, requestBody);
  }
  static emailExist(requestBody) {
    return callUploadApi('POST', apiUrl.EmailExist, requestBody);
  }
  static signUp(requestBody) {
    return callUploadApi('POST', apiUrl.Signup, requestBody);
  }
  static devotional(requestBody) {
    return callApi('GET', apiUrl.Devotional, requestBody, 'isDelete');
  }
  static detailDevotional(requestBody) {
    return callApi('GET', apiUrl.DetailDevotional, requestBody, 'isDelete');
  }
  static productList(requestBody) {
    return callApi('GET', apiUrl.ProductList, requestBody, 'isDelete');
  }
  static prayerWall(requestBody) {
    return callApi('GET', apiUrl.PrayerWall, requestBody, 'isDelete');
  }
  static getUserInfo(requestBody) {
    return callApi('GET', apiUrl.GetUserInfo, requestBody, true);
  }
  static postUserInfo(requestBody) {
    return callUploadApi('POST', apiUrl.PostUserInfo, requestBody, true);
  }
  static resetpassword(requestBody) {
    return callUploadApi('POST', apiUrl.resetPassword, requestBody, true);
  }
  static forgotPassword(requestBody) {
    return callUploadApi('POST', apiUrl.forgotPassword, requestBody);
  }
}
