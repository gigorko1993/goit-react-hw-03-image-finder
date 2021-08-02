import React, { Component } from 'react';

import Searchbar from './Components/Searchbar';
import s from './App.module.css';
console.log(s);

class App extends Component {
  state = {
    value: '',
  };
  setVal(val) {
    this.setState(prevState => {
      if (prevState.value === val.toLowerCase()) {
        alert('The same request! Try something another :)');
        return;
      }

      return { value: val.toLowerCase() };
    });
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.setVal} />
      </>
    );
  }
}

export default App;
