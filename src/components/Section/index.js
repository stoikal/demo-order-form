import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  divider: {
    margin: '1em 0',
  },
});

const Section = ({ title, hidden, children }) => {
  const classes = useStyles();

  if (hidden) return null;
  return (
    <>
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="h6" component="h2" paragraph>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  hidden: PropTypes.bool,
};

export default Section;
