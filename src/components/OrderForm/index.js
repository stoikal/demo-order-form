import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DetailSection from '../DetailSection';
import ProductSection from '../ProductSection';

const OrderForm = () => {
  return (
    <div>
      <DetailSection />
      <ProductSection />
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid item>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained" color="primary" disabled>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderForm;
