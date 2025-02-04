console.log("============[02] undefined");
var myVar1; // 암시적으로 undefined 대입
var myVar2 = undefined; // 명시적으로 undefined 대입
var myVar3 = null;
console.log(myVar1, myVar2, myVar3);

console.log("============[03] var");
//x; //reference error

y = 10; // 변수 y 정의 이거랑 var 붙이는 것의 차이는 scope(var는 함수 scope)
var x; // 변수 x 정의

console.log("============[05] undefined와 null의 동치(equal) 비교");
console.log(myVar1 == myVar2); //true 값 비교
console.log(myVar2 === myVar3); //false 타입 비교 + (값 비교, 동일성)

console.log("============[06] Equal Operators(==, ===) 와 형변환");
// ==: equality, 값의 동치성, 형변환
console.log("4" == 4); //true
console.log(false == 0); //true
console.log("abc" == new String("abc")); //true

// ===
// 1. 타입의 동일성
// 2. 타입이 동일한 경우
//  2-1. primitive type: 값의 동일성
//  2-2. 객체(object, function): 객체의 동일성
console.log("4" === 4); //false
console.log(1 === true); //false
console.log("abc" === new String("abc")); //false
console.log(new Number(10) === new Number(10)); //false
