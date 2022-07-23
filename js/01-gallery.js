import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeImageGallery = document.querySelector(".gallery");
const rowImageGallery = ({ preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${preview}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div> `

const imageGallery = galleryItems
    .map(rowImageGallery)
    .join(" ")

makeImageGallery.insertAdjacentHTML('beforeend', imageGallery);


const handleClick = (evt) => {
    evt.preventDefault()
    console.log(evt.target.src);

}

makeImageGallery.addEventListener('click', handleClick);