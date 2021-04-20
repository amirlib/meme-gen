const EDITOR_SELECTOR = '.meme-editor-modal';
const MAX_IMAGE_HEIGHT = 450;

var gCanvas;
var gCtx;

function initEditor() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function onAddLine() {
  addNewLine();
  renderEditor();
}

function onAlignLeft() {
  updateLineAlign('left');
}

function onAlignCenter() {
  updateLineAlign('center');
}

function onAlignRight() {
  updateLineAlign('right');
}

function onChangeFontColor(color) {
  updateSelectedLineFontColor(color);
  renderEditor();
}

function onChangeLine() {
  incSelectedLineId();
  renderEditor();
}

function onChangeLineInput(txt) {
  updateSelectedLineTxt(txt);
  renderCanvas();
}

function onChangeStrokeColor(color) {
  updateSelectedLineStroke(color);
  renderCanvas();
}

function onDecFontSize() {
  updateLineFontSize(-2);
}

function onIncFontSize() {
  updateLineFontSize(2);
}

function onLineDown() {
  updateLineTop(10);
}

function onLineUp() {
  updateLineTop(-10);
}

function updateLineAlign(align) {
  updateSelectedLineAlign(align);
  renderCanvas();
}

function updateLineFontSize(diff) {
  updateSelectedLineFontSize(diff);
  renderCanvas();
}

function updateLineTop(diff) {
  updateSelectedLineTop(diff);
  renderCanvas();
}

function onCloseEditor() {
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none');
}

function onDownloadMeme(el) {
  const meme = getCanvasData(gCanvas);

  el.href = meme;
  el.download = 'my-meme';
}

function onOpenEditor(imgId) {
  const id = Number.parseInt(imgId);

  clearMeme();
  updateSelectedImgId(id);
  renderModal(id);
}

function renderCanvas() {
  const meme = getCurrentMeme();
  const imgMeme = getImgById(meme.selectedImgId);
  const img = new Image();

  img.src = imgMeme.url;
  img.onload = () => {
    const size = _calcCanvasDimensions(img.width, img.height);

    resizeCanvas(gCanvas, size);
    drawImgOnCanvas(img, gCanvas, gCtx);
    drawMultiTxtOnCanvas(meme.lines, gCanvas, gCtx, meme.selectedLineId);
  };
}

function renderEditor() {
  renderCanvas();
  renderLineInput();
}

function renderModal() {
  _firstCanvasRender();
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex');
}

function renderLineInput() {
  const line = getSelectedLine();

  if (!line) return;

  updateElAttr(`${EDITOR_SELECTOR} input[name="lineInput"]`, 'value', line.txt);
}

function _calcCanvasDimensions(srcWidth, srcHeight) {
  const elContainer = document.querySelector('.editor-canvas-container');
  const maxHeight = MAX_IMAGE_HEIGHT > elContainer.offsetHeight ? elContainer.offsetHeight : MAX_IMAGE_HEIGHT;
  const maxWidth = elContainer.offsetWidth;

  return calcImgDimensions(srcWidth, srcHeight, maxWidth, maxHeight);
}

function _firstCanvasRender() {
  addNewLine();
  addNewLine();
  renderEditor();
}