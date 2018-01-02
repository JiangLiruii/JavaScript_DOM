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
      addClass(links[i], 'here');
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
  if (document.getElementById('intro')){
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
}
function showSection(id) {
  const section = document.getElementsByTagName('section');
  for (let i = 0; i < section.length; i++) {
    if (section[i].id !== id) {
      section[i].style.display = 'none';
    } else section[i].style.display = 'block';
  }
}
function prepareIntervalnav() {
  console.log(document.getElementsByTagName('article')[0].getElementsByTagName('nav').length !== 0);
  if (document.getElementsByTagName('article')[0].getElementsByTagName('nav').length !== 0) {
    const article = document.getElementsByTagName('article');
    const nav = article[0].getElementsByTagName('nav');
    const links = nav[0].getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      const sectionID = element.href.split('#')[1];
      if (document.getElementById(sectionID)) {
        document.getElementById(sectionID).style.display = 'none';
        links[i].destination = sectionID;
        links[i].onclick = function () {
          showSection(this.destination);
          // console.log(this.destination);
          return false;
        };
      }
    }
  }
}

// 用于photos.html中
function showPic(whichpic) {
  try {
    const sourceImg = whichpic.href;
    console.log(sourceImg);
    const placeholder = document.getElementById('placeholder');
    placeholder.src = sourceImg;
    placeholder.style.display = 'block';
    const imgText = whichpic.title;
    const description = document.getElementById('description');
    if (description.firstChild.nodeType === 3) {
      description.firstChild.nodeValue = imgText;
      return true;
    }
  } catch (err) {
    return false;
  }
}

function prepareGallery() {
  if (!(document.getElementById && document.getElementsByClassName)) return false; // 判断网页是否支持js脚本
  if (!document.getElementById('gallaryImage')) return false; // 如果没有该标签则不执行后续程序，为了以后就算删除该id网页也不会报错
  const gallaryImages = document.getElementById('gallaryImage');
  const links = gallaryImages.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return !showPic(this);
    };
  }
}

function placeHolder() {
  if (document.getElementById('gallaryImage')) {
    const placeholder = document.createElement('img');
    placeholder.id = 'placeholder';
    placeholder.src = '';
    placeholder.alt = '我是占位符';
    placeholder.style.display = 'none';
    const description = document.createElement('p');
    description.id = 'description';
    const txt = document.createTextNode('plz choose one picture');
    description.appendChild(txt);
    const article = document.getElementsByTagName('article')[0];
    const gallery = document.getElementById('gallaryImage');
    insertAfter(placeholder, gallery);
    article.insertBefore(description, gallery);
  }
}
function highlightRows() {
  try {
    if (document.getElementsByTagName) {
      const tbody = document.getElementsByTagName('tbody');
      const rows = tbody[0].getElementsByTagName('tr');
      for (let i = 0; i < rows.length; i++) {
        const oldClass = rows[i].className;
        rows[i].onmouseover = function () {
          addClass(this, 'highlight');
        };
        rows[i].onmouseout = function () {
          console.log(oldClass);
          this.className = oldClass;
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
}
function stripeTable() {
  if (document.getElementsByTagName) {
    const table = document.getElementsByTagName('table');
    let rows;
    let odd;
    for (let i = 0; i < table.length; i++) {
      odd = false;
      rows = table[i].getElementsByTagName('tr');
      for (let j = 0; j < rows.length; j++) {
        if (odd) {
          addClass(rows[j], 'odd');
          odd = false;
        } else odd = true;
      }
    }
  }
}
function displayAbbreviations() {
  const abbrs = document.getElementsByTagName('abbr');
  const lengthAbbr = abbrs.length;
  if (lengthAbbr === 0) return false;
  const dl = document.createElement('dl');
  for (let i = 0; i < abbrs.length; i++) {
    const title = abbrs[i].getAttribute('title');
    const inText = abbrs[i].innerText;
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.innerText = inText;
    dd.innerText = title;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }
  const header = document.createElement('h2');
  const headerText = document.createTextNode('Abbreviations');
  header.appendChild(headerText);
  const container = document.getElementsByTagName('article')[0];
  container.appendChild(header);
  container.appendChild(dl);
}
function focusLabel() {
  try {
    const labels = document.getElementsByClassName('label');
    for (let i = 0; i < labels.length; i++) {
      const id = labels[i].for;
      labels[i].onclick = function () {
        document.getElementById(id).focus();
      };
    }
  } catch (error) {
    return false;
  }
}
// 添加loading函数
function displayAjaxLoading(element) {
  // 删除所有的子元素
  while (element.hasChildNodes()) {
    element.removeChild(element.lastChild);
  }
  // 添加图片元素
  const img = document.createElement('img');
  img.src = 'image/loading.gif';
  img.alt = 'loading';
  element.appendChild(img);
}
function getHTTPObject() {
  if (typeof XMLHttpRequest === 'undefined') {
    XMLHttpRequest = function () {
      try { return ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) {
        try { return ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (e1) {
          try { return ActiveXObject('Msxml2.XMLHTTP'); } catch (e2) { return false; }
        }
      }
    };
  }
  return new XMLHttpRequest();
}
function submitFormWithAjax(whichForm, theTarget) {
  const request = getHTTPObject();
  if (!request) { return false; }
  displayAjaxLoading(theTarget);
  let dataPart = [];
  let data = '';
  for (let i = 0; i < whichForm.elements.length; i++) {
    const element = whichForm.elements[i];
    console.log(element);
    if (element.hasAttribute('name')) dataPart[i] = element.name + encodeURIComponent(element.value);
  }
  data = dataPart.join('&');
  request.open('POST', whichForm.action, true);
  // 设置请求头
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencode');
  request.onreadystatechange = function () {
    if (request.readyState === 4) {
      if (request.status === 200 || request.status === 0) {
        const match = request.responseText.match(/<acticle>([/s/S]+)<\/article>/);
        if (match.length > 0) {
          theTarget.innerText = match[1];
        } else theTarget.innerText = '<p>Opps, some erro happend!</p>';
      }
    } else {
      theTarget.innerText = `<p>${request.statusText}</p>`;
    }
  };
  request.send(data);
  return true;
}
function prepareForms() {
  for (let i = 0; i < document.forms.length; i++) {
    const thisForm = document.forms[i];
    thisForm.onsubmit = function () {
      const article = document.getElementsByTagName('article')[0];
      return submitFormWithAjax(thisForm, article);
    };
  }
}

addOnload(highlightPage);
addOnload(prepareSlideShow);
addOnload(prepareIntervalnav);
addOnload(placeHolder);
addOnload(prepareGallery);
addOnload(stripeTable);
addOnload(highlightRows);
addOnload(displayAbbreviations);
addOnload(prepareForms);
