import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_USERS_BY_ID,
    GET_USERS_BY_ID_SUCCESS,
    GET_USERS_BY_ID_ERROR,
    PUT_USERS_BY_ID,
    PUT_USERS_BY_ID_SUCCESS,
    PUT_USERS_BY_ID_ERROR,
    CLOSE_SIDEBAR,
    BUTTON_MENU,
    GET_POSTS_BY_ID,
    GET_POSTS_BY_ID_SUCCESS,
    GET_POSTS_BY_ID_ERROR,
    GET_ALBUMS_BY_ID,
    GET_ALBUMS_BY_ID_SUCCESS,
    GET_ALBUMS_BY_ID_ERROR,
  } from "../types/UsersTypes";
  import axios from "axios";

  
  
  export const fetchGetAlbums = () => {
    return {
      type: GET_ALBUMS_BY_ID,
    };
  };
  export const fetchGetAlbumsSuccess = (result) => {
 
    return {
      type: GET_ALBUMS_BY_ID_SUCCESS,
      value: result.data,
    };
  };
  export const fetchGetAlbumsError = () => {
    return {
      type: GET_ALBUMS_BY_ID_ERROR,
    };
  };
  export const getAlbumsById = (id) => {
     
      return async(dispatch) => {
        dispatch(fetchGetAlbums()); 
        return axios
          .get(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
          .then(result => {
            dispatch(fetchGetAlbumsSuccess(result));  
          })
          .catch(err => {
            dispatch(fetchGetAlbumsError());  
          });
      };
  };
  
  export const fetchGetPosts = () => {
    return {
      type: GET_POSTS_BY_ID,
    };
  };
  export const fetchGetPostsSuccess = (result) => {
 
    return {
      type: GET_POSTS_BY_ID_SUCCESS,
      value: result.data,
    };
  };
  export const fetchGetPostsError = () => {
    return {
      type: GET_POSTS_BY_ID_ERROR,
    };
  };
  export const getPostsById = (id) => {
     
      return async(dispatch) => {
        dispatch(fetchGetPosts()); 
        return axios
          .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then(result => {
            dispatch(fetchGetPostsSuccess(result));  
          })
          .catch(err => {
            dispatch(fetchGetPostsError());  
          });
      };
  };
  
  export const fetchGetUsers = () => {
    return {
      type: GET_USERS,
    };
  };
  export const fetchGetUsersSuccess = (result) => {

    return {
      type: GET_USERS_SUCCESS,
      value: result.data.data,
    };
  };
  export const fetchGetUsersError = () => {
    return {
      type: GET_USERS_ERROR,
    };
  };
  export const getUsersList = () => {
     
      return async(dispatch) => {
        dispatch(fetchGetUsers()); 
        return axios
          .get(`https://reqres.in/api/users`)
          .then(result => {
            dispatch(fetchGetUsersSuccess(result));  
          })
          .catch(err => {
            dispatch(fetchGetUsersError());  
          });
      };
  };
  



  export const fetchGetUsersById = () => {
    return {
      type: GET_USERS_BY_ID,
    };
  };
  export const fetchGetUsersByIdSuccess = (result) => {

    return {
      type: GET_USERS_BY_ID_SUCCESS,
      value: result.data.data,
    };
  };
  export const fetchGetUsersByIdError = () => {
    return {
      type: GET_USERS_BY_ID_ERROR,
    };
  };
  export const getUser = (id) => {
     
      return async(dispatch) => {
        dispatch(fetchGetUsersById()); 
        return axios
          .get(`https://reqres.in/api/users/${id}`)
          .then(result => {
            dispatch(fetchGetUsersByIdSuccess(result));  
          })
          .catch(err => {
            dispatch(fetchGetUsersByIdError());  
          });
      };
  };
  




  export const fetchPutUsers = () => {
    return {
      type: PUT_USERS_BY_ID,
    };
  };
  export const fetchPutUsersSuccess = (result) => {

    return {
      type: PUT_USERS_BY_ID_SUCCESS,
      value: result.data.data,
    };
  };
  export const CloseSidebar = () => {

    return {
      type: CLOSE_SIDEBAR,
      
    };
  };
  export const ChangeButtonMenu = (abutton,bbutton,cbutton) => {

    return {
      type: BUTTON_MENU,
      value:abutton,
      buttonsel:bbutton,
      menu:cbutton

    };
  };
  export const fetchPutUsersError = () => {
    return {
      type: PUT_USERS_BY_ID_ERROR,
    };
  };
  export const PutUsers  = (id,data) => {
     
      return async(dispatch) => {
        dispatch(fetchPutUsers()); 
        return axios
        .put(`https://reqres.in/api/users/${id}`,data)
          .then(result => {
            dispatch(fetchPutUsersSuccess(result));  
          })
          .catch(err => {
            dispatch(fetchPutUsersError());  
          });
      };
  };
  
   