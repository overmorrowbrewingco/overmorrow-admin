import PropTypes from 'prop-types';

// A shape for React children
const childrenShape = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.func,
  PropTypes.node,
]);

export default childrenShape;
