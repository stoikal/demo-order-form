import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import OrderForm from './components/OrderForm';

const useStyles = makeStyles({
  container: {
    background: '#efefef',
    width: '100%',
    height: '100%',
    padding: '1em',
  },
  paper: {
    padding: '1em',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5" component="h1" paragraph>
        Create Order
      </Typography>
      <Paper square className={classes.paper}>
        <OrderForm />
      </Paper>
    </div>
  );
};

export default App;
