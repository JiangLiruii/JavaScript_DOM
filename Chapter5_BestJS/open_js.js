// 最初级版本
function popup(WinURL) {
  window.open(WinURL, 'popup', 'width=320,height=480');
}

// 增强版本


function prepareLinks() {
  if (!document.getElementsByTagName) return false; // 向后兼容
  const elementPopup = document.getElementsByTagName('a'); // 减少对DOM的遍历
  for (let i = 0; i < elementPopup.length; i++) {
    if (elementPopup[i].getAttribute('class') === 'popup') {
      elementPopup[i].onclick = function () {
        popup(this.getAttribute('href'));
        return false;
      };
    }
  }
}
window.onload = prepareLinks;
