import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_COUNT_PRODUCTS,
  GET_COUNT_PRODUCTS_SUCCESS,
  GET_COUNT_PRODUCTS_ERROR,
} from "../types/HomeTypes";

const initialState = {
  products: [],
  cartproducts: [],
  error: false,
  loading: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.value,
        loading: false,
      };
    case GET_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_COUNT_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_COUNT_PRODUCTS_SUCCESS:
      return {
        ...state,
        cartproducts: action.value,
        loading: false,
      };
    case GET_COUNT_PRODUCTS_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};
export default products;
