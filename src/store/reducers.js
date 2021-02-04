import { combineReducers } from "redux";
import { stepReducer } from "./steps/reducers"

export default combineReducers({
   stepVault: stepReducer,
});