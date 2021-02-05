export const CHOISE_PAYMENT = "CHOISE_PAYMENT";

export const setPaymentMethod = (data) => ({
   type: CHOISE_PAYMENT,
   payload: data
});