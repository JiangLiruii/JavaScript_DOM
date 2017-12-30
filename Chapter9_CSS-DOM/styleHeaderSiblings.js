function getElementSibling(node) {
  if (node.nodeType === 1) return node;
  if (node.nextSibling) return getElementSibling(node.nextSibling);
  return null;
}
function styleElementSiblings(tag, theClass) {
  if (!document.getElementsByTagName) return false;
  const headers = document.getElementsByTagName(tag);
  for (let i = 0; i < headers.length; i++) {
    const elem = getElementSibling(headers[i].nextSibling);
    // console.log(elem,headers[i].nextSibling);
    addClass(elem, theClass);
  }
}
addOnload(styleElementSiblings('h1', 'intro'));
