// function showPic(whichpic) {
//   const source = whichpic.getAttribute('href');
//   const placeholder = document.getElementById('placeholder');
//   // placeholder.setAttribute("src",source) 不建议，比较繁琐
//   placeholder.src = source; // 因为placeholder也是一个对象，其中有src的属性
//   // 添加p标签的title
//   const text = whichpic.getAttribute('title');
//   const pEle = document.getElementById('description');
//   pEle.firstChild.nodeValue = text;
// }
// // 添加ChildNodes属性
function countBodyChildren() {
  const bodyElement = document.getElementsByTagName('body')[0];
  alert(bodyElement.nodeType);
}
// 以上是原程序
function showPic(whichpic) {
  if (!(document.getElementById('placeholder') && document.getElementById('placeholder').nodeName === 'IMG')) return false;
  if (whichpic.getAttribute('href')) {
    const sourceImg = whichpic.href;
    const placeholder = document.getElementById('placeholder');
    placeholder.src = sourceImg;
    const imgText = whichpic.title;
    const description = document.getElementById('description');
    if (description.firstChild.nodeType === 3) {
      description.firstChild.nodeValue = imgText;
      return true;
    }
  }
}

function showPic1(whichpic) {
  try {
    const sourceImg = whichpic.href;
    const placeholder = document.getElementById('placeholder');
    placeholder.src = sourceImg;
    const imgText = whichpic.title;
    const description = document.getElementById('description');
    if (description.firstChild.nodeType === 3) {
      description.firstChild.nodeValue = imgText;
      return true;
    } return false;
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
      return !showPic1(this);
    };
  }
}
