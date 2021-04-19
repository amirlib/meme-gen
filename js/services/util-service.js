function updateElStyle(selector, key, value) {
  const elEditor = document.querySelector(selector);

  if (!elEditor) return;

  elEditor.style[key] = value;
}