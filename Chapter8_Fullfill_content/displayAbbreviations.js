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
  const bodies = document.getElementsByTagName('body');
  const header = document.createElement('h2');
  const headerText = document.createTextNode('Abbreviations');
  header.appendChild(headerText);
  bodies[0].appendChild(header);
  bodies[0].appendChild(dl);
}
