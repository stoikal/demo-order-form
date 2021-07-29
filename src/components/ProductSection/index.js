import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Product from '../Product';
import Section from '../Section';
import noop from '../../utils/noop';

const ProductSection = ({ productList, values, onAddItem, onRemoveItem }) => {
  const { distributorName, distributionCenter, products } = values;

  const isSectionHidden = !distributorName || !distributionCenter;

  // eslint-disable-next-line camelcase
  const productOptions = productList.map(({ id, product_name }) => ({
    value: id,
    label: product_name,
  }));

  const getUnitOptions = (productData) => {
    const { product } = productData;

    if (product) {
      const unitList = productList.find(({ id }) => id === product)?.units;
      if (unitList) {
        return unitList.map(({ name }) => ({ value: name, label: name }));
      }
    }
    return [];
  };

  return (
    <Section title="Products" hidden={isSectionHidden}>
      {products.map((product, index) => (
        <Product
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          productOptions={productOptions}
          unitOptions={getUnitOptions(product)}
          values={product}
          index={index}
          showRemoveButton={!!index}
          onRemove={onRemoveItem}
        />
      ))}
      <Button variant="contained" color="secondary" onClick={onAddItem}>
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

ProductSection.defaultProps = {
  onAddItem: noop,
  onRemoveItem: noop,
};

ProductSection.propTypes = {
  values: PropTypes.shape({
    distributorName: PropTypes.string,
    distributionCenter: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        product: PropTypes.string,
        quantity: PropTypes.number,
        unit: PropTypes.string,
        price: PropTypes.number,
      }),
    ),
  }),
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  productList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      product_name: PropTypes.string,
      units: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }),
  ),
};

export default ProductSection;
