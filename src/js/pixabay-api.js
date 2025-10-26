import axios from 'axios';

const API_KEY = '52944320-b7e1ddf3616ae70650c2bd4af'; // <-- Replace with your key
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  // Return the response.data (as required)
  return axios.get(BASE_URL, { params }).then(response => response.data);
}
