import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
   root: {
      width: '100%',
      marginBottom: "50px"
   },
   instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      textAlign: "center"
   },
}));

function MyStepper() {
   const { step, steps } = useSelector(state => state.stepVault);
   const classes = useStyles();

   const getStepContent = (step) => {
      const findObj = steps.filter((obj) => obj.id === step);
      if (findObj.length) {
         return (
            findObj[0].content
         )
      } else return null;
   }

   return (
      <div className={classes.root}>
         <Stepper activeStep={step} alternativeLabel>
            {steps.map(({ id, name }) => (
               <Step key={`${id}_${name.substr(0, 5)}`}>
                  <StepLabel>{name}</StepLabel>
               </Step>
            ))}
         </Stepper>
         <div>
            <Typography
               variant="h6"
               className={classes.instructions}
            >
               {getStepContent(step)}
            </Typography>
         </div>
      </div>
   );
}

export default MyStepper;