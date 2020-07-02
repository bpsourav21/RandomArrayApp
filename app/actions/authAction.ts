import _ from 'underscore';

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
