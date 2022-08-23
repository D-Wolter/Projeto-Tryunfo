import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
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

  render() {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    return (
      <Form
        handleChange={ this.handleChange }
        name={ name }
        description={ description }
        attr1={ attr1 }
        attr2={ attr2 }
        attr3={ attr3 }
        image={ image }
        rare={ rare }
      />
    );
  }
}

export default App;
