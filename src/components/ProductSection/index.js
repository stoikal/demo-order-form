import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Product from '../Product';
import Section from '../Section';
import noop from '../../utils/noop';

const ProductSection = ({ productList, values, onAddItem, onRemoveItem }) => {
  const [grandTotal, setGrandTotal] = useState(0);
  const { distributorName, distributionCenter, products } = values;

  const usedUnits = products.reduce((res, { product, unit }) => {
    if (!unit) return res;
    return {
      ...res,
      [product]: [...(res[product] || []), unit],
    };
  }, {});

  const isSectionHidden = !distributorName || !distributionCenter;

  // eslint-disable-next-line camelcase
  const productOptions = productList.map(({ id, product_name }) => ({
    value: id,
    label: product_name,
  }));

  const filterUnitList = (list, productId, currUnit) => {
    return list.filter(({ name }) => {
      return name === currUnit || !usedUnits[productId]?.includes(name);
    });
  };

  // TODO memoize
  const getUnitOptions = (productData) => {
    const { product, unit } = productData;

    if (product) {
      let unitList = productList.find(({ id }) => id === product)?.units;
      if (unitList) {
        unitList = filterUnitList(unitList, product, unit);

        return unitList.map(({ name, price }) => ({
          value: name,
          label: name,
          price,
        }));
      }
    }
    return [];
  };

  const handlePriceChange = () => {
    const total = products.reduce((res, { quantity, price }) => {
      return res + quantity * price;
    }, 0);

    setGrandTotal(total);
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
          showRemoveButton={!!index} // show remove button if not first item
          onRemove={onRemoveItem}
          onPriceChange={handlePriceChange}
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
          <Grid item>{grandTotal}</Grid>
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
