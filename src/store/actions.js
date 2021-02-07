import axios from "axios";

export const POST_ARCTICLES = "POST_ARTICLES";

export const axiosPostArticles = () => (dispatch, getState) => {
   const data = getState();
   let formData = {
      firstName: data.contactsVault.formData.firstName,
      lastName: data.contactsVault.formData.lastName,
      city: data.contactsVault.formData.city,
      country: data.contactsVault.formData.country,
      phone: data.contactsVault.formData.phone,
      deliveryMethod: data.deliveryVault.deliveryMethod,
      paymentMethod: data.paymentVault.paymentMethod,
   }
   axios.post("https://5c3755177820ff0014d92711.mockapi.io/orders", formData);
}