import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { name, handleChange, description, attr1 } = this.props;

    return (
      <form>
        <h1>Adicionar nova carta</h1>
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
        <label htmlFor="description">
          Descrição
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={ description }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="attr1">
          Attr1
          <input
            id="attr1"
            type="number"
            data-testid="attr1-input"
            name="attr1"
            value={ attr1 }
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
  description: PropTypes.string.isRequired,
  attr1: PropTypes.string.isRequired,
};
