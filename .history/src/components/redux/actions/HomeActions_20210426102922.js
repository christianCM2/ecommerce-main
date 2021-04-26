import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_COUNT_PRODUCTS,
  GET_COUNT_PRODUCTS_SUCCESS,
  GET_COUNT_PRODUCTS_ERROR,
} from "../types/HomeTypes";

export const fetchGetProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
export const fetchGetProductsSuccess = (result) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    value: result,
  };
};
export const fetchGetProductsError = () => {
  return {
    type: GET_PRODUCTS_ERROR,
  };
};
export const getProductsList = (data) => {
 
  return async (dispatch) => {
    dispatch(fetchGetProducts());
    dispatch(fetchGetProductsSuccess(data));
  };
};














export const fetchGetCartProducts = () => {
  return {
    type: GET_COUNT_PRODUCTS,
  };
};
export const fetchGetCartProductsSuccess = (result) => {
  return {
    type: GET_COUNT_PRODUCTS_SUCCESS,
    value: result,
  };
};
export const fetchGetCartProductsError = () => {
  return {
    type: GET_COUNT_PRODUCTS_ERROR,
  };
};
export const getProductsCart = (data) => {
 
  return async (dispatch) => {
    dispatch(fetchGetCartProducts());
    dispatch(fetchGetCartProductsSuccess(data));
  };
};
