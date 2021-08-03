import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Loader from 'react-loader-spinner';
import Searchbar from './Components/Searchbar';
import fetchImage from './Components/api';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import s from './App.module.css';
console.log(s);

class App extends Component {
  state = {
    status: 'idle',
    value: '',
    images: [],
    page: 1,
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;
    if (value !== prevState.value || page !== prevState.page) {
      if (page === 1) {
        this.resetImage();
      }

      this.setState({ loader: true });

      fetchImage(value, page)
        .then(res =>
          this.setState({
            images: [...prevState.images, ...res.hits],
            status: 'resolved',
          }),
        )
        .catch(() => {
          this.setState({ status: 'rejected' });
        })
        .finally(() => {
          this.setState({ loading: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    }
  }
  setVal = val => {
    this.setState(prevState => {
      if (prevState.value === val.toLowerCase()) {
        alert('The same request! Try something another :)');
        return;
      }

      return { value: val.toLowerCase(), page: 1 };
    });
  };

  openModal() {
    console.log('ff');
  }
  resetImage() {
    this.setState({ images: [] });
  }
  loadMore() {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  }

  render() {
    const { status, loader, images } = this.state;
    return (
      <>
        <Searchbar setVal={this.setVal} />
        {status === 'idle' ? <h2>Input your query and search images</h2> : null}
        {status === 'resolved' ? (
          <>
            <ImageGallery images={images} onImageClick={this.openModal} />
            <Button onClick={this.loadMore} />
          </>
        ) : null}
        {loader && (
          <Loader type="Bars" color="#00BFFF" height={150} width={150} />
        )}
        {status === 'rejected' ? <h2>Error, try again</h2> : null}
      </>
    );
  }
}

export default App;
