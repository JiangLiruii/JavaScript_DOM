// while循环
let count = 1;
while (count < 11) {
  alert(count);
  count++;
}
// do..while循环 count=1会弹出
do {
  alert(count);
  count++;
}
while (count < 11);

// for循环
for (count; count < 11; count++) {
  alert(count);
}

// 对元组进行遍历
const beatles1 = ['John', 'Paul', 'George', 'Ringo'];
for (let i = 0; i < beatles.length; i++) {
  alert(beatles[i]);
}
