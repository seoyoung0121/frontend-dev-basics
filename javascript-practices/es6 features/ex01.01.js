/*
    let & const I

*/

// let 의 블록 범위
try {
  if (true) {
    var i = 0;
    let j = 0;
    j = 20;
  }

  console.log(i);
  console.log(j);
} catch (e) {
  console.error("error:" + e);
}

// function f() {
//   var i = 10;
//   if (i === 10) {
//     var j = 20;
//   }

//   console.log(j);
// } //var는 블록범위가 아닌 함수범위라 j가 찍힘

// f();
// console.log(i); //에러
