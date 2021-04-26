import { ActionCreators } from "redux-devtools";
import { theme, invertTheme } from "../../navbar/styles";
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
  GET_POSTS_BY_ID,
  GET_POSTS_BY_ID_SUCCESS,
  GET_POSTS_BY_ID_ERROR,
  GET_ALBUMS_BY_ID,
  GET_ALBUMS_BY_ID_SUCCESS,
  GET_ALBUMS_BY_ID_ERROR,
  CLOSE_SIDEBAR,
  BUTTON_MENU,
} from "../types/UsersTypes";

const initialState = {
  user: null,
  users: null,
  error: false,
  loading: false,
  sidebar: false,
  albums:null,
  posts:null,
  home:true,
  album:false,
  buttonselected: theme,
  buttonse: invertTheme,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.value,
        loading: false,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_USERS_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_BY_ID_SUCCESS:
      return {
        ...state,
        sidebar: true,
        user: action.value,
        loading: false,
      };
    case GET_USERS_BY_ID_ERROR:
      return {
        ...state,
        error: true,
      };
      case GET_ALBUMS_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_ALBUMS_BY_ID_SUCCESS:
      return {
        ...state,
        albums: action.value,
        loading: false,
      };
    case GET_ALBUMS_BY_ID_ERROR:
      return {
        ...state,
        error: true,
      };
      case GET_POSTS_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS_BY_ID_SUCCESS:
      return {
        ...state,
        posts: action.value,
        loading: false,
      };
    case GET_POSTS_BY_ID_ERROR:
      return {
        ...state,
        error: true,
      };
    case PUT_USERS_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case PUT_USERS_BY_ID_SUCCESS:
      return {
        ...state,
        sidebar: false,
        loading: false,
      };
    case PUT_USERS_BY_ID_ERROR:
      return {
        ...state,
        error: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebar: false,
      };
    case BUTTON_MENU:
      return {
        ...state,
        buttonselected: action.value,
        buttonse: action.buttonsel,
        album:action.menu,
        home:!action.menu
      };

    default:
      return state;
  }
};
export default users;
