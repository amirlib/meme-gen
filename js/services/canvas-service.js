const CANVAS_CONTAINER_SELECTOR = '.editor-canvas-container';
const HIGHLIGHT_COLOR = 'red';
const LINE_WIDTH = 2;
const TEXT_BASE_LINE = 'middle';

var gCtx;

function clearCanvas(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function calcCanvasDimensions(srcWidth, srcHeight) {
  const elContainer = document.querySelector(CANVAS_CONTAINER_SELECTOR);
  const maxHeight = MAX_IMAGE_HEIGHT > elContainer.offsetHeight ? elContainer.offsetHeight : MAX_IMAGE_HEIGHT;
  const maxWidth = elContainer.offsetWidth;

  return calcImgDimensions(srcWidth, srcHeight, maxWidth, maxHeight);
}

function drawImgOnCanvas(img, ctx) {
  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawLineOnCanvas(startX, startY, endX, endY, ctx, dash = []) {
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'white';

  ctx.beginPath();
  ctx.setLineDash(dash);
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.closePath();
  ctx.stroke();
}

function drawTextOnCanvas(data, ctx, highlight = false) {
  const { color, font, left, size, stroke, top, txt } = data;

  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = highlight ? HIGHLIGHT_COLOR : stroke;
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;
  ctx.textBaseline = TEXT_BASE_LINE;

  ctx.fillText(txt, left, top);
  ctx.strokeText(txt, left, top);
}

function drawMultiTxtOnCanvas(data, ctx, highlightTextId = -1) {
  data.forEach((element, index) => {
    if (index === highlightTextId) {
      drawTextOnCanvas(element, ctx, true);
    } else {
      drawTextOnCanvas(element, ctx);
    }
  });
}

function getCanvasCtx() {
  return gCtx;
}

function setCanvasCtx(ctx) {
  return gCtx = ctx;
}

function getCanvasData(canvas) {
  return canvas.toDataURL();
}

function measureTxt(font, size, txt) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  ctx.lineWidth = LINE_WIDTH;
  ctx.font = `${size}px ${font}`;
  ctx.textBaseline = TEXT_BASE_LINE;

  return ctx.measureText(txt);
}

function resizeCanvas(canvas, size) {
  const { height, width } = size;

  canvas.height = height;
  canvas.width = width;
}
