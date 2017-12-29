// 这是对象的例子,其实跟python种的字典的使用方法一一摸一样
const lennon = Object();
lennon.name = 'John';
lennon.year = 1940;
lennon.living = false;

// 使用花括号创建
const lennon2 = {
  name: 'John',
  year: 1940,
  living: false,
};

const beatles = Array();
beatles[0] = lennon2;

const beatles1 = {};
beatles1.vocalist = lennon2;

// 内建对象
const beatles2 = new Array(3);
alert(beatles2.length);// 5
const num = Math.round(3.1415926);

const currentDate = new Date();
const today = currentDate.getDay();

// 宿主对象



