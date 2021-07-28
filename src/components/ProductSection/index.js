import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Product from '../Product';
import Section from '../Section';

const ProductSection = () => {
  return (
    <Section title="Products" hidden>
      <Product />
      <Button variant="contained" color="secondary">
        NEW ITEM +
      </Button>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={6}
          direction="row"
          justifyContent="space-between"
          style={{
            padding: '1em 0',
            margin: '1em 0',
          }}
        >
          <Grid item>Total</Grid>
          <Grid item>0</Grid>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ProductSection;
