import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
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
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
    }));
  };

  render() {
    const {
      cardName,
      description,
      attr1,
      attr2,
      attr3,
      image,
      rare,
      agree,
      previewOn,
      isDisabled } = this.state;
    return (
      <Form
        handleChange={ this.handleChange }
        cardName={ cardName }
        description={ description }
        attr1={ attr1 }
        attr2={ attr2 }
        attr3={ attr3 }
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
