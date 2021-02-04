import { combineReducers } from "redux";
import { stepperReducer } from "./stepper/reducers"

export default combineReducers({
   stepper: stepperReducer,
});