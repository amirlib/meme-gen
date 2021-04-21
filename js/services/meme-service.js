const MEMES_DB_KEY = 'memesDb';
const MIN_LEFT_VALUE = 20;
const MIN_TOP_VALUE = 30;

var gMeme = getDefaultMemeObj();

_initMemeService();

function addNewLine() {
  gMeme.lines.push(
    {
      color: 'white',
      font: 'Impact',
      left: _calcLineLeftValue('Text here', 'center', 40, 'Impact'),
      size: 40,
      stroke: 'black',
      top: _calcLineTopValue(),
      txt: 'Text here',
    }
  );

  gMeme.selectedLineId = gMeme.lines.length - 1;
}

function removeCurrentLine() {
  if (gMeme.selectedLineId === -1) return;

  gMeme.lines.splice(gMeme.selectedLineId, 1);
  gMeme.selectedLineId = gMeme.lines.length > 0 ? gMeme.lines.length - 1 : -1;
}

function clearMeme() {
  gMeme = getDefaultMemeObj();
}

function updateCurrentMemeById(id) {
  const memes = loadFromStorage(MEMES_DB_KEY);
  const meme = memes.find(meme => meme.id === id);

  if (meme) gMeme = meme;

  return meme;
}

function updateSelectedLineAlign(align) {
  if (align !== 'left' && align !== 'center' && align !== 'right') return;
  if (gMeme.lines.length === 0) return;

  const { font, size, txt } = gMeme.lines[gMeme.selectedLineId];

  gMeme.lines[gMeme.selectedLineId].left = _calcLineLeftValue(txt, align, size, font);
}

function updateSelectedLineFontColor(color) {
  if (gMeme.lines.length === 0) return;

  gMeme.lines[gMeme.selectedLineId].color = color;
}

function updateSelectedLineFontSize(diff) {
  if (gMeme.lines.length === 0) return;

  const size = gMeme.lines[gMeme.selectedLineId].size + diff;

  if (size < 10) return;

  gMeme.lines[gMeme.selectedLineId].size = size;
}

function updateSelectedLinePos(diffX, diffY) {
  updateSelectedLineLeft(diffX);
  updateSelectedLineTop(diffY);
}

function updateSelectedLineStroke(stroke) {
  if (gMeme.lines.length === 0) return;

  gMeme.lines[gMeme.selectedLineId].stroke = stroke;
}

function updateSelectedLineLeft(diff) {
  if (gMeme.lines.length === 0) return;

  const img = getImgById(gMeme.selectedImgId);
  const canvasSize = calcCanvasDimensions(img.size.width, img.size.height);
  let left = gMeme.lines[gMeme.selectedLineId].left + diff;

  if (left < MIN_LEFT_VALUE) left = MIN_LEFT_VALUE;
  if (left > canvasSize.width - MIN_LEFT_VALUE) left = canvasSize.width - MIN_LEFT_VALUE;

  gMeme.lines[gMeme.selectedLineId].left = left;
}

function updateSelectedLineTop(diff) {
  if (gMeme.lines.length === 0) return;

  const img = getImgById(gMeme.selectedImgId);
  const canvasSize = calcCanvasDimensions(img.size.width, img.size.height);
  let top = gMeme.lines[gMeme.selectedLineId].top + diff;

  if (top < MIN_TOP_VALUE) top = MIN_TOP_VALUE;
  if (top > canvasSize.height - MIN_TOP_VALUE) top = canvasSize.height - MIN_TOP_VALUE;

  gMeme.lines[gMeme.selectedLineId].top = top;
}

function updateSelectedLineTxt(txt) {
  if (gMeme.lines.length === 0) return;

  gMeme.lines[gMeme.selectedLineId].txt = txt;
}

function updateSelectedImgId(id) {
  if (!isImgExists(id)) return

  gMeme.selectedImgId = id;
}

function updateSelectedLineId(id) {
  if (id < 0 || id >= gMeme.lines.length) return;

  gMeme.selectedLineId = id;
}

function incSelectedLineId() {
  if (gMeme.lines.length === 0) return;

  if (gMeme.selectedLineId + 1 === gMeme.lines.length) {
    gMeme.selectedLineId = 0;
  } else {
    gMeme.selectedLineId++;
  }
}

function getCurrentMeme() {
  return JSON.parse(JSON.stringify(gMeme));
}

function getDefaultMemeObj() {
  return {
    id: makeId(),
    lines: [],
    selectedImgId: 0,
    selectedLineId: -1,
  }
}

function getSavedMemes() {
  return loadFromStorage(MEMES_DB_KEY);
}

function getSelectedLine() {
  if (gMeme.lines.length === 0) return null;

  return JSON.parse(JSON.stringify(gMeme.lines[gMeme.selectedLineId]));
}

function removeSavedMeme() {
  const memes = loadFromStorage(MEMES_DB_KEY);
  const memeIdx = memes.findIndex(meme => meme.id === gMeme.id);

  if (memeIdx === -1) return;

  memes.splice(memeIdx, 1);
  saveToStorage(MEMES_DB_KEY, memes);
}

function saveMeme(meme, dataUrl) {
  const memes = loadFromStorage(MEMES_DB_KEY);

  meme = JSON.parse(JSON.stringify(meme));
  meme.dataUrl = dataUrl;

  const memeIdx = memes.findIndex(obj => obj.id === meme.id);

  if (memeIdx !== -1) {
    memes[memeIdx] = meme;
  } else {
    memes.push(meme);
  }

  saveToStorage(MEMES_DB_KEY, memes);
}

function _calcLineLeftValue(txt, align, size, font) {
  if (align === 'left') return MIN_LEFT_VALUE;

  const ctx = getCanvasCtx();

  ctx.save();

  ctx.lineWidth = 2;
  ctx.font = `${size}px ${font}`;
  ctx.textBaseline = 'middle';

  const lineMetrics = ctx.measureText(txt);

  ctx.restore();

  const img = getImgById(gMeme.selectedImgId);
  const canvasSize = calcCanvasDimensions(img.size.width, img.size.height);

  if (align === 'center') return (canvasSize.width - Math.floor(lineMetrics.width)) / 2;

  // align === 'right'
  return canvasSize.width - Math.floor(lineMetrics.width) - MIN_LEFT_VALUE;
}

function _calcLineTopValue() {
  if (gMeme.lines.length === 0) return MIN_TOP_VALUE;

  const img = getImgById(gMeme.selectedImgId);
  const canvasSize = calcCanvasDimensions(img.size.width, img.size.height);

  if (gMeme.lines.length === 1) return canvasSize.height - MIN_TOP_VALUE;

  return canvasSize.height / 2;
}

function _initMemeService() {
  const memes = loadFromStorage(MEMES_DB_KEY);

  if (!memes) saveToStorage(MEMES_DB_KEY, []);
}
