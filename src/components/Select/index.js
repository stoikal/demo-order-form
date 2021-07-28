import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const Select = ({ options, ...restProps }) => {
  const classes = useStyles();
  return (
    <TextField
      select
      variant="outlined"
      className={classes.root}
      fullWidth
      {...restProps}
    >
      {options.map(({ label, value }) => (
        <MenuItem value={value}>{label}</MenuItem>
      ))}
    </TextField>
  );
};

Select.defaultProps = {
  options: [],
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

export default Select;
