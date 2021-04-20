const MIN_TOP_VALUE = 30;

var gMeme = getDefaultMemeObj();

function addNewLine() {
  gMeme.lines.push(
    {
      align: 'center',
      color: 'white',
      font: 'Impact',
      left: -1,
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

function updateSelectedLineAlign(align) {
  if (align !== 'left' && align !== 'center' && align !== 'right') return;

  // if align value changes, it will override the left value until user changes the left value specifically
  gMeme.lines[gMeme.selectedLineId].align = align;
  gMeme.lines[gMeme.selectedLineId].left = -1;
}

function updateSelectedLineFontColor(color) {
  gMeme.lines[gMeme.selectedLineId].color = color;
}

function updateSelectedLineFontSize(diff) {
  const size = gMeme.lines[gMeme.selectedLineId].size + diff;

  if (size < 10) return;

  gMeme.lines[gMeme.selectedLineId].size = size;
}

function updateSelectedLineStroke(stroke) {
  gMeme.lines[gMeme.selectedLineId].stroke = stroke;
}

function updateSelectedLineTop(diff) {
  const img = getImgById(gMeme.selectedImgId);
  const canvasSize = calcCanvasDimensions(img.size.width, img.size.height);
  let top = gMeme.lines[gMeme.selectedLineId].top + diff;

  if (top < MIN_TOP_VALUE) top = MIN_TOP_VALUE;
  if (top > canvasSize.height - MIN_TOP_VALUE) top = canvasSize.height - MIN_TOP_VALUE;

  gMeme.lines[gMeme.selectedLineId].top = top;
}

function updateSelectedLineTxt(txt) {
  gMeme.lines[gMeme.selectedLineId].txt = txt;
}

function updateSelectedImgId(id) {
  if (!isImgExists(id)) return

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

function getCurrentMeme() {
  return JSON.parse(JSON.stringify(gMeme));
}

function getDefaultMemeObj() {
  return {
    lines: [],
    selectedImgId: 0,
    selectedLineId: -1,
  }
}

function getSelectedLine() {
  if (gMeme.lines.length === 0) return null;

  return JSON.parse(JSON.stringify(gMeme.lines[gMeme.selectedLineId]));
}

function _calcLineTopValue() {
  if (gMeme.lines.length === 0) return MIN_TOP_VALUE;

  const img = getImgById(gMeme.selectedImgId);
  const canvasSize = calcCanvasDimensions(img.size.width, img.size.height);

  if (gMeme.lines.length === 1) return canvasSize.height - MIN_TOP_VALUE;

  return canvasSize.height / 2;
}