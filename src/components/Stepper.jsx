import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from "react-redux";
import { handleNext, handleBack } from "../store/stepper/actions"

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
   },
   button: {
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(2),
   },
   instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      marginLeft: theme.spacing(3),
   },
}));

function getSteps() {
   return ['Основная информация', 'Способ доставки', 'Способ оплаты', 'Подтверждение'];
}

function getStepContent(step) {
   switch (step) {
      case 0:
         return <h3>Контактная информация</h3>;
      case 1:
         return <h3>Способ доставки</h3>;
      case 2:
         return <h3>Выберите удобный способ оплаты</h3>;
      case 3:
         return <h3>Проверьте правильность введенных данных</h3>;
      default:
         return 'Неизвестный шаг, как ты сюда попал?';
   }
}

export default function HorizontalLinearStepper() {
   const classes = useStyles();
   const steps = getSteps();

   const dispatch = useDispatch();
   const { stepper } = useSelector(state => state);

   const clickHandleNext = () => {
      dispatch(handleNext())
   };

   const clickHandleBack = () => {
      dispatch(handleBack())
   };

   const handleReset = () => {
      dispatch(handleReset())
   };

   console.log(stepper)

   return (
      <div className={classes.root}>
         <Stepper activeStep={stepper.step}>
            {steps.map((label, index) => {
               const stepProps = {};
               const labelProps = {};
               return (
                  <Step key={label} {...stepProps}>
                     <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
               );
            })}
         </Stepper>
         <div>
            {stepper.step === steps.length ? (
               <div>
                  {alert("Спасибо, денюжки капнули")}
                  <Button onClick={handleReset} className={classes.button}>
                     Reset
            </Button>
               </div>
            ) : (
                  <div>
                     <Typography className={classes.instructions}>{getStepContent(stepper.step)}</Typography>
                     <div>
                        <Button variant="outlined" disabled={stepper.step === 0} onClick={clickHandleBack} className={classes.button}>
                           Назад
                        </Button>
                        <Button
                           variant="contained"
                           color={stepper.step === steps.length - 1 ? 'secondary' : 'primary'}
                           onClick={clickHandleNext}
                           className={classes.button}
                        >
                           {stepper.step === steps.length - 1 ? 'Оплатить' : 'Далее'}
                        </Button>
                     </div>
                  </div>
               )}
         </div>
      </div>
   );
}
