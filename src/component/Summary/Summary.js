import React from 'react';
import PropTypes from 'prop-types';

const Summary = ({ title = 'Recipe', ingredients = [], steps = [] }) => {
  return (
    <div className="summary">
      <h3>{title}</h3>
      <p>
        <span>{ingredients.length} Ingredient </span>
        <span>{steps.length} Steps</span>
      </p>
    </div>
  );
};

Summary.propTypes = {
  steps: PropTypes.array.isRequired,
  ingredients: PropTypes.array.isRequired,
  title: (props, propName) =>
    typeof props[propName] !== 'string'
      ? new Error('A title mast be a string')
      : props[propName].length > 20
      ? new Error(`title is over 20 characters`)
      : null,
};

export default Summary;
