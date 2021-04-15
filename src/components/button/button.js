import React from 'react';
import PropTypes from 'prop-types';

const button = (props) => {
  return (
    <div>
      <button>{props.title}</button>
    </div>
  );
};

button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default button;
