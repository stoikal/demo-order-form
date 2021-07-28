import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  divider: {
    margin: '1em 0',
  },
});

const Section = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      {children}
      <Divider className={classes.divider}/>
    </div>
  );
};

export default Section;
