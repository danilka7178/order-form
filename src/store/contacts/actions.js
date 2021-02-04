export const SET_FIRSTNAME = "SET_FIRSTNAME";
export const SET_LASTNAME = "SET_LASTNAME";
export const SET_CITY = "SET_CITY";
export const SET_COUNTRY = "SET_COUNTRY";
export const SET_PHONE = "SET_PHONE";

export const setFirstName = (data) => ({
   type: SET_FIRSTNAME,
   payload: data
});
export const setLastName = (data) => ({
   type: SET_LASTNAME,
   payload: data
});
export const setCity = (data) => ({
   type: SET_CITY,
   payload: data
});
export const setCountry = (data) => ({
   type: SET_COUNTRY,
   payload: data
});
export const setPhone = (data) => ({
   type: SET_PHONE,
   payload: data
});