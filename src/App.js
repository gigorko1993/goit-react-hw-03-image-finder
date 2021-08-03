import React, { Component } from 'react';

import Searchbar from './Components/Searchbar';
import fetchImage from './Components/api';
import ImageGallery from './Components/ImageGallery';
import s from './App.module.css';
console.log(s);

class App extends Component {
  state = {
    value: '',
    images: [],
  };

  // setTopic = val => {
  //   this.setState(prevState => {
  //     if (prevState.topic === val.toLowerCase()) {
  //       toast.dark('The same request! Try something another :)', {
  //         toastId: 'customId',
  //       });
  //       return;
  //     }

  //     return { topic: val.toLowerCase(), page: 1 };
  //   });
  // };

  setVal = val => {
    this.setState(prevState => {
      if (prevState.value === val.toLowerCase()) {
        alert('The same request! Try something another :)');
        return;
      }

      return { value: val.toLowerCase() };
    });
  };
  openModal() {
    console.log('ff');
  }

  componentDidUpdate(prevProps, prevState) {
    // this.setState({ isLoading: true });

    fetchImage(this.state.value, '1').then(res =>
      this.setState({ images: [...prevState.images, ...res.hits] }),
    );
    console.log(this.state.images); // .catch(error => this.setState({ error }))
    // .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    fetchImage();
    return (
      <>
        <Searchbar setVal={this.setVal} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.openModal}
        />
      </>
    );
  }
}

export default App;
