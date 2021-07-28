import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const Input = ({ ...restProps }) => {
  const classes = useStyles();
  return (
    <TextField
      variant="outlined"
      className={classes.root}
      fullWidth
      {...restProps}
    />
  );
};

export default Input;
