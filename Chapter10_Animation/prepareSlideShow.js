function prepareSlideshow() {
  const div = document.createElement('div');
  div.id = 'slideshow';
  const preview = document.createElement('img');
  preview.src = './topics.gif';
  preview.alt = 'building-blocks of web design';
  preview.id = 'preview';
  preview.style.left = 0;
  preview.style.top = 0;
  const list = document.getElementById('linklist');
  const listElements = list.getElementsByTagName('a');
  for (let i = 0; i < listElements.length; i++) {
    listElements[i].onmouseover = () => moveElement('preview', -100 * (i + 1), 0, 10);
  }
  div.appendChild(preview);
  insertAfter(div, list);
}
addOnload(prepareSlideshow);
