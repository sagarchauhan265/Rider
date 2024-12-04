import {
  SET_CONNECTION_STATUS,
  LOGIN_REQUEST,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SEND_OTP_REQUEST,
  SEND_OTP_STARTED,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  VERIFY_REQUEST,
  VERIFY_STARTED,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_STARTED,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_STARTED,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from '../constants/actionTypes';
import { createAction } from '../util/reduxUtil';

export const setConnectionStatusRequest = status =>
  createAction(SET_CONNECTION_STATUS, { status });

// login action method
export const loginRequest = requestBody =>
  createAction(LOGIN_REQUEST, { requestBody });
export const loginStarted = () => createAction(LOGIN_STARTED);
export const loginSuccess = response => createAction(LOGIN_SUCCESS, { response });
export const loginFailure = () => createAction(LOGIN_FAILURE);

// send otp action method
export const sendOtpRequest = requestBody =>
  createAction(SEND_OTP_REQUEST, { requestBody });
export const sendOtpStarted = () => createAction(SEND_OTP_STARTED);
export const sendOtpSuccess = response => createAction(SEND_OTP_SUCCESS, { response });
export const sendOtpFailure = () => createAction(SEND_OTP_FAILURE);

// verify otp action method
export const verifyRequest = requestBody =>
  createAction(VERIFY_REQUEST, { requestBody });
export const verifyStarted = () => createAction(VERIFY_STARTED);
export const verifySuccess = response => createAction(VERIFY_SUCCESS, { response });
export const verifyFailure = () => createAction(VERIFY_FAILURE);

// get profile action method
export const getProfileRequest = requestBody => 
  createAction(GET_PROFILE_REQUEST, { requestBody });
export const getProfileStarted = () => createAction(GET_PROFILE_STARTED);
export const getProfileSuccess = response => createAction(GET_PROFILE_SUCCESS, { response });
export const getProfileFailure = () => createAction(GET_PROFILE_FAILURE);

// get profile action method
export const updateProfileRequest = requestBody =>
  createAction(UPDATE_PROFILE_REQUEST, { requestBody });
export const updateProfileStarted = () => createAction(UPDATE_PROFILE_STARTED);
export const updateProfileSuccess = response => createAction(UPDATE_PROFILE_SUCCESS, { response });
export const updateProfileFailure = () => createAction(UPDATE_PROFILE_FAILURE);

