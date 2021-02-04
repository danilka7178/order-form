import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from "react-redux";
import { handleNext, handleBack, handleReset } from "../store/steps/actions";

const useStyles = makeStyles((theme) => ({
   backButton: {
      marginRight: theme.spacing(1),
   },
   containerButtons: {
      textAlign: "center",
   }
}));

function MainButtons() {
   const { step, steps } = useSelector(state => state.stepVault);
   const dispatch = useDispatch();
   const classes = useStyles();

   const clickNextStep = () => {
      dispatch(handleNext())
   }

   const clickPrevStep = () => {
      dispatch(handleBack())
   }

   const clickResetStep = () => {
      dispatch(handleReset())
   }

   return (
      <div className={classes.containerButtons}>
         {step === steps.length ? (
            <div>
               <Button
                  variant="contained"
                  color="secondary"
                  onClick={clickResetStep}
               >
                  Вернуться на первый шаг
                     </Button>
            </div>
         ) : (
               <div>
                  <Button
                     disabled={step === 0}
                     onClick={clickPrevStep}
                     className={classes.backButton}
                  >
                     Назад
                        </Button>
                  <Button
                     variant="contained"
                     color={step !== steps.length - 1 ? "primary" : "secondary"}
                     onClick={clickNextStep}
                  >
                     {step === steps.length - 1 ? 'Оплатить' : 'Вперед'}
                  </Button>
               </div>

            )}
      </div>
   )
}

export default MainButtons;