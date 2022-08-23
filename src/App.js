import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      image: '',
      rare: 'normal',
      agree: false,
      data: [],
      previewOn: false,
      isDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      console.log(value);
    });
  };

  saveClick = (objetoInfo) => {
    this.setState((prevState) => ({
      data: [...prevState.data, objetoInfo],
      previewOn: true,
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      image: '',
      rare: 'normal',
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      image,
      rare,
      agree,
      previewOn,
      isDisabled } = this.state;
    return (
      <Form
        handleChange={ this.handleChange }
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        image={ image }
        rare={ rare }
        agree={ agree }
        previewOn={ previewOn }
        saveClick={ this.saveClick }
        isDisabled={ isDisabled }
      />
    );
  }
}

export default App;
