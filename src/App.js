import React, { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchImages } from './Components/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from 'react-loader-spinner';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import Button from './Components/Button';
import Modal from './Components/Modal';

class App extends Component {
  state = {
    status: 'idle',
    value: '',
    loader: false,
    page: 1,
    images: [],
    showModal: false,
    modalContent: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, value } = this.state;
    if (value !== prevState.value || page !== prevState.page) {
      if (page === 1) {
        this.resetImages();
      }

      this.setState({ loader: true });

      fetchImages(page, value)
        .then(data => {
          if (data.hits.length < 12) {
            toast.warn('No more images to load', {
              toastId: 'anotherCustomId',
            });
          }

          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            status: 'resolved',
          }));
        })
        .catch(() => this.setState({ status: 'rejected' }))
        .finally(() => {
          this.setState({ loader: false });
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    }
  }

  setValue = val => {
    this.setState(prevState => {
      if (prevState.value === val.toLowerCase()) {
        toast.dark('The same request! Try something another :)', {
          toastId: 'customId',
        });
        return;
      }

      return { value: val.toLowerCase(), page: 1 };
    });
  };

  showModal = () => {
    this.setState(prevState => {
      return { showModal: !prevState.showModal };
    });
  };

  resetImages = () => {
    this.setState({ images: [] });
  };

  setPage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onImgClick = id => {
    const modalImg = this.state.images.find(img => img.id === id);
    this.setState({ modalContent: modalImg });
    this.showModal();
  };

  render() {
    const { status, showModal, images, loader, modalContent } = this.state;

    return (
      <div>
        <Searchbar onClick={this.setValue} />

        {status === 'idle' ? (
          <h2>
            Use the search bar above if you are looking to get an awesome
            wallpaper
          </h2>
        ) : null}
        {status === 'resolved' ? (
          <>
            <ImageGallery images={images} onImgClick={this.onImgClick} />
            <Button onClick={this.setPage} />
          </>
        ) : null}
        {loader && (
          <Loader
            className="Loader"
            type="Grid"
            color="#9900cc"
            height={180}
            width={180}
          />
        )}
        {status === 'rejected' ? (
          <h2>Some error occured while fetching requested images</h2>
        ) : null}
        {showModal && (
          <Modal showModal={this.showModal}>
            <img src={modalContent.largeImageURL} alt={modalContent.tags} />
          </Modal>
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
