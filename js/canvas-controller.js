var gCanvas;
var gDragAndDrop = _resetDragAndDropObj();

function initCanvas() {
  gCanvas = document.querySelector('.meme-editor-modal canvas');

  setCanvasCtx(gCanvas.getContext('2d'));
}

function renderCanvas(meme, ctx, isHighlight = true, callback) {
  const imgMeme = getImgById(meme.selectedImgId);
  const img = new Image();

  img.src = imgMeme.url;
  img.onload = () => {
    const size = calcCanvasDimensions(img.width, img.height);
    const highlightId = isHighlight ? meme.selectedLineId : -1;

    resizeCanvas(ctx.canvas, size);
    drawImgOnCanvas(img, ctx);
    drawMultiTxtOnCanvas(meme.lines, ctx, highlightId);

    if (callback) callback(ctx.canvas);
  };
}

function onCanvasMouseDown() {
  const { lines, selectedLineId } = getCurrentMeme();
  const pos = getEvPos(event);

  lines.forEach((line, index) => {
    if (_isLineHit(pos, line)) {
      gDragAndDrop.lineId = index;
      gDragAndDrop.lastX = pos.x;
      gDragAndDrop.lastY = pos.y;

      updateSelectedLineId(index);
    }
  });

  if (gDragAndDrop.lineId !== -1) renderEditor();
}

function onCanvasTouchStart() {
  event.preventDefault();

  onCanvasMouseDown();
}

function onCanvasMouseMove() {
  if (gDragAndDrop.lineId === -1) return;

  const pos = getEvPos(event);
  const dx = pos.x - gDragAndDrop.lastX;
  const dy = pos.y - gDragAndDrop.lastY;

  gDragAndDrop.lastX = pos.x;
  gDragAndDrop.lastY = pos.y;

  updateSelectedLinePos(dx, dy);
  renderCanvas(getCurrentMeme(), gCtx);
}

function onCanvasTouchMove() {
  event.preventDefault();

  onCanvasMouseMove();
}

function onCanvasMouseUp() {
  gDragAndDrop = _resetDragAndDropObj();

}

function onCanvasTouchEnd() {
  event.preventDefault();

  onCanvasMouseUp();
}

function onCanvasMouseOut() {
  gDragAndDrop = _resetDragAndDropObj();
}

function _resetDragAndDropObj() {
  return {
    lastX: -1,
    lastY: -1,
    lineId: -1,
  };
}

function _isLineHit(pos, line) {
  const { font, left, size, top, txt } = line;
  const measures = measureTxt(font, size, txt);
  const width = Math.floor(measures.width);

  // because text is written middle from the top value so the calculation must contain the correct start point
  return (pos.x >= left && pos.x <= left + width && pos.y >= top - size / 2 && pos.y <= top + size / 2);
}