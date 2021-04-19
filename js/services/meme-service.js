var gImgs = [
  { id: 1, url: './images/memes-bg/1.jpg', keywords: ['funny', 'politics', 'celebrity'] },
];
var gMeme = {
  lines: [],
  selectedImgId: 0,
  selectedLineId: 0,
}

function getCurrentMeme() {
  return JSON.parse(JSON.stringify(gMeme));
}

function updateSelectedLineFontSize(diff) {
  const size = gMeme.lines[gMeme.selectedLineId].size + diff;

  if (size < 10) return;

  gMeme.lines[gMeme.selectedLineId].size = size;
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
      size: 40,
      top: getLineTopValue(),
      txt: 'Text here',
    }
  );

  gMeme.selectedLineId = gMeme.lines.length - 1;
}

function getLineTopValue() {
  if (gMeme.lines.length === 0) return 50;
  if (gMeme.lines.length === 1) return 380;

  return 200;
}

function getSelectedLine() {
  return JSON.parse(JSON.stringify(gMeme.lines[gMeme.selectedLineId]));
}