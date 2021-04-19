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
