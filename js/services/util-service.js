const gTouchEvs = ['touchstart', 'touchmove', 'touchend'];

function calcImgRatio(srcWidth, srcHeight, maxWidth, maxHeight) {
  return Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
}

function calcImgDimensions(srcWidth, srcHeight, maxWidth, maxHeight) {
  const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

  return { width: srcWidth * ratio, height: srcHeight * ratio };
}

function updateElAttr(selector, key, value) {
  const elEditor = document.querySelector(selector);

  if (!elEditor) return;

  elEditor[key] = value;
}

function updateElStyleAttr(selector, key, value) {
  const elEditor = document.querySelector(selector);

  if (!elEditor) return;

  elEditor.style[key] = value;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function getEvPos(ev) {
  const pos = {
    x: ev.offsetX,
    y: ev.offsetY
  };

  if (gTouchEvs.includes(ev.type)) {
    ev.preventDefault();

    ev = ev.changedTouches[0];
    pos.x = ev.pageX - ev.target.offsetLeft - ev.target.clientLeft;
    pos.y = ev.pageY - ev.target.offsetTop - ev.target.clientTop;
  };

  return pos;
}

function makeId(length = 5) {
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';

  for (let i = 0; i < length; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return id;
}
