import { STEPPER_NEXT_STEP, STEPPER_PREV_STEP, STEPPER_RESET_STEP } from "./actions"

const initialState = {
   step: 0,
};

export const stepperReducer = (state = initialState, action) => {
   switch (action.type) {
      case STEPPER_NEXT_STEP:
         return {
            ...state,
            step: state.step + 1
         };
      case STEPPER_PREV_STEP:
         return {
            ...state,
            step: state.step - 1
         };
      case STEPPER_RESET_STEP:
         return {
            ...state,
            step: 0
         };

      default:
         return state;
   }
};