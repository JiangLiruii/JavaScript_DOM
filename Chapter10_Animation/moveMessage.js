function addClass(elem, value) {
  if (!elem.className) {
    elem.className = value;
  } else {
    let newclassName = elem.className;
    newclassName += '';
    newclassName += value;
    elem.className = newclassName;
  }
}
function addOnload(func) {
  const oldonload = window.onload;
  if (typeof window.onload !== 'function') {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}
function moveMessage() {
  const message = document.getElementById('message');
  if (message.style.left && message.style.top) {
    let xpos = parseInt(message.style.left);
    let ypos = parseInt(message.style.top);
    if (xpos === 200 && ypos === 100) {
      return true;
    }
    if (xpos < 200) { xpos++; }
    if (xpos > 200) { xpos--; }
    if (ypos < 100) { ypos++; }
    if (ypos > 100) { ypos--; }
    message.style.left = `${xpos}px`;
    message.style.top = `${ypos}px`;
    setTimeout(moveMessage, 10);
  } else console.log('没有left和top的定义');
}
function positionMessage() {
  if (document.getElementById('message')) {
    const message = document.getElementById('message');
    message.style.position = 'absolute';
    message.style.left = '50px';
    message.style.top = '100px';
    moveMessage();
  } else console.log('没有message');
}


addOnload(positionMessage);
// addOnload(moveMessage);

