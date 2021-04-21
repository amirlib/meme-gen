const CANVAS_CONTAINER_SELECTOR = '.editor-canvas-container';
const HIGHLIGHT_COLOR = 'red';
const LINE_WIDTH = 2;
const TEXT_BASE_LINE = 'middle';

var gCtx;

function calcCanvasDimensions(srcWidth, srcHeight) {
  const elContainer = document.querySelector(CANVAS_CONTAINER_SELECTOR);
  const maxHeight = MAX_IMAGE_HEIGHT > elContainer.offsetHeight ? elContainer.offsetHeight : MAX_IMAGE_HEIGHT;
  const maxWidth = elContainer.offsetWidth;

  return calcImgDimensions(srcWidth, srcHeight, maxWidth, maxHeight);
}

function drawImgOnCanvas(img, ctx) {
  ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawTextOnCanvas(data, ctx, highlight = false) {
  const { color, font, left, size, stroke, top, txt } = data;

  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = stroke;
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;
  ctx.textBaseline = TEXT_BASE_LINE;

  if (highlight) drawHighlightRect(ctx, data);

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

function drawHighlightRect(ctx, data) {
  const { font, left, size, top, txt } = data;
  const measures = measureTxt(font, size, txt);
  const width = Math.floor(measures.width);

  ctx.save();

  ctx.strokeStyle = HIGHLIGHT_COLOR;
  ctx.rect(left - 10, top - size / 2 - 10, width + 20, size + 20);
  ctx.stroke();
  ctx.restore();
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
