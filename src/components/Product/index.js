import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const Product = () => {
  return (
    <div>
      <div>
        <TextField select label="Product" variant="outlined">
          <MenuItem>hello</MenuItem>
        </TextField>
        <TextField select label="Unit" variant="outlined">
          <MenuItem>hello</MenuItem>
        </TextField>
      </div>
      <div>
        <TextField label="Quantity" variant="outlined" />
        <TextField label="Price" variant="outlined" />
        <TextField label="Total Price" variant="outlined" />
      </div>
      <div>
        Total nett price
      </div>
    </div>
  );
};

export default Product;
