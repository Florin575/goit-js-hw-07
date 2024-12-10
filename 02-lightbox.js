import { galleryItems } from './gallery-items.js'; // Presupunem că acest fișier conține datele imaginilor

// Selectează elementul <ul> pentru galerie
const galleryContainer = document.querySelector('.gallery');

// Creează și inserează elementele galeriei în pagină
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;

// Funcția care creează HTML-ul galeriei
function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

// Inițializează SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',  // Afișează descrierea din atributul "alt" al imaginii
  captionDelay: 250,     // Adaugă o întârziere de 250ms pentru apariția descrierii
  enableKeyboard: true,  // Permite navigarea cu tastatura (stânga/dreapta)
});

console.log(galleryItems);
