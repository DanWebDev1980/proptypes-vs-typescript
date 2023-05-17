import React from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
  return <div>{props.name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
