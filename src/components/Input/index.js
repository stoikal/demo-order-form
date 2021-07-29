import React from 'react';
import { useField } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const Input = ({ ...restProps }) => {
  const classes = useStyles();
  const [field] = useField(restProps);

  console.log('useField', field);

  return (
    <TextField
      variant="outlined"
      className={classes.root}
      fullWidth
      {...field}
      {...restProps}
    />
  );
};

export default Input;
