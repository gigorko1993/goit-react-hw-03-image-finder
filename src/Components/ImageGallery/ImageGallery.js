import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ image, onImageClick }) => {
  return (
    <ul className={s.ImageGallery}>
      <ImageGalleryItem images={image} onImagClick={onImageClick} />
    </ul>
  );
};

export default ImageGallery;
