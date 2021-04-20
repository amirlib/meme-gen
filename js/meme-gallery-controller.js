const GALLERY_SELECTOR = '.cards-gallery';

function onInit() {
  initEditor();
  renderGallery();
}

function renderGallery() {
  const elGallery = document.querySelector(GALLERY_SELECTOR);
  const imgs = getImgs();
  const strHTML = imgs.map(img => {
    return `  
      <div class="card" onclick="onOpenEditor('${img.id}')">
        <img src="${img.url}" alt="meme-${img.id}">
      </div>`;
  });

  elGallery.innerHTML = strHTML.join('');
}