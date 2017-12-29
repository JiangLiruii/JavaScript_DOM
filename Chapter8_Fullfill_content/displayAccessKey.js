function displayAccessKey() {
//   const keys = document.getElementById('navigation');
//   const liChild = keys.childNodes;
//   console.log(liChild);
//   if (!(liChild.length === 0)) {
//     for (let i = 0; i < liChild.length; i++) {
//       const accesskey = liChild[i];
//     }
  // }
// }
  const links = document.getElementsByTagName('a');
  const header = document.createElement('h2');
  for (let i = 0; i < links.length; i++) {
    const accessKey = links[i].accesskey;
    const accessKeyText = document.createTextNode('AccessKeys');
    accessKeyText.appendChild(accessKey)
  }
}
