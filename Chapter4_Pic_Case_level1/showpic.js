function showPic(whichpic) {
  const source = whichpic.getAttribute('href');
  const placeholder = document.getElementById('placeholder');
  // placeholder.setAttribute("src",source) 不建议，比较繁琐
  placeholder.src = source; // 因为placeholder也是一个对象，其中有src的属性
  // 添加p标签的title
  const text = whichpic.getAttribute('title');
  const pEle = document.getElementById('description');
  pEle.firstChild.nodeValue = text;
}
// 添加ChildNodes属性
function countBodyChildren() {
  const bodyElement = document.getElementsByTagName('body')[0];
  alert(bodyElement.nodeType);
}
