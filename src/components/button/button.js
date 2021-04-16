import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const button = (props) => {
  return (
    <div className="button--container">
      <button className="button">{props.title}</button>
    </div>
  );
};

button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default button;
