const DEFAULT_TOP_VALUE = 200;
const MAX_TOP_VALUE = 380;
const MIN_TOP_VALUE = 50;

var gImgs = [
  { id: 1, url: './images/memes-bg/1.jpg', keywords: ['funny', 'politics', 'celebrity'] },
];
var gMeme = {
  lines: [],
  selectedImgId: 0,
  selectedLineId: -1,
}

function getCurrentMeme() {
  return JSON.parse(JSON.stringify(gMeme));
}

function updateSelectedLineAlign(align) {
  if (align !== 'left' && align !== 'center' && align !== 'right') return;

  // if align value changes, it will override the left value until user changes the left value specifically
  gMeme.lines[gMeme.selectedLineId].align = align;
  gMeme.lines[gMeme.selectedLineId].left = -1;
}

function updateSelectedLineFontSize(diff) {
  const size = gMeme.lines[gMeme.selectedLineId].size + diff;

  if (size < 10) return;

  gMeme.lines[gMeme.selectedLineId].size = size;
}

function updateSelectedLineTop(diff) {
  const top = gMeme.lines[gMeme.selectedLineId].top + diff;

  if (top < MIN_TOP_VALUE || top > MAX_TOP_VALUE) return;

  gMeme.lines[gMeme.selectedLineId].top = top;
}

function updateSelectedLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineId].txt = txt;
}

function updateSelectedImgId(id) {
  if (!gImgs.some(img => img.id === id)) return;

  gMeme.selectedImgId = id;
}

function incSelectedLineId() {
  if (gMeme.lines.length === 0) return;

  if (gMeme.selectedLineId + 1 === gMeme.lines.length) {
    gMeme.selectedLineId = 0;
  } else {
    gMeme.selectedLineId++;
  }
}

function getImgById(id) {
  const img = gImgs.find(img => img.id === id);

  if (!img) return;

  return JSON.parse(JSON.stringify(img));
}

function addNewLine() {
  gMeme.lines.push(
    {
      align: 'center',
      color: 'white',
      font: 'Impact',
      left: -1,
      size: 40,
      top: _calcLineTopValue(),
      txt: 'Text here',
    }
  );

  gMeme.selectedLineId = gMeme.lines.length - 1;
}

function getSelectedLine() {
  return JSON.parse(JSON.stringify(gMeme.lines[gMeme.selectedLineId]));
}

function _calcLineTopValue() {
  if (gMeme.lines.length === 0) return MIN_TOP_VALUE;
  if (gMeme.lines.length === 1) return MAX_TOP_VALUE;

  return DEFAULT_TOP_VALUE;
}