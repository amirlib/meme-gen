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
    const { key, clicks } = keyword;
    const fontSize = _calcFilterFontSizeByClicks(clicks);

    return `  
      <button type=button" class="btn-filter" onclick="onFilterSearch('${key}')" style="font-size: ${fontSize}rem;">
        ${key}
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

function _calcFilterFontSizeByClicks(clicks) {
  const MIN_SIZE = 1;
  const MAX_SIZE = 3;
  const MAX_CLICKS = 100;
  const SIZE_CLICKS = 5;
  const SIZE_DIFF = 0.1;

  if (clicks > MAX_CLICKS) return MAX_SIZE;

  const level = Math.floor(clicks / SIZE_CLICKS);

  return MIN_SIZE + level * SIZE_DIFF;
}