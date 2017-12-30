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
