const FILTER_LIST_SELECTOR = '.filter-list-container';
const GALLERY_SELECTOR = '.cards-gallery';
const REMOVE_BUT_SELECTOR = '.btn-remove-meme';

function onInit() {
  initKeywords();
  initEditor();
  renderImgs();
  renderFilterList();
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

function renderImgs() {
  const imgs = getImgs();
  const strHTML = imgs.map(img => {
    return `  
      <div class="card" onclick="onOpenEditorWithImg('${img.id}')">
        <img src="${img.url}" alt="meme-${img.id}">
      </div>`;
  });

  renderToGallery(strHTML);
}

function onOpenEditorWithImg(imgId) {
  document.body.classList.add('modal-open');

  const id = Number.parseInt(imgId);

  clearMeme();
  updateSelectedImgId(id);
  _initEditorWithImg();
  renderEditor();
  openEditor();
}

function onOpenEditorWithMeme(memeId) {
  document.body.classList.add('modal-open');

  const meme = updateCurrentMemeById(memeId);

  // meme was not found => gMeme was not updated
  if (!meme) return;

  removeClass(REMOVE_BUT_SELECTOR, 'hide');
  renderEditor();
  openEditor();
}

function renderMemes() {
  const memes = getSavedMemes();

  if (!Array.isArray(memes)) return;

  const strHTML = memes.map(meme => {
    return `  
      <div class="card" onclick="onOpenEditorWithMeme('${meme.id}')">
        <img src="${meme.dataUrl}" alt="meme-${meme.id}">
      </div>`;
  });

  renderToGallery(strHTML);
}

function renderToGallery(html) {
  updateElAttr(GALLERY_SELECTOR, 'innerHTML', html.join(''));
}

function renderSearchBar(filter) {
  updateElAttr('input[name="filterMeme"]', 'value', filter);
}

function onCloseEditor() {
  document.body.classList.remove('modal-open');
  closeEditor();
}

function onImgFilter(filter) {
  changeImgFiler(filter);
  renderImgs();
  renderFilterList();
}

function onFilterSearch(filter) {
  changeImgFiler(filter);
  renderSearchBar(filter);
  renderImgs();
  renderFilterList();
}

function onOpenSavedMemes() {
  const memes = getSavedMemes();

  renderMemes(memes);
}

function closeEditor() {
  addClass(REMOVE_BUT_SELECTOR, 'hide');
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none');
}

function openEditor() {
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex');
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

function _initEditorWithImg() {
  openEditor();
  addNewLine();
  addNewLine();
  closeEditor();
}