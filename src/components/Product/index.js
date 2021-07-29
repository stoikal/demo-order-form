import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Remove from '@material-ui/icons/Remove';
import Select from '../Select';
import Input from '../Input';

const Product = ({
  showRemoveButton,
  onRemove,
  productOptions,
  unitOptions,
  index,
  values,
}) => {
  const { product, price, quantity } = values;

  const itemPriceTotal = (() => {
    if (product && price && quantity) {
      return price * quantity;
    }
    return '';
  })();

  return (
    <div style={{ position: 'relative' }}>
      {showRemoveButton && (
        <IconButton
          style={{ position: 'absolute', top: '0.5em', left: '-2em' }}
          onClick={() => onRemove(index)}
        >
          <Remove />
        </IconButton>
      )}
      <Grid container spacing={1}>
        <Grid item xs={10}>
          <Select
            name={`products[${index}].product`}
            label="Product"
            options={productOptions}
            required
          />
        </Grid>
        <Grid item xs={2}>
          <Select
            name={`products[${index}].unit`}
            label="Unit"
            options={unitOptions}
            required
          />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Input
            name={`products[${index}].quantity`}
            type="number"
            label="Quantity"
            required
          />
        </Grid>
        <Grid item xs={3}>
          <Input
            name={`products[${index}].price`}
            type="number"
            label="Price"
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Input label="Total Price" value={itemPriceTotal} disabled required />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={1}
      >
        <Grid
          container
          item
          xs={6}
          direction="row"
          justifyContent="space-between"
          style={{
            borderTop: '2px solid #dedede',
            padding: '1em 0',
            margin: '1em 0',
          }}
        >
          <Grid item>Total nett price</Grid>
          <Grid item>{itemPriceTotal}</Grid>
        </Grid>
      </Grid>
    </div>
  );
};

Product.defaultProps = {
  showRemoveButton: false,
};

Product.propTypes = {
  showRemoveButton: PropTypes.bool,
  values: PropTypes.shape({
    product: PropTypes.string,
    quantity: PropTypes.number,
    unit: PropTypes.string,
    price: PropTypes.number,
  }),
  index: PropTypes.number,
  onRemove: PropTypes.func,
  productOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  unitOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
};

export default Product;
