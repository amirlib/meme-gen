const EDITOR_SELECTOR = '.meme-editor-modal';

var gCanvas;
var gCtx;

function onInit() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function onAddLine() {
  addNewLine();
  renderCanvas();
  renderLineInput();
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
  renderCanvas();
}

function onChangeLine() {
  incSelectedLineId();
  renderLineInput();
  renderCanvas();
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

function renderCanvas() {
  const meme = getCurrentMeme();
  const img = getImgById(meme.selectedImgId);

  clearCanvas(gCanvas, gCtx);
  drawImgOnCanvas(img.url, gCanvas, gCtx);
  drawMultiTxtOnCanvas(meme.lines, gCanvas, gCtx, meme.selectedLineId);
}

function onCloseEditor() {
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none');
  clearMeme();
}

function onDownloadMeme(el) {
  const meme = getCanvasData(gCanvas);

  el.href = meme;
  el.download = 'my-meme';
}

function onOpenEditor(imgId) {
  const id = Number.parseInt(imgId);

  updateSelectedImgId(id);
  renderModal(id);
}

function renderModal(imgId) {
  const img = getImgById(imgId);

  if (!img) return;

  firstCanvasRender(img.url);
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex');
}

function firstCanvasRender(imgUrl) {
  onAddLine();
  onAddLine();
  renderCanvas();
}

function renderLineInput() {
  const line = getSelectedLine();

  if (!line) return;

  updateElAttr(`${EDITOR_SELECTOR} input[name="lineInput"]`, 'value', line.txt);
}