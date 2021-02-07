import { useSelector } from "react-redux";

function SummaryInfo() {
   const { firstName, lastName, country, city, phone } = useSelector(state => state.contactsVault.formData);
   const delivery = useSelector(state => state.deliveryVault.deliveryMethod);
   const payment = useSelector(state => state.paymentVault.paymentMethod);

   const getPaymentTime = (delivery) => {
      if (delivery) {
         if (delivery === "DHL") {
            return "сегодня"
         } else if (delivery === "СДЭК") {
            return "3 дня"
         } else if (delivery === "DPD") {
            return "1-2 дня"
         } else if (delivery === "Boxberry") {
            return "никогда"
         } return
      } else return "Время доставки не определено"
   }

   return (
      <div className="info">
         <div className="contacts">
            <h4 className="contacts__title">Контактная информация:</h4>
            <ul className="contacts__list">
               <li className="contacts__item">Имя: {firstName}</li>
               <li className="contacts__item">Фамилия: {lastName}</li>
               <li className="contacts__item">Страна: {country}</li>
               <li className="contacts__item">Город: {city}</li>
               <li className="contacts__item">Номер телефона: {phone}</li>
            </ul>
         </div>
         <div className="delivery">
            <h4 className="delivery__title">Способ доставки: </h4>
            <ul className="delivery__list">
               <li className="delivery__item">{delivery} / {getPaymentTime(delivery)}</li>
            </ul>
         </div>
         <div className="payment">
            <h4 className="payment__title">Способ оплаты: </h4>
            <ul className="payment__list">
               <li className="payment__item">{payment}</li>
            </ul>
         </div>
      </div >
   )
};

export default SummaryInfo;