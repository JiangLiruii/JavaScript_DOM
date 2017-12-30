function highlightRows() {
  if (document.getElementsByTagName) {
    const rows = document.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      rows[i].onmouseover = function () {
        this.style.fontWeight = 'bold';
      };
      rows[i].onmouseout = function () {
        this.style.fontWeight = 'normal';
      };
    }
  } else return false;
}
addOnload(highlightRows);
