import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';


document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  function createGalleryItem(item) {
    const galleryItem = document.createElement('li');
    galleryItem.classList.add('gallery__item');

    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    const image = document.createElement('img');
    image.classList.add('gallery__image');
    image.src = item.preview;
    image.alt = item.description;
    image.setAttribute('data-source', item.original);

    link.appendChild(image);
    galleryItem.appendChild(link);

    return galleryItem;
  }

  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });

      var lightbox = new SimpleLightbox('.gallery a', 
      {
        captionsData: 'alt',
        captions: true, 
        captionDelay: 250,
    });
});