var gCanvas;
var gCtx;

function initCanvas() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function getCanvas() {
  return gCanvas;
}

function renderCanvas() {
  const meme = getCurrentMeme();
  const imgMeme = getImgById(meme.selectedImgId);
  const img = new Image();

  img.src = imgMeme.url;
  img.onload = () => {
    const size = calcCanvasDimensions(img.width, img.height);

    resizeCanvas(gCanvas, size);
    drawImgOnCanvas(img, gCanvas, gCtx);
    drawMultiTxtOnCanvas(meme.lines, gCanvas, gCtx, meme.selectedLineId);
  };
}

function firstCanvasRender() {
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex');
  addNewLine();
  addNewLine();
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none');
}