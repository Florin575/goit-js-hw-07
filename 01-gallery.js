import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.innerHTML = galleryMarkup;
galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`
    )
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) return;

  const imageSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageSource}" alt="${event.target.alt}" />
  `);

  instance.show();

  document.addEventListener('keydown', onEscapeClose);

  function onEscapeClose(e) {
    if (e.code === 'Escape') {
      instance.close();
      document.removeEventListener('keydown', onEscapeClose);
    }
  }
}

console.log(galleryItems);
