import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightBoxGallery;

export function drawGallery(images, append = false) {
  const gallery = document.querySelector('.gallery');
  if (!append) {
    gallery.innerHTML = '';
  }
  images.forEach(item => {
    gallery.innerHTML += galleryItemTemplate(item);
  });
  if (lightBoxGallery) {
    lightBoxGallery.refresh();
  } else {
    initializeGallery();
  }
}

export function clearGallery() {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';
}

function galleryItemTemplate(item) {
  return `<li class="gallery-item">
              <a class="gallery-link" href="${item.largeImageURL}">
                  <img
                  class="gallery-image"
                  src="${item.webformatURL}"
                  data-source="${item.largeImageURL}"
                  alt="${item.tags}"
                  />
              </a>
                <div class="card-overlay">
                    <div class="param">
                        <span class="param-title">Likes</span>
                        <span class="param-value">${item.likes}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Views</span>
                        <span class="param-value">${item.views}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Comments</span>
                        <span class="param-value">${item.comments}</span>
                    </div>
                    <div class="param">
                        <span class="param-title">Downloads</span>
                        <span class="param-value">${item.downloads}</span>
                    </div>
                </div>
           </li>`;
}

function initializeGallery() {
  lightBoxGallery = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.8,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'outside',
    captionDelay: '250',
  });
}
