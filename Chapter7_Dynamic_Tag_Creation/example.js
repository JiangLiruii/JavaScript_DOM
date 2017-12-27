function insertParagraph(text) {
  const str1 = `<p>${text}</p>`;// 使用模板化语言
  document.write(str1);
}

// window.onload = function () {
//   const testdiv = document.getElementById('testdiv');
//   alert(testdiv.innerHTML);
//   alert(testdiv.innerText);
// };
// 使用innerHTML代替write
// window.onload = function () {
//   const testdiv = document.getElementById('testdiv');
//   testdiv.innerHTML = '<p>this is <em>my</em> content.</p>';
// };

window.onload = function () {
  const para = document.createElement('p');
  const txt1 = document.createTextNode('this is');
  const em1 = document.createElement('em');
  const txt2 = document.createTextNode('My');
  const txt3 = document.createTextNode(' content');
  para.appendChild(txt1);
  em1.appendChild(txt2);
  para.appendChild(em1);
  para.appendChild(txt3);
  const info = `nodeName:${para.nodeName}nodeType:${para.nodeType}`;
  alert(info);
  const testdiv = document.getElementById('testdiv');
  testdiv.appendChild(para);
};

function insertAfter(newElement, targetElement) {
  const parent = targetElement.parentNode;
  if (parent.lastChild === targetElement) {
    parent.appendChild(newElement);
  } else {
    parent.insertBefore(newElement, targetElement.nextSibling);
  }
}
