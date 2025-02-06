/*
    Arrow Function

*/
const power = function (x) {
  return x * x;
};

// ex1
console.log("\n===============");
const nums = [1, 2, 3, 4, 5];
nums.forEach((e) => process.stdout.write(`${e}:${power(e)}\t`));

// ex2
console.log("\n===============");
//   const result = (function (x) {
//     return x * x;
//   })(e);

nums.forEach(function (e) {
  //const result = ((x) => x * x)(e);

  process.stdout.write(`${e}:${((x) => x * x)(e)}\t`);
});

// ex3
console.log("\n===============");
nums.forEach((e) => process.stdout.write(`${e}:${((x) => x * x)(e)}\t`));

// ex4: this를 어휘상에서 바인딩 할 수 있다.
console.log("\n===============");

const dooly = {
  name: "둘리",
  friends: ["또치", "마이콜"],
  // printFriends1: function () {
  //   this.friends.forEach(function (friend) { //forEach 내부에서 실행되면, 콜백 함수의 this는 전역 객체 (window 또는 undefined in strict mode) 를 가리킴.
  //     console.log(`${friend}의 친구 ${this.name}`);
  //   });
  // },
  printFriends: function () {
    this.friends.forEach(
      (
        friend //자신만의 this를 바인딩하지 않고, 상위 스코프(printFriends)의 this를 유지
      ) => console.log(`${friend}의 친구 ${this.name}`)
    );
  },
};
//dooly.printFriends1();
dooly.printFriends();
