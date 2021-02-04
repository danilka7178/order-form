const initialState = {
   inputs: [
      {
         id: 0,
         label: "Имя",
      },
      {
         id: 1,
         label: "Фамилия",
      },
      {
         id: 2,
         label: "Страна",
      },
      {
         id: 3,
         label: "Город",
      },
      {
         id: 4,
         label: "Номер телефона",
      }
   ]
}

export const contactsReducer = (state = initialState, action) => {
   return state
};