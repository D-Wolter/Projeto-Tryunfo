import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const
      { cardName,
        handleChange,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        image,
        rare,
        agree,
        saveClick,
        isDisabled } = this.props;

    return (
      <form>
        <h1>Adicionar nova carta</h1>
        <label htmlFor="cardName">
          Nome
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={ cardName }
            data-testid="name-input"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          Attr1
          <input
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Attr2
          <input
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          Attr3
          <input
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            value={ cardAttr3 }
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
            () => saveClick({ cardName, description, attr1, attr2, attr3, image, rare })
          }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rare: PropTypes.string.isRequired,
  agree: PropTypes.bool.isRequired,
  saveClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
