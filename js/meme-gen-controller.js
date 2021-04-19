var gCanvas;
var gCtx;

function onInit() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function onAddLine() {
  addNewLine();

  const line = getSelectedLine();

  drawTextOnCanvas(line, gCanvas, gCtx);
  updateElAttr('.meme-editor-modal input[name="lineInput"]', 'value', '');
}

function onChangeLine() {
  incSelectedLineId();
  renderLineInput();
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

  drawImgOnCanvas(img.url, gCanvas, gCtx);
  drawMultiTxtOnCanvas(meme.lines, gCanvas, gCtx);
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
  drawImgOnCanvas(imgUrl, gCanvas, gCtx);
  onAddLine();
  onAddLine();
  renderLineInput();
  incSelectedLineId();
}

function renderLineInput() {
  const line = getSelectedLine();

  if (!line) return;

  updateElAttr('.meme-editor-modal input[name="lineInput"]', 'value', line.txt);
}