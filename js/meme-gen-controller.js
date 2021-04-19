var gCanvas;
var gCtx;

function onInit() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function onAddLine() {
  addNewLine();
  updateElAttr('.meme-editor-modal input[name="lineInput"]', 'value', '');
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

function onOpenEditor(imgId) {
  const id = Number.parseInt(imgId);

  updateSelectedImgId(id);
  renderModal(id);
}

function renderModal(imgId) {
  const img = getImgById(imgId);

  if (!img) return;

  firstCanvasRender(img.url);
  updateElStyleAttr('.meme-editor-modal', 'display', 'flex');
}

function firstCanvasRender(imgUrl) {
  onAddLine();
  onAddLine();
  renderCanvas();
  renderLineInput();
}

function renderLineInput() {
  const line = getSelectedLine();

  if (!line) return;

  updateElAttr('.meme-editor-modal input[name="lineInput"]', 'value', line.txt);
}