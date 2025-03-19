import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { clearGallery, drawGallery } from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

let currentPage = 1;
let searchText = '';

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
});

function setupEventListeners() {
  document.querySelector('form.form').addEventListener('submit', handleSearch);
  document
    .querySelector('.button.load-more')
    .addEventListener('click', handleLoadMore);
}

async function handleSearch(event) {
  event.preventDefault();
  searchText = event.target.querySelector('input').value;
  if (!searchText.trim()) return;

  clearGallery();
  toggleLoader(true);
  
  currentPage = 1;
  
  try {
    const data = await getPhotos(searchText, currentPage);
    handleGalleryUpdate(data);
  } catch (error) {
    iziToastError('Error fetching images: ' + error.message);
  } finally {
    toggleLoader(false);
  }
}

async function handleLoadMore(event) {
  event.preventDefault();
  toggleLoader(true);

  try {
    const data = await getPhotos(searchText, ++currentPage);
    handleGalleryUpdate(data, true);
    smoothScroll();
  } catch (error) {
    iziToastError('Error fetching images: ' + error.message);
  } finally {
    toggleLoader(false);
  }
}

function handleGalleryUpdate(data, append = false) {
  if (data.hits.length) {
    drawGallery(data.hits, append);
    document.querySelector('.button.load-more').style.display = 'block';
  } else {
    if (append) {
      iziToastError(
        "We're sorry, but you've reached the end of search results."
      );
    } else {
      iziToastError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    document.querySelector('.button.load-more').style.display = 'none';
  }
}

function smoothScroll() {
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    const cardHeight =
      gallery.firstElementChild?.getBoundingClientRect().height || 0;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
  }
}

function iziToastError(errorMessage) {
  iziToast.error({
    message: errorMessage,
    close: true,
    position: 'topRight',
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    maxWidth: '432px',
    class: 'custom-iziToast',
  });
}

function toggleLoader(show) {
  document.querySelector('.loader').style.display = show ? 'block' : 'none';
}
