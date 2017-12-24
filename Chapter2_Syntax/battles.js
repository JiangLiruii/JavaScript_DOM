let beatles = Array(4);
beatles[0]="John";
beatles[1]="Paul";
beatles[2]="George";
beatles[3]="Ringo";

let beatles1=Array("John","Paul","George","Ringo");

//最高效的方式
let beatles2=["John","Paul","George","Ringo"];

let year = [1940,1941,1942,1943];

//数组元素可混合
let lennon = ["John",1940,false];

//数组元素为变量
let name = "John";
beatles[1] = name;

//数组包含数组
beatles[0]=lennon;

//关联数组，更像字典，优先使用Object对象。
let lennon1 = Array();
lennon1["name"] = "John";
lennon1["year"] = 1940;
lennon1["living"] = false;


