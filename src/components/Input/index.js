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
  const { name } = restProps;

  return (
    <TextField
      variant="outlined"
      className={classes.root}
      fullWidth
      {...(name && { field })}
      {...restProps}
    />
  );
};

export default Input;
