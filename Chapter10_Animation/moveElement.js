function moveElement(ElementID, xFinal, yFinal, interval) {
  const message = document.getElementById(ElementID);
  if (message.movement) { clearTimeout(message.movement); } // 清楚上一次的setTimeout
  if (message.style.left && message.style.top) {
    let xpos = parseInt(message.style.left);
    let ypos = parseInt(message.style.top);
    let dist = 0;
    if (xpos === xFinal && ypos === yFinal) {
      return true;
    }
    if (xpos < xFinal) {
      dist = Math.ceil(Math.abs(xFinal - xpos) / 10);
      xpos += dist;
    }
    if (xpos > xFinal) {
      dist = Math.ceil(Math.abs(xFinal - xpos) / 10);
      xpos -= dist;
    }
    if (ypos < yFinal) {
      dist = Math.ceil(Math.abs(yFinal - ypos) / 10);
      ypos += dist;
    }
    if (ypos > yFinal) {
      dist = Math.ceil(Math.abs(yFinal - ypos) / 10);
      ypos -= dist;
    }
    message.style.left = `${xpos}px`;
    message.style.top = `${ypos}px`;
    const repeat = `moveElement('${ElementID}', ${xFinal}, ${yFinal}, ${interval})`;
    message.movement = setTimeout(repeat, interval);
  } else console.log('没有left和top的定义');
}
