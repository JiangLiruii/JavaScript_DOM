function getNewContent() {
  const request = getHTTPObject(); // 创建一个getHTTPObject对象
  if (request) { // 如果支持该方法
    request.open('GET', 'example.txt', true); // 指定打开方式
    request.onreadystatechange = function () { // 指定事件处理函数，当状态改变的时候
      if (request.readyState === 4) { // 如果请求结束        
        const para = document.createElement('p'); // 创建一个p标签
        const txt = document.createTextNode(request.responseText); // 创建一个文本节点，接受responseText文本数据
        para.appendChild(txt);
        document.getElementById('new').appendChild(para);
        alert('Response Recieved');
      }
    };
    request.send(null); // 发送一个空数据，触发事件
  } else {
    alert('你的浏览器不支持XMLHTTPRequest');
  }
  alert('Function Done');
}
addOnload(getNewContent);
