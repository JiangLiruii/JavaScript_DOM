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
  // console.log(links);
  const header = document.createElement('h2');
  const headerText = document.createTextNode('AccessKeys');
  const list = document.createElement('ul');
  for (let i = 0; i < links.length; i++) {
    if (links[i].hasAttribute('accessKey')) {
      const accessKey = links[i].getAttribute('accesskey');
      // console.log(accessKey);
      const str = `${links[i].text}:${accessKey}`;
      // console.log(str);
      const item = document.createElement('li');
      const text = document.createTextNode(str);
      item.appendChild(text);
      list.appendChild(item);
      // console.log(item);
    } else console.log(`${links[i]} dont have accesskey attribute`);
  }
  header.appendChild(headerText);
  document.body.appendChild(header);
  document.body.appendChild(list);
}
addOnload(displayAccessKey);
