import { combineReducers } from "redux";
import { stepReducer } from "./steps/reducers";
import { contactsReducer } from "./contacts/reducers";
import { deliveryReducer } from "./delivery/reducers";
import { paymentReducer } from "./payment/reducers";

export default combineReducers({
   stepVault: stepReducer,
   contactsVault: contactsReducer,
   deliveryVault: deliveryReducer,
   paymentVault: paymentReducer,
});