var gCanvas;
var gCtx;

function onInit() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function onChangeLineInput(txt) {
  updateTxtSelectedLine(txt);
  renderCanvas();
}

function renderCanvas() {
  const meme = getCurrentMeme();
  const img = getImgById(meme.selectedImgId);

  drawImgOnCanvas(img.url, gCanvas, gCtx);
  drawMultiTxtOnCanvas(meme.lines, gCanvas, gCtx);
}

function onOpenEditor(imgId) {
  renderModal(imgId);
}

function renderModal(imgId) {
  const img = getImgById(Number.parseInt(imgId));

  if (!img) return;

  firstCanvasRender(img.url);
  updateElStyleAttr('.meme-editor-modal', 'display', 'flex');
}

function firstCanvasRender(imgUrl) {
  drawImgOnCanvas(imgUrl, gCanvas, gCtx);
  onAddLine();
  onAddLine();
}

function onAddLine() {
  addNewLine();

  const line = getLastLine();

  drawTextOnCanvas(line, gCanvas, gCtx);
  updateElAttr('.meme-editor-modal input[name="lineInput"]', 'value', '');
}