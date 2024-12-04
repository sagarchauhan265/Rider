import { put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import {
  GET_PROFILE_REQUEST,
  SEND_OTP_REQUEST,
  UPDATE_PROFILE_REQUEST,
  VERIFY_REQUEST,
} from '../constants/actionTypes';
import BaseModel from '../../models/BaseModel';
import { showMessage } from '../../utility/Utility';
import {
  getProfileFailure,
  getProfileStarted,
  getProfileSuccess,
  sendOtpFailure,
  sendOtpStarted,
  sendOtpSuccess,
  updateProfileFailure,
  updateProfileStarted,
  updateProfileSuccess,
  verifyFailure,
  verifyStarted,
  verifySuccess
} from '../actions/index';



// Saga method for send otp request
export function* onSendOtpRequest(action) {
  try {
    yield put(sendOtpStarted());
    console.log('Login stated Test123');
    const responseObj = yield BaseModel.sendOtp(action.requestBody);

    console.log(responseObj, '<====responseObj login');
    if (isValidResponseWithoutAlert(responseObj, false)) {
      yield put(sendOtpSuccess(responseObj));
    } else {
      yield put(sendOtpFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(sendOtpFailure());
  }
}

// Saga method for Verify otp request
export function* onVerifyOtpRequest(action) {
  try {
    yield put(verifyStarted());
    console.log('Login stated Test123');
    const responseObj = yield BaseModel.verifyOtp(action.requestBody);

    console.log(responseObj, '<====responseObj login');
    if (isValidResponseWithoutAlert(responseObj, false)) {
      yield put(verifySuccess(responseObj));
    } else {
      yield put(verifyFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(verifyFailure());
  }
}

// Saga method for  get profile request
export function* onGetProfileRequest(action) {
  try {
    yield put(getProfileStarted());
    console.log('Profile get start');
    const responseObj = yield BaseModel.getProfile(action.requestBody);

    console.log( 'Profile Get info>>>>>>> ',responseObj);
    if (isValidResponseWithoutAlert(responseObj, false)) {
      yield put(getProfileSuccess(responseObj));
    } else {
      yield put(getProfileFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(getProfileFailure());
  }
}

// Saga method for  get profile request
export function* onUpdateProfileRequest(action) {
  try {
    yield put(updateProfileStarted());
    
    const responseObj = yield BaseModel.updateProfile(action.requestBody);

    console.log('responseObj Update Profile', responseObj,);
    if (isValidResponseWithoutAlert(responseObj, false)) {
      yield put(updateProfileSuccess(responseObj));
    } else {
      yield put(updateProfileFailure());
    }
  } catch (error) {
    console.error(error);
    yield put(updateProfileFailure());
  }
}

function isValidResponseWithoutAlert(responseObj) {
  if (responseObj && responseObj.data) {
    if (!responseObj.data.error) {
      console.log('ff1');
      return true;
    } else {
      console.log('ff2');
      return false;
    }
  } else {
    setTimeout(() => {
      showMessage(true, 'Internal Server Error');
    }, 100);
    return false;
  }
}

export function* actionWatcher() {
  console.log('start generator');
  // yield takeLatest(LOGIN_REQUEST, onLoginRequest);
  yield takeLatest(SEND_OTP_REQUEST, onSendOtpRequest);
  yield takeLatest(VERIFY_REQUEST, onVerifyOtpRequest);
  yield takeLatest(GET_PROFILE_REQUEST, onGetProfileRequest);
  yield takeLatest(UPDATE_PROFILE_REQUEST, onUpdateProfileRequest);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
