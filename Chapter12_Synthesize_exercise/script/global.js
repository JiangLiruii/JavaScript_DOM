function addOnload(func) {
  const oldFunc = window.onload;
  if (typeof oldFunc !== 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldFunc();
      func();
    };
  }
}
function insertAfter(newElement, targetElement) {
  const parent = targetElement.parentNode;
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}

function addClass(element, value) {
  if (!element.className) {
    element.className = value;
  } else {
    const newClassName = element.className;
    element.className = `${newClassName} ${value}`;
  }
}

function highlightPage() {
  const headers = document.getElementsByTagName('header');
  const links = headers[0].getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    if (window.location.href.indexOf(links[i].href) !== -1) {
      links[i].addClass('here');
      const text = links[i].innerText;
      links[i].id = text;
    }
  }
}
function moveElement(elementID, xFinal, yFinal, interval) {
  const element = document.getElementById(elementID);
  // console.log(elementID, element.movement);
  if (element.movement) { clearTimeout(element.movement); }
  if (!element.style.left) element.style.left = 0;
  if (!element.style.top) element.style.top = 0;
  let xPos = parseInt(element.style.left);
  let yPos = parseInt(element.style.top);
  if (xPos === xFinal && yPos === yFinal) {
    return true;
  }
  if (xPos < xFinal) xPos += Math.ceil((xFinal - xPos) / 10);
  if (xPos > xFinal) xPos -= Math.ceil((xPos - xFinal) / 10);
  if (yPos < yFinal) yPos += Math.ceil((yFinal - yPos) / 10);
  if (yPos > yFinal) yPos -= Math.ceil((yPos - yFinal) / 10);
  element.style.left = `${xPos}px`;
  element.style.top = `${yPos}px`;
  const repeat = `moveElement('${elementID}', ${xFinal}, ${yFinal}, ${interval})`;
  // console.log(repeat);
  element.movement = setTimeout(repeat, interval);
}

function prepareSlideShow() {
  const intro = document.getElementById('intro');
  const slideShow = document.createElement('div');
  const frame = document.createElement('img');
  frame.src = './image/frame.gif';
  frame.id = 'frame';
  frame.alt = '';
  slideShow.appendChild(frame);
  slideShow.id = 'slideShow';
  const preview = document.createElement('img');
  preview.setAttribute('src', './image/slideshow.gif');
  preview.id = 'preview';
  preview.alt = 'a glimpse waits for you';
  slideShow.appendChild(preview);
  insertAfter(slideShow, intro);
  const links = document.getElementsByTagName('a');
  // console.log(links);
  let destination;
  for (let i = 0; i < links.length; i++) {
    links[i].onmouseover = function () {
      destination = this.href;
      if (destination.indexOf('index') !== -1) moveElement('preview', 0, 0, 5);
      if (destination.indexOf('about') !== -1) moveElement('preview', -150, 0, 5);
      if (destination.indexOf('photos') !== -1) moveElement('preview', -300, 0, 5);
      if (destination.indexOf('live') !== -1) moveElement('preview', -450, 0, 5);
      if (destination.indexOf('contact') !== -1) moveElement('preview', -600, 0, 5);
    };
  }
}
function showSection(id) {
  const section = document.getElementsByTagName('section');
  for (let i = 1; i < section.length; i++) {
    if (section[i].id !== id) {
      section[i].style.display = 'none';
    } else section[i].style.display = 'block';
  }
}
addOnload(highlightPage);
addOnload(prepareSlideShow);
