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
   const deliveryMethod = useSelector(state => state.deliveryVault.deliveryMethod);
   const allMethods = useSelector(state => state.deliveryVault.allMethods);
   const dispatch = useDispatch();

   const handleChange = (event) => {
      dispatch(setDeliveryCompany({
         deliveryMethod: event.target.value,
      }));
   };

   return (
      <div className={`${classes.test}`}>
         <FormControl className={classes.root} component="fieldset">
            <RadioGroup className={`${classes.container} container`} aria-label="gender" name="gender1" value={deliveryMethod} onChange={handleChange}>
               {allMethods.map(({ id, nameMethod, image, timeToPost }) => {
                  return (
                     <div key={`${id}_${nameMethod}`} className={`${classes.delivery} delivery`}>
                        <FormControlLabel id={id} value={nameMethod} control={<Radio />} label={nameMethod} />
                        <img src={image} alt="" width="30px" height="30px" />
                        <p>Отправка: {timeToPost}</p>
                     </div>
                  )
               })}
            </RadioGroup>
         </FormControl>
      </div>
   );
}

export default DeliveryChoose;