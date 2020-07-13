import _ from 'underscore';
import AsyncStorage from '@react-native-community/async-storage';

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_FAILURE = 'GET_LOGIN_FAILURE';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';

export function login() {
  return (dispatch: any) => {
    dispatch({
      type: GET_LOGIN_SUCCESS,
      payload: {
        isAuthenticated: true,
      },
    });
    // CDVNService.getOrderState(orderId)
    //   .then(res => {
    //     dispatch({ type: GET_TYPE_SUCCESS, payload: res });
    //   })
    //   .catch(res => {
    //     console.log(res);
    //     dispatch({
    //       type: GET_TYPE_FAILURE
    //     });
    //   });
  };
}

export const GET_LOGOUT_REQUEST = 'GET_LOGOUT_REQUEST';
export const GET_LOGOUT_FAILURE = 'GET_LOGOUT_FAILURE';
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS';

export function logout() {
  return (dispatch: any) => {
    dispatch({
      type: GET_LOGOUT_SUCCESS,
      payload: {
        isAuthenticated: false,
      },
    });
    // CDVNService.getOrderState(orderId)
    //   .then(res => {
    //     dispatch({ type: GET_TYPE_SUCCESS, payload: res });
    //   })
    //   .catch(res => {
    //     console.log(res);
    //     dispatch({
    //       type: GET_TYPE_FAILURE
    //     });
    //   });
  };
}

export const GET_TOKEN_REQUEST = 'GET_TOKEN_REQUEST';
export const GET_TOKEN_FAILURE = 'GET_TOKEN_FAILURE';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';

export function getStorageData() {
  return (dispatch: any) => {
    dispatch({
      type: GET_TOKEN_REQUEST,
    });

    AsyncStorage.getItem('phoneNumber')
      .then((res) => {
        dispatch({
          type: GET_TOKEN_SUCCESS,
          payload: {value: res},
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: GET_TOKEN_FAILURE,
        });
      });
  };
}

export const SET_TOKEN_REQUEST = 'SET_TOKEN_REQUEST';
export const SET_TOKEN_FAILURE = 'SET_TOKEN_FAILURE';
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';

export function setStorageData(value: any) {
  return (dispatch: any) => {
    dispatch({
      type: SET_TOKEN_REQUEST,
    });

    AsyncStorage.setItem('phoneNumber', value)
      .then((res) => {
        dispatch({
          type: SET_TOKEN_SUCCESS,
          payload: {value: res === null ? '' : res},
        });
      })
      .catch((e) => {
        console.log(e);
        dispatch({
          type: SET_TOKEN_FAILURE,
          payload: {value: ''},
        });
      });
  };
}
