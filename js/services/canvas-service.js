function clearCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function drawImgOnCanvas(imgUrl, canvas, ctx) {
  const img = new Image(450, 450);

  img.src = imgUrl;

  gCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
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
  const { align, color, font, size, top, txt } = data;
  const x = canvas.width / 2;

  ctx.lineWidth = 2;
  ctx.strokeStyle = highlight ? 'red' : 'black';
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;
  ctx.textAlign = align;

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