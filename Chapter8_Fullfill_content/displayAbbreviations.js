function displayAbbreviations() {
  const abbrs = document.getElementsByTagName('abbr');
  const lengthAbbr = abbrs.length;
  if (lengthAbbr === 0) return false;
  const dl = document.createElement('dl');
  for (let i = 0; i < abbrs.length; i++) {
    const title = abbrs[i].getAttribute('title');
    const inText = abbrs[i].innerText;
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.innerText = inText;
    dd.innerText = title;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }
  const header = document.createElement('h2');
  const headerText = document.createTextNode('Abbreviations');
  header.appendChild(headerText);
  document.body.appendChild(header);
  document.body.appendChild(dl);
}
addOnload(displayAbbreviations);
