const FILTER_LIST_SELECTOR = '.filter-list-container';
const GALLERY_SELECTOR = '.cards-gallery';

function onInit() {
  initKeywords();
  initEditor();
  renderFilterList();
  renderGallery();
}

function renderFilterList() {
  const elFilterList = document.querySelector(FILTER_LIST_SELECTOR);
  const keywords = getDisplayKeywords();
  const strHTML = keywords.map(keyword => {
    return `  
      <button type=button" class="btn-filter" onclick="onFilterSearch('${keyword.key}')">
        ${keyword.key}
      </button>`;
  });

  elFilterList.innerHTML = strHTML.join('');
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

function onFilterMeme(filter) {
  changeImgFiler(filter);
  renderGallery();
}