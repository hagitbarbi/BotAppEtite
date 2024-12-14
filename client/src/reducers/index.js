import { combineReducers } from "redux";
import recipes from "./recipes";
import authenticationReducer from "./authentication";

export default combineReducers({
    recipes,
    authenticationReducer
});