function displayCitations() {
  const blockquotes = document.getElementsByTagName('blockquote');
  for (let i = 0; i < blockquotes.length; i++) {
    if (blockquotes[i].getAttribute('cite')) {
      const url = blockquotes[i].getAttribute('cite');
      const blockquoteChilds = blockquotes[i].getElementsByTagName('*');
      const blockquoteLast = blockquoteChilds[blockquoteChilds.length - 1];
      const link = document.createElement('a');
      const source = document.createTextNode('source');
      link.appendChild(source);
      link.href = url;
      const sup = document.createElement('sup');
      sup.appendChild(link);
      blockquoteLast.appendChild(sup);
    }
  }
}
addOnload(displayCitations);
