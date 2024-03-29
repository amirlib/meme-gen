const FILTER_LIST_SELECTOR = '.filter-list-container';
const GALLERY_SELECTOR = '.cards-gallery';
const REMOVE_BUT_SELECTOR = '.btn-remove-meme';

var gIsEditorOpen = false;
var gViewMode = 'gallery'; // gallery, memes

function onInit() {
  initKeywords();
  initEditor();
  renderImgs();
  renderFilterList();
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

  gIsEditorOpen = true;

  const id = Number.parseInt(imgId);

  clearMeme();
  updateSelectedImgId(id);
  _initEditorWithImg();
  renderEditor();
  openEditor();
}

function onOpenEditorWithMeme(memeId) {
  document.body.classList.add('modal-open');

  gIsEditorOpen = true;

  const meme = updateCurrentMemeById(memeId);

  // meme was not found => gMeme was not updated
  if (!meme) return;

  showDeleteMemeBut();
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

function onCloseEditor() {
  document.body.classList.remove('modal-open');
  hideDeleteMemeBut();
  closeEditor();

  gIsEditorOpen = false;

  if (gViewMode === 'memes') onOpenSavedMemes();
}

function onImgSearchInput(search) {
  _searchImg(search);
}

function onImgSearchFilterClick(search) {
  renderSearchBoxValue(search);
  _searchImg(search);
}

function onOpenSavedMemes() {
  const memes = getSavedMemes();

  gViewMode = 'memes';

  if (gIsEditorOpen) {
    onCloseEditor();

    gIsEditorOpen = false;
  }

  renderMemes(memes);
}

function onResetSearchBox() {
  onImgSearchFilterClick('');
}

function closeEditor() {
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none');
}

function showDeleteMemeBut() {
  removeClass(REMOVE_BUT_SELECTOR, 'hide');
}

function hideDeleteMemeBut() {
  addClass(REMOVE_BUT_SELECTOR, 'hide');
}

function openEditor() {
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex');
}

function renderFilterList() {
  const elFilterList = document.querySelector(FILTER_LIST_SELECTOR);
  const keywords = getDisplayKeywords();
  const strHTML = keywords.map(keyword => {
    const { key, clicks } = keyword;
    const fontSize = _calcFilterFontSizeByClicks(clicks);

    return `  
      <button type=button" class="btn-filter" onclick="onImgSearchFilterClick('${key}')" style="font-size: ${fontSize}rem;">
        ${key}
      </button>`;
  });

  elFilterList.innerHTML = strHTML.join('');
}

function renderSearchBoxValue(search) {
  updateElAttr('input[name="searchImg"]', 'value', search);
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

function _searchImg(search) {
  changeImgFiler(search);
  renderFilterList();
  renderImgs();
}