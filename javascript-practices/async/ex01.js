/*
    callback 지원 비동기 함수 사용
*/

//test: success
const { fn01 } = require('./fns');
fn01('param~~', function (error, result) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`result:${result}`);
});

//test: fail
fn01(null, function (error, result) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(`result:${result}`);
});

console.log('wait..');
