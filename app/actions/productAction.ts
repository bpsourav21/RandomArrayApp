import _ from 'underscore';
import {ProductDto} from '../interfaces/Product';

export const GET_ALL_PRODUCT_REQUEST = 'GET_ALL_PRODUCT_REQUEST';
export const GET_ALL_PRODUCT_FAILURE = 'GET_ALL_PRODUCT_FAILURE';
export const GET_ALL_PRODUCT_SUCCESS = 'GET_ALL_PRODUCT_SUCCESS';

const arr: ProductDto[] = [
  {
    ImgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    Name: 'CHECK PRINT SHIRT',
    Unit: '1 pc',
    Price: 110,
  },
  {
    ImgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    Name: 'GLORIA HIGH LOGO SNEAKER',
    Unit: '1 pc',
    Price: 91,
  },
  {
    ImgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    Name: 'CATE RIGID BAG',
    Unit: '1 pc',
    Price: 94.5,
  },
  {
    ImgUrl:
      'http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0',
    Name: 'GUESS CONNECT WATCH',
    Unit: '1 pc',
    Price: 438.9,
  },
  {
    ImgUrl:
      'https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0',
    Name: "'70s RETRO GLAM KEFIAH",
    Unit: '1 pc',
    Price: 20,
  },
];

export function getAllProduct() {
  return (dispatch: any) => {
    dispatch({
      type: GET_ALL_PRODUCT_REQUEST,
    });
    // CDVNService.getAllProduct(orderId)
    //   .then((res) => {
    dispatch({type: GET_ALL_PRODUCT_SUCCESS, payload: {value: arr}});
    //   })
    //   .catch((res) => {
    //     console.log(res);
    //     dispatch({
    //       type: GET_ALL_PRODUCT_FAILURE,
    //     });
    //   });
  };
}
