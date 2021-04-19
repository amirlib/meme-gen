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

function updateTxtSelectedLine(txt) {
  gMeme.lines[gMeme.selectedLineId].txt = txt;
}

function updateSelectedImgId(id) {
  if (!gImgs.some(img => img.id === id)) return;

  gMeme.selectedImgId = id;
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

function getLastLine() {
  if (gMeme.lines.length === 0) return null;

  const line = gMeme.lines[gMeme.lines.length - 1];

  return JSON.parse(JSON.stringify(line));
}