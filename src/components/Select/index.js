import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
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
  const [field] = useField(restProps);
  const optsPlaceholder = [{ value: '', label: 'No data available' }];

  return (
    <TextField
      select
      variant="outlined"
      className={classes.root}
      fullWidth
      {...field}
      {...restProps}
    >
      {(options.length ? options : optsPlaceholder).map(({ label, value }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
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
