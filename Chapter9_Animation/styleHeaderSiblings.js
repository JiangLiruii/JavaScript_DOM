function getElementSibling(node) {
  if (node.nodeType === 1) return node;
  if (node.nextSibling) return getElementSibling(node.nextSibling);
  return null;
}
function styleHeaderSiblings() {
  if (!document.getElementsByTagName) return false;
  const headers = document.getElementsByTagName('h1');
  for (let i = 0; i < headers.length; i++) {
    const elem = getElementSibling(headers[i].nextSibling);
    // console.log(elem,headers[i].nextSibling);
    addClass(elem, 'intro');
  }
}
addOnload(styleHeaderSiblings);
