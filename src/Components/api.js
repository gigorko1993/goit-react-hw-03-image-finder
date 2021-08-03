const API_KEY = '9062055-da883187fb30391728e11f5fd';

const fetchImage = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.json());
};

export default fetchImage;
