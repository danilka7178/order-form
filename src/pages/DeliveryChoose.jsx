import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";
import { setDeliveryCompany } from "../store/delivery/actions"

const useStyles = makeStyles((theme) => ({
   test: {
      textAlign: "center"
   },
   root: {
   },
   container: {
      textAlign: "center",
      flexDirection: "row",
   },
   delivery: {
      flex: "0 1 48%",
      boxShadow: "1px 1px 4px rgba(0,0,0,0.5)",
      borderRadius: "10px",
      marginBottom: "15px",
      marginRight: "5px",
   },
}));

function DeliveryChoose() {
   const classes = useStyles();
   const deliveryMethod = useSelector(state => state.deliveryVault.deliveryMethod)
   const dispatch = useDispatch();

   const handleChange = (event) => {
      dispatch(setDeliveryCompany(event.target.value));
   };

   return (
      <div className={`${classes.test}`}>
         <FormControl className={classes.root} component="fieldset">
            <RadioGroup className={`${classes.container} container`} aria-label="gender" name="gender1" value={deliveryMethod} onChange={handleChange}>
               <div className={`${classes.delivery} delivery`}>
                  <FormControlLabel value="DHL" control={<Radio />} label="DHL" />
                  <img src="https://cargotime.ru/wp-content/uploads/2017/01/dhl.png" alt="" width="30px" height="30px" />
                  <p>Отправка: сегодня</p>
               </div>
               <div className={`${classes.delivery} delivery`}>
                  <FormControlLabel value="СДЭК" control={<Radio />} label="СДЭК" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcFI14AOIaEnUcRxh4toSNz7mBrPO6U_9fA&usqp=CAU" alt="" width="30px" height="30px" />
                  <p>Отправка: 3 дня</p>
               </div>
               <div className={`${classes.delivery} delivery`}>
                  <FormControlLabel value="DPD" control={<Radio />} label="DPD" />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCbwomcXBpkRYk2U2Gfp7vDLMvFyP6shvjA&usqp=CAU" alt="" width="30px" height="30px" />
                  <p>Отправка: 1-2 дня</p>
               </div>
               <div className={`${classes.delivery} delivery`}>
                  <FormControlLabel value="Boxberry" control={<Radio />} label="Boxberry" />
                  <img src="data:image/png;base64,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" alt="" width="30px" height="30px" />
                  <p>Отправка: никогда</p>
               </div>
            </RadioGroup>
         </FormControl>
      </div>
   );
}

export default DeliveryChoose;