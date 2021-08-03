import React, { Component } from 'react';

import Searchbar from './Components/Searchbar';
import fetchImage from './Components/api';
// import ImageGallery from './Components/ImageGallery';
import s from './App.module.css';
console.log(s);

class App extends Component {
  state = {
    value: '',
    image: [],
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
  openModal() {
    console.log('ff');
  }

  componentDidUpdate() {
    // this.setState({ isLoading: true });

    fetchImage('react', '1').then(res =>
      this.setState({ images: [...prevState.images, ...res.hits] }),
    );
    console.log(this.state.image); // .catch(error => this.setState({ error }))
    // .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    fetchImage();
    return (
      <>
        <Searchbar onSubmit={this.setVal} />
        {/* <ImageGallery images={this.state.image} onImageClick={this.openModal} /> */}
      </>
    );
  }
}

export default App;
