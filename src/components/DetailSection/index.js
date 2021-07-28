import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const DetailSection = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          Detail
        </Grid>
        <Grid item xs={9}>
          <div>
            <TextField select label="Name" variant="outlined">
              <MenuItem>hello</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField select label="Distribution Center" variant="outlined">
              <MenuItem>hello</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField select label="Payment Type" variant="outlined">
              <MenuItem>hello</MenuItem>
            </TextField>
            <TextField select label="Expired Date" variant="outlined">
              <MenuItem>hello</MenuItem>
            </TextField>
          </div>
          <div>
            <TextField label="Note" multiline rows={4} variant="outlined" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailSection;
