import { CHOISE_PAYMENT } from "./actions";

const initialState = {
   paymentMethod: "Visa",
}

export const paymentReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHOISE_PAYMENT:
         return ({
            ...state,
            paymentMethod: action.payload,
         })

      default:
         return state;
   }
};