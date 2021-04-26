import {
    GET_LOGIN,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    LOGOUT
  } from "../types/LoginTypes";
  import axios from "axios";

  export const fetchLogout = () => {
    return {
      type: LOGOUT,
    };
  };

  export const fetchGetLogin = () => {
    return {
      type: GET_LOGIN,
    };
  };
  export const fetchGetLoginSuccess = (result) => {
   
    return {
      type: GET_LOGIN_SUCCESS,
      value: result.data.token,
    };
  };
  export const fetchGetLoginError = () => {
    return {
      type: GET_LOGIN_ERROR,
    };
  };
  export const getLogin = (data) => {
     
      return async(dispatch) => {
        dispatch(fetchGetLogin()); 
        return axios
          .post(`https://reqres.in/api/login`,data)
          .then(result => {
            dispatch(fetchGetLoginSuccess(result));  
          })
          .catch(err => {
            dispatch(fetchGetLoginError());  
          });
      };
  };
  
   