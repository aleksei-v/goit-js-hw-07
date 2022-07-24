import { galleryItems } from './gallery-items.js';

const makeImageGallery = document.querySelector(".gallery");

// const rowImageGallery = ({ preview, description, original }) => `<div class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div> `

// const imageGallery = galleryItems
//   .map(rowImageGallery)
//   .join(" ");
    
function createLi(images) {
  return images.reduce((acc, { preview, description, original }) => acc + `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div> `
  , "")
}
const result = createLi(galleryItems);

makeImageGallery.insertAdjacentHTML('beforeend', result);


function handleClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    const onPressEsc = (evt) => {
      if (evt.code === 'Escape') {
        modalImage.close()
      }
    }
    const modalImage = basicLightbox.create(
      `<img src="${evt.target.dataset.source}" width="800" height="600"/>`,
      {
        onShow: () => window.addEventListener('keydown', onPressEsc),
        onClose: () => window.removeEventListener('keydown', onPressEsc),
      }
    );
    modalImage.show();
  }        
}   
makeImageGallery.addEventListener('click', handleClick);

