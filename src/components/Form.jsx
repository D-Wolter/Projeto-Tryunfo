import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            id="name"
            name="name"
            value={ name }
            data-testid="name-input"
            onChange={ handleChange }
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
