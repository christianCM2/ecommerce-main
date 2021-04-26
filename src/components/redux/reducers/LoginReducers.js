import {
    GET_LOGIN,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
    LOGOUT
  } from "../types/LoginTypes";
  
  const initialState = {
     
    login: null,
    error: false,
    loading: false,
    token:false,
  };
  
  const login = (state = initialState, action) => {
    switch (action.type) {
      case GET_LOGIN:
        return {
          ...state,
          loading: true,
        };
      case GET_LOGIN_SUCCESS:
        return {
          ...state,
          login: action.value,
          loading: false,
          token:true
        };
      case GET_LOGIN_ERROR:
        return {
          ...state,
          error: true,
        };
     
        case LOGOUT:
          return {
            ...state,
            token:false,
            error: true,
          };
      default:
        return state;
    }
  };
  export default login;
  