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
  const { lines, selectedLineId } = getCurrentMeme();
  const pos = getEvPos(event);
  const firstLineId = selectedLineId;
  let currentLine = selectedLineId;

  lines.forEach((line, index) => {
    if (_isLineHit(pos, line)) {
      currentLine = index;

      updateSelectedLineId(index);
    }
  });

  if (firstLineId != currentLine) renderEditor();
}

function _isLineHit(pos, line) {
  const { left, size, top, txt } = line
  const height = size;
  const width = Math.floor(gCtx.measureText(txt).width);

  // because text is written middle from the top value so the calculation must contain the correct start point
  return (pos.x >= left && pos.x <= left + width && pos.y >= top - size / 2 - height && pos.y <= top + size / 2);
}