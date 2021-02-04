import { CHOISE_DELIVERY } from "./actions";

const initialState = {
   deliveryMethod: "DHL",
}

export const deliveryReducer = (state = initialState, action) => {
   console.log(action)
   switch (action.type) {
      case CHOISE_DELIVERY:
         return ({
            ...state,
            deliveryMethod: action.payload
         })

      default:
         return state;
   }
};