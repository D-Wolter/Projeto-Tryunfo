import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const
      { name,
        handleChange,
        description,
        attr1,
        attr2,
        attr3,
        image,
        rare,
        agree,
        saveClick,
        isDisabled } = this.props;

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
            data-testid="description-input"
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
        <label htmlFor="attr2">
          Attr2
          <input
            id="attr2"
            type="number"
            data-testid="attr2-input"
            name="attr2"
            value={ attr2 }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="attr3">
          Attr3
          <input
            id="attr3"
            type="number"
            data-testid="attr3-input"
            name="attr3"
            value={ attr3 }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="image">
          Imagem
          <input
            type="text"
            id="image"
            name="image"
            value={ image }
            data-testid="image-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="rare">
          <select
            name="rare"
            id="rare"
            value={ rare }
            onChange={ handleChange }
            data-testid="rare-input"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="agree">
          Super Trybe Trunfo
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="agree"
            id="agree"
            value={ agree }
            onChange={ handleChange }
          />
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isDisabled }
          onClick={
            () => saveClick({ name, description, attr1, attr2, attr3, image, rare })
          }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  attr1: PropTypes.string.isRequired,
  attr2: PropTypes.string.isRequired,
  attr3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  agree: PropTypes.bool.isRequired,
  saveClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
