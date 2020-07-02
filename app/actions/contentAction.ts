import _ from 'underscore';

export const GET_TYPE_REQUEST = 'GET_TYPE_REQUEST';
export const GET_TYPE_FAILURE = 'GET_TYPE_FAILURE';
export const GET_TYPE_SUCCESS = 'GET_TYPE_SUCCESS';

export function getOrderDetails(orderId: number) {
  return (dispatch: any) => {
    dispatch({
      type: GET_TYPE_REQUEST,
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

export const INCREMENT = 'INCREMENT';
export function increment() {
  return (dispatch: any) => {
    dispatch({
      type: INCREMENT,
      payload: {value: new Date().toString()},
    });
  };
}
