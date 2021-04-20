const HIGHLIGHT_COLOR = 'red';
const PADDING_VALUE = 20;

function clearCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawImgOnCanvas(img, canvas, ctx) {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
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

function drawTextOnCanvas(data, canvas, ctx, highlight = false) {
  const { align, color, font, left, size, stroke, top, txt } = data;

  ctx.lineWidth = 2;
  ctx.strokeStyle = highlight ? HIGHLIGHT_COLOR : stroke;
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;

  const x = left === -1 ? _calcTextLeftValue(align, txt, canvas, ctx) : left;

  ctx.fillText(txt, x, top);
  ctx.strokeText(txt, x, top);
}

function drawMultiTxtOnCanvas(data, canvas, ctx, highlightTextId = -1) {
  data.forEach((element, index) => {
    if (index === highlightTextId) {
      drawTextOnCanvas(element, canvas, ctx, true);
    } else {
      drawTextOnCanvas(element, canvas, ctx);
    }
  });
}

function getCanvasData(canvas) {
  return canvas.toDataURL();
}

function resizeCanvas(canvas, size) {
  const { height, width } = size;

  canvas.height = height;
  canvas.width = width;
}

function _calcTextLeftValue(align, txt, canvas, ctx) {
  if (align === 'left') return PADDING_VALUE;

  const metrics = ctx.measureText(txt);

  if (align === 'center') return (canvas.width - Math.floor(metrics.width)) / 2;

  // align === 'right'
  return canvas.width - Math.floor(metrics.width) - PADDING_VALUE;
}