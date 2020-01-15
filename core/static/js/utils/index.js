import Axios from "axios";

const CURRENT_USER_URL = "/api/current-user/";

export function getCurrentUser(){
    // Funciton to get the current user
    return Axios.get(CURRENT_USER_URL);
}