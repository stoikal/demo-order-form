import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const margin = {
  margin: '0.5em',
};

const ActionSection = ({ isSubmitDisabled }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
    >
      <Grid item>
        <Button variant="contained" style={margin}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          style={margin}
          color="primary"
          disabled={isSubmitDisabled}
        >
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
};

ActionSection.propTypes = {
  isSubmitDisabled: PropTypes.bool,
};

export default ActionSection;
