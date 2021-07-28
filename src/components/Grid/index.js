import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

// wrap material grid to add ability to show/hide
const WrappedGrid = ({ hidden, children, ...restProps }) => {
  if (hidden) return null;
  return <Grid {...restProps}>{children}</Grid>;
};

WrappedGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  hidden: PropTypes.bool,
};

export default WrappedGrid;
