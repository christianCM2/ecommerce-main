import {combineReducers} from 'redux';
import products from '../components/redux/reducers/HomeReducers'
import login from '../components/redux/reducers/LoginReducers'
import users from '../components/redux/reducers/UsersReducers'

export default combineReducers({
    products:products,
    login:login,
    users:users
})
