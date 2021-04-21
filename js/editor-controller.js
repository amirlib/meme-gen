const EDITOR_SELECTOR = '.meme-editor-modal';
const MAX_IMAGE_HEIGHT = 450;

function initEditor() {
  initCanvas();
}

function onAddLine() {
  addNewLine();
  renderEditor();
}

function onAlignLeft() {
  updateLineAlign('left');
}

function onAlignCenter() {
  updateLineAlign('center');
}

function onAlignRight() {
  updateLineAlign('right');
}

function onChangeFontColor(color) {
  updateSelectedLineFontColor(color);
  renderEditor();
}

function onChangeLine() {
  incSelectedLineId();
  renderEditor();
}

function onChangeLineInput(txt) {
  updateSelectedLineTxt(txt);
  renderCanvas(getCurrentMeme(), getCanvasCtx());
}

function onChangeStrokeColor(color) {
  updateSelectedLineStroke(color);
  renderCanvas(getCurrentMeme(), getCanvasCtx());
}

function onDecFontSize() {
  updateLineFontSize(-2);
}

function onIncFontSize() {
  updateLineFontSize(2);
}

function onLineDown() {
  updateLineTop(10);
}

function onLineUp() {
  updateLineTop(-10);
}

function updateLineAlign(align) {
  updateSelectedLineAlign(align);
  renderCanvas(getCurrentMeme(), getCanvasCtx());
}

function updateLineFontSize(diff) {
  updateSelectedLineFontSize(diff);
  renderCanvas(getCurrentMeme(), getCanvasCtx());
}

function updateLineTop(diff) {
  updateSelectedLineTop(diff);
  renderCanvas(getCurrentMeme(), getCanvasCtx());
}

function onCloseEditor() {
  document.body.classList.remove('modal-open');
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'none');
}

function onDownloadMeme(el) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const download = (canvas) => {
    const meme = getCanvasData(canvas);
    const element = document.createElement('a');

    element.setAttribute('href', meme);
    element.setAttribute('download', 'my-meme.png');
    element.click();
  };

  renderCanvas(getCurrentMeme(), ctx, false, download);
}

function onOpenEditor(imgId) {
  document.body.classList.add('modal-open');

  const id = Number.parseInt(imgId);

  clearMeme();
  updateSelectedImgId(id);
  renderModal(id);
}

function onRemoveLine() {
  removeCurrentLine();
  renderEditor();
}

function onSaveMeme() {
  const dataUrl = getCanvasData(getCanvas());

  saveMeme(getCurrentMeme(), dataUrl);
}

function renderEditor() {
  renderCanvas(getCurrentMeme(), getCanvasCtx());
  renderLineInput();
}

function renderModal() {
  firstCanvasRender();
  renderEditor();
  updateElStyleAttr(EDITOR_SELECTOR, 'display', 'flex');
}

function renderLineInput() {
  const line = getSelectedLine();

  if (line) {
    updateElAttr(`${EDITOR_SELECTOR} input[name="lineInput"]`, 'value', line.txt);
  } else {
    updateElAttr(`${EDITOR_SELECTOR} input[name="lineInput"]`, 'value', '');
  }
}
