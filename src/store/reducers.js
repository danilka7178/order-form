import { combineReducers } from "redux";
import { stepReducer } from "./steps/reducers";
import { contactsReducer } from "./contacts/reducers";

export default combineReducers({
   stepVault: stepReducer,
   contactsVault: contactsReducer,
});