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
      hasTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName,
        cardImage,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3 } = this.state;
      const maxAtrr = 91;
      const minAtrr = -1;
      const limite = 211;
      const soma = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));
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
        && soma < limite) {
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

  checkSuper = (cardTrunfo) => (cardTrunfo === true);

  onSaveButtonClick = (objetoInfo) => {
    const { cardTrunfo } = this.state;
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
      hasTrunfo: this.checkSuper(cardTrunfo),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
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
      hasTrunfo,
      data } = this.state;
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
        { data.map((e, index) => (<Card
          key={ index }
          cardName={ e.cardName }
          cardDescription={ e.cardDescription }
          cardAttr1={ e.cardAttr1 }
          cardAttr2={ e.cardAttr2 }
          cardAttr3={ e.cardAttr3 }
          cardImage={ e.cardImage }
          cardRare={ e.cardRare }
          cardTrunfo={ e.cardTrunfo }
        />))}
      </>
    );
  }
}

export default App;
