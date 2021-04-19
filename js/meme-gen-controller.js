var gCanvas;
var gCtx;

function onInit() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function onOpenEditor(imgId) {
  renderModal(imgId);
}

function renderModal(imgId) {
  const img = getImageById(Number.parseInt(imgId));

  if (!img) return;

  renderCanvas(img.url);
  updateElStyle('.meme-editor-modal', 'display', 'flex');
}

function renderCanvas(imgUrl) {
  drawImgOnCanvas(imgUrl, gCanvas, gCtx);
  onAddLine();
  onAddLine();
}

function onAddLine() {
  addNewLine();

  const line = getLastLine();

  drawTextOnCanvas(line, gCanvas, gCtx);
}