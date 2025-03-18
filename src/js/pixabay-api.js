import axios from 'axios';

const API_PIXABAY_URL = 'https://pixabay.com/api/';
const API_KEY = '49290147-91bc44204d790a43c13c008af';

const itemsPerPage = 15;
let currentPage = 1;
let searchText = '';

export async function getFirstPhotosBlock(search) {
  currentPage = 1;
  searchText = search;
  return await getPhotos(search);
}

export async function getNextPhotosBlock() {
  currentPage++;
  return await getPhotos(searchText);
}

async function getPhotos(text) {
  try {
    debugger;
    const encodedText = encodeURIComponent(text);
    const params = {
      key: API_KEY,
      q: encodedText,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: itemsPerPage,
      page: currentPage,
    };

    const response = await axios.get(API_PIXABAY_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}
