function stripeTable() {
  if (document.getElementsByTagName) {
    const table = document.getElementsByTagName('table');
    let rows;
    let odd;
    for (let i = 0; i < table.length; i++) {
      odd = false;
      rows = table[i].getElementsByTagName('tr');
      for (let j = 0; j < rows.length; j++) {
        if (odd) {
          rows[j].style.background = '#ffc';
          odd = false;
        } else odd = true;
      }
    }
  }
}
addOnload(stripeTable);
