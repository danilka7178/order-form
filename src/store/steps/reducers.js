import { STEP_INCREMENT, STEP_DECCREMENT, STEP_RESET } from "./actions"

const initialState = {
   step: 0,
   steps: [
      {
         id: 0,
         name: 'Основная информация',
         content: "Укажите Вашу контактную информацию",
      },
      {
         id: 1,
         name: 'Способ доставки',
         content: "Выберите предпочитаемый способ доставки",
      },
      {
         id: 2,
         name: 'Способ оплаты',
         content: "Выберите удобный способ оплаты",
      },
      {
         id: 3,
         name: 'Подтверждение',
         content: "Проверьте правильность введенных данных",
      }
   ],
};

export const stepReducer = (state = initialState, action) => {
   switch (action.type) {
      case STEP_INCREMENT:
         return {
            ...state,
            step: state.step + 1
         };
      case STEP_DECCREMENT:
         return {
            ...state,
            step: state.step - 1
         };
      case STEP_RESET:
         return {
            ...state,
            step: 0
         };

      default:
         return state;
   }
};