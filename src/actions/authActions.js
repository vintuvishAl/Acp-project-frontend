
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS , SET_CURRENT_USER } from './types'; 
import {  AsyncStorage } from 'react-native';

import  setAuthToken from '../utils/setAuthToken';

// Register
export const registerUser = (userData, navigation) => dispatch => {
    axios
        .post('https://acp-project-reactnative.herokuapp.com/api/users/register', userData)
        .then(res => navigation.navigate('Login'))
        .catch(err=> 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}

// Login

export const loginUser = userData => dispatch => {
    axios
        .post('https://acp-project-reactnative.herokuapp.com/api/users/login', userData)
        .then(res => {
            const { token } = res.data;
            AsyncStorage.setItem('jwtToken', token);
            setAuthToken(token);

            const decoded = jwt_decode(token);

            dispatch(setCurrentUser(decoded))
        })
        .catch(err=>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data

            }));

};

//set loggedin user

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// log user out

export const logoutUser = () => dispatch => {
    //remove token from local storage
    AsyncStorage.removeItem('jwtToken');
    //remove auth header
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};