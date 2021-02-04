import { SET_FIRSTNAME, SET_LASTNAME, SET_COUNTRY, SET_CITY, SET_PHONE } from "./actions";

const initialState = {
   inputs: [
      {
         id: 0,
         label: "Имя",
         value: "",
      },
      {
         id: 1,
         label: "Фамилия",
         value: "",
      },
      {
         id: 2,
         label: "Страна",
         value: "",
      },
      {
         id: 3,
         label: "Город",
         value: "",
      },
      {
         id: 4,
         label: "Номер телефона",
         value: "",
      }
   ]
}

export const contactsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_FIRSTNAME:
         return ({
            ...state,
            formData: { ...state.formData, firstName: action.payload }
         })
      case SET_LASTNAME:
         return ({
            ...state,
            formData: { ...state.formData, lastName: action.payload }
         })
      case SET_COUNTRY:
         return ({
            ...state,
            formData: { ...state.formData, country: action.payload }
         })
      case SET_CITY:
         return ({
            ...state,
            formData: { ...state.formData, city: action.payload }
         })
      case SET_PHONE:
         return ({
            ...state,
            formData: { ...state.formData, phone: action.payload }
         })

      default:
         return state;
   }
};