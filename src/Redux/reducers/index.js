import {
  SET_CONNECTION_STATUS,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SEND_OTP_STARTED,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  VERIFY_STARTED,
  VERIFY_SUCCESS,
  VERIFY_FAILURE,
  GET_PROFILE_STARTED,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_STARTED,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,

} from '../constants/actionTypes';
import Immutable from 'seamless-immutable';

import { createReducer } from '../util/reduxUtil';

export const initialState = Immutable.from({
  isConnected: false,
  loading: false,
  app: {
    loading: false,
    loginLoading: false,
    loginData: null,
    sendOtpData: null,
    sendOtpLoading: false,
    verifyOtpData: null,
    verifyOtpLoading: false,
    getProfileData: null,
    getProfileLoading: false,
    updateProfileData: null,
    updateProfileLoading: false,
  },

});

export const onSetConnectionStatus = (state, status) => {
  return state.setIn(['isConnected'], status.status);
};

// Login receduers
export const onLoginStarted = state =>
  state.merge({
    app: state.app.merge({
      loginData: initialState.app.loginData,
      loginLoading: true,
    }),
  });
export const onLoginSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      loginData: response,
      loginLoading: false,
    }),
  });
export const onLoginFailure = state =>
  state.merge({
    app: state.app.merge({
      loginData: initialState.app.loginData,
      loginLoading: false,
    }),
  });

// send otp reducer 

export const onSendOtpStarted = state =>
  state.merge({
    app: state.app.merge({
      sendOtpData: initialState.app.sendOtpData,
      sendOtpLoading: true,
    }),
  });
export const onSendOtpSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      sendOtpData: response,
      sendOtpLoading: false,
    }),
  });
export const onSendOtpFailure = state =>
  state.merge({
    app: state.app.merge({
      sendOtpData: initialState.app.sendOtpData,
      sendOtpLoading: false,
    }),
  });

  // verify otp reducer 

export const onVerifyOtpStarted = state =>
state.merge({
  app: state.app.merge({
    verifyOtpData: initialState.app.verifyOtpData,
    verifyOtpLoading: true,
  }),
});
export const onVerifyOtpSuccess = (state, response) =>
state.merge({
  app: state.app.merge({
    verifyOtpData: response,
    verifyOtpLoading: false,
  }),
});
export const onVerifyOtpFailure = state =>
state.merge({
  app: state.app.merge({
    verifyOtpData: initialState.app.verifyOtpData,
    verifyOtpLoading: false,
  }),
});


  //  get profile reducer 

  export const onGetProfileStarted = state =>
  state.merge({
    app: state.app.merge({
      getProfileData: initialState.app.getProfileData,
      getProfileLoading: true,
    }),
  });
  export const onGetProfileSuccess = (state, response) =>
  state.merge({
    app: state.app.merge({
      getProfileData: response,
      getProfileLoading: false,
    }),
  });
  export const onGetProfileFailure = state =>
  state.merge({
    app: state.app.merge({
      getProfileData: initialState.app.getProfileData,
      getProfileLoading: false,
    }),
  });

    //  update profile reducer 

    export const onUpdateProfileStarted = state =>
    state.merge({
      app: state.app.merge({
        updateProfileData: initialState.app.updateProfileData,
        updateProfileLoading: true,
      }),
    });
    export const onUpdateProfileSuccess = (state, response) =>
    state.merge({
      app: state.app.merge({
        updateProfileData: response,
        updateProfileLoading: false,
      }),
    });
    export const onUpdateProfileFailure = state =>
    state.merge({
      app: state.app.merge({
        updateProfileData: initialState.app.updateProfileData,
        updateProfileLoading: false,
      }),
    });

const appReducer = createReducer(initialState, {
  [SET_CONNECTION_STATUS]: onSetConnectionStatus,
  [LOGIN_STARTED]: onLoginStarted,
  [LOGIN_SUCCESS]: onLoginSuccess,
  [LOGIN_FAILURE]: onLoginFailure,
  [SEND_OTP_STARTED]: onSendOtpStarted,
  [SEND_OTP_SUCCESS]: onSendOtpSuccess,
  [SEND_OTP_FAILURE]: onSendOtpFailure,
  [VERIFY_STARTED]: onVerifyOtpStarted,
  [VERIFY_SUCCESS]: onVerifyOtpSuccess,
  [VERIFY_FAILURE]: onVerifyOtpFailure,
  [GET_PROFILE_STARTED]: onGetProfileStarted,
  [GET_PROFILE_SUCCESS]: onGetProfileSuccess,
  [GET_PROFILE_FAILURE]: onGetProfileFailure,
  [UPDATE_PROFILE_STARTED]: onUpdateProfileStarted,
  [UPDATE_PROFILE_SUCCESS]: onUpdateProfileSuccess,
  [UPDATE_PROFILE_FAILURE]: onUpdateProfileFailure,

});

export default appReducer;
