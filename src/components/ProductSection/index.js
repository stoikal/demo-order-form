import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Product from '../Product';
import Section from '../Section';

const ProductSection = () => {
  return (
    <Section>
      <Grid container>
        <Grid item xs={3}>
          Products
        </Grid>
        <Grid item xs={9}>
          <Product />
          <Button variant="contained" color="secondary">
            NEW ITEM +
          </Button>
        </Grid>
      </Grid>
    </Section>
  );
};

export default ProductSection;
