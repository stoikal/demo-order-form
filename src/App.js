import React from 'react';
import Paper from '@material-ui/core/Paper';
import OrderForm from './components/OrderForm';

const App = () => (
  <div>
    <h1>Create Order</h1>
    <Paper square>
      <OrderForm />
    </Paper>
  </div>
);

export default App;
