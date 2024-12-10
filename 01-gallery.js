import { galleryItems } from './gallery-items.js';
// Selectează elementul <ul> pentru galerie
const listEl = document.querySelector('.gallery');

// Creează și inserează elementele galeriei în pagină
const galleryMarkup = galleryItems
  .map(
    item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>
    </li>`
  )
  .join('');
listEl.innerHTML = galleryMarkup;

// Inițializează BasicLightbox pentru a deschide imaginea la dimensiune completă
const galleryItemsEl = document.querySelectorAll('.gallery__link');

galleryItemsEl.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); // Previi comportamentul implicit al linkului
    const largeImageUrl = item.getAttribute('href');

    const lightbox = basicLightbox.create(`
      <img src="${largeImageUrl}" alt="" />
    `);

    lightbox.show();
  });
});
