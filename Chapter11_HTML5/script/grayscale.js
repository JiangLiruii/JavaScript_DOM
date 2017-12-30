function createGSCanvas(img) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const c = ctx.getImageData(0, 0, img.width, img.height);
  // 遍历每个像素，每个像素的红绿蓝求平均值，得到对应彩色的灰度值
  for (let i = 0; i < canvas.width; i++) {
    for (let j = 0; j < canvas.height; j++) {
      const x = ((i * 4) * c.width) + (j * 4);
      const r = c.data[x];
      const g = c.data[x + 1];
      const b = c.data[x + 2];
      c.data[x] = c.data[x + 1] = c.data[x + 2] = (r + g + b) / 3;
    }
  }
  ctx.putImageData(c, 0, 0, 0, 0, c.width, c.height);
  return canvas.toDataURL();
}


function convertToGS(img) {
  if (!Modernizr.canvas) return;
  // 存储原始的彩色版
  img.color = img.src;
  // 创建灰度版
  img.greyscale = createGSCanvas(img);
  // 鼠标放上时切换图片
  img.onmouseover = function() {
    this.src = this.color;
  }
  img.onmouseout = function() {
    this.src = this.greyscale;
  }
  img.onmouseout();
}
addOnload(convertToGS(document.getElementById('avatar')));
