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