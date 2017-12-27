function getHTTPObject() {
  if (typeof XMLHttpRequest === 'undefined') {
    XMLHttpRequest = function () {
      try { return ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch (e) {
        try { return ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch (e1) {
          try { return ActiveXObject('Msxml2.XMLHTTP'); } catch (e2) { return false; }
        }
      }
    };
  }
  return new XMLHttpRequest();
}

const request = getHTTPObject();
