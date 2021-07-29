import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const margin = {
  margin: '0.5em',
};

const ActionSection = () => {
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
        <Button variant="contained" style={margin} color="primary" disabled>
          Confirm
        </Button>
      </Grid>
    </Grid>
  );
};

export default ActionSection;
