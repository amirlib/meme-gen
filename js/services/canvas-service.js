function drawImgOnCanvas(imgUrl, canvas, ctx) {
  const img = new Image(450, 450);

  img.src = imgUrl;

  ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
}

function drawTextOnCanvas(data, canvas, ctx) {
  const { align, color, font, size, top, txt } = data;
  const x = canvas.width / 2;

  ctx.lineWidth = 2;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = color;
  ctx.font = `${size}px ${font}`;
  ctx.textAlign = align;

  ctx.fillText(txt, x, top);
  ctx.strokeText(txt, x, top);
}

function drawMultiTxtOnCanvas(data, canvas, ctx) {
  data.forEach(element => drawTextOnCanvas(element, canvas, ctx));
}