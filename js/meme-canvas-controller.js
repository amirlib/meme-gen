var gCanvas;
var gCtx;
var gSelectedLineIdx = -1;

function initCanvas() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');
  gCtx = gCanvas.getContext('2d');
}

function getCanvas() {
  return gCanvas;
}

function getCanvasCtx() {
  return gCtx;
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
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex'); //TODO: create function for this logic in editor controller
  addNewLine();
  addNewLine();
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none'); //TODO: create function for this logic in editor controller
}

function onCanvasMouseDown() {
  const pos = getEvPos(event)
  const lines = getCurrentMeme().lines;

  lines.forEach((line, index) => {
    if (_isLineHit(pos, line)) gSelectedLineIdx = index;
  });

  console.log('gSelectedLineIdx', gSelectedLineIdx)
}

function _isLineHit(pos, line) {
  const { left, size, top, txt } = line
  const height = size;
  console.log('height', height)
  const width = Math.floor(gCtx.measureText(txt).width);
  console.log('width', width)
  console.log('left', left)
  return (pos.x >= left && pos.x <= left + width && pos.y >= top - height && pos.y <= top);

}