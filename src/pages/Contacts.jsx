import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
   root: {
      '& > *': {
         margin: theme.spacing(1),
      },
   },
   containerInputs: {
      marginBottom: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      marginLeft: "-20px",
      marginRight: "-20px",
   },
   input: {
      paddingLeft: "10px",
      paddingRight: "10px",
      marginBottom: "30px",
      '& > *': {
         paddingLeft: "10px",
         paddingRight: "10px",
         paddingTop: "5px",
         paddingBottom: "5px",
      }
   }
}));

function Contacts() {
   const classes = useStyles();
   const labels = useSelector(state => state.contactsVault.inputs);

   return (
      <div className={classes.root}>
         <form className={classes.containerInputs} noValidate autoComplete="off">
            {labels.map(({ id, label }) => {
               return (
                  <TextField
                     key={`${id}_${label.substr(0, 5)}`}
                     className={classes.input}
                     id="outlined-basic"
                     label={label}
                     variant="outlined"
                  />
               )
            })}
         </form>
      </div>
   );
}

export default Contacts