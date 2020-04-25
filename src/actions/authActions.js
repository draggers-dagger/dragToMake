import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

export const registerUser = (userData, history) => {
  console.log(userData, "sending userdata")
  return (dispatch) => {
    axios.post("/api/v1/users", userData)
      .then(res => {
        console.log(res, "register responseee")
        alert('Registration successfull.')
        history.push('/login')
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
  }
}

export const loginUser = (userData) => {
  console.log(userData, "sending login userdata")
  return (dispatch) => {
    axios.post("/api/v1/login", userData)
      .then(res => {
        console.log(res, "login responseee")
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        }))
  }
}

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

export const logoutUser = () => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
};