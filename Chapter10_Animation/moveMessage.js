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
    if (xpos < xFinal) { xpos++; }
    if (xpos > xFinal) { xpos--; }
    if (ypos < yFinal) { ypos++; }
    if (ypos > yFinal) { ypos--; }
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
    moveMessage('message', 125, 20, 20);
  } else console.log('没有message');
  if (document.getElementById('message1')) {
    const message = document.getElementById('message1');
    message.style.position = 'absolute';
    message.style.left = '20px';
    message.style.top = '10px';
    moveMessage('message1', 125, 20, 20);
  } else console.log('没有message1');
}


addOnload(positionMessage);
// addOnload(moveMessage);

