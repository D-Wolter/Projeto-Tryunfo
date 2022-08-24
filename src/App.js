import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      previewOn: false,
      isSaveButtonDisabled: true,
      data: [],
    };
  }

  onInputChange = ({ target }) => {
    console.log(cardTrunfo);
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const maxAtrr = 91;
      const minAtrr = 0;
      const soma = 211;
      const {
        cardName,
        cardImage,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;
      if (
        cardName.length > 0
        && cardImage.length > 0
        && cardDescription.length > 0
        && cardAttr1 < maxAtrr
        && cardAttr2 < maxAtrr
        && cardAttr3 < maxAtrr
        && cardAttr1 > minAtrr
        && cardAttr2 > minAtrr
        && cardAttr3 > minAtrr
        && cardAttr1 + cardAttr2 + cardAttr3 > soma) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  };

  onSaveButtonClick = (objetoInfo) => {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      hasTrunfo: false,
      cardTrunfo: true,
      data: [...prevState.data, objetoInfo],
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      previewOn,
      isSaveButtonDisabled,
      hasTrunfo } = this.state;
    return (
      <>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          previewOn={ previewOn }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;
