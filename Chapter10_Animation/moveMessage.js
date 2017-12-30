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
function moveMessage(ElementID, yFinal, xFinal, interval) {
  const message = document.getElementById(ElementID);
  if (message.style.left && message.style.top) {
    let xpos = parseInt(message.style.left);
    let ypos = parseInt(message.style.top);
    if (xpos === xFinal && ypos === yFinal) {
      return true;
    }
    if (xpos < 200) { xpos++; }
    if (xpos > 200) { xpos--; }
    if (ypos < 100) { ypos++; }
    if (ypos > 100) { ypos--; }
    message.style.left = `${xpos}px`;
    message.style.top = `${ypos}px`;
    const repeat = `moveMessage('${ElementID}', ${yFinal}, ${xFinal}, ${interval})`;
    setTimeout(repeat, interval);
  } else console.log('没有left和top的定义');
}
function positionMessage() {
  if (document.getElementById('message')) {
    const message = document.getElementById('message');
    message.style.position = 'absolute';
    message.style.left = '50px';
    message.style.top = '100px';
    moveMessage('message', 100, 200, 10);
  } else console.log('没有message');
}


addOnload(positionMessage);
// addOnload(moveMessage);

