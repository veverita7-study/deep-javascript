try {
    throw new exception("fake exception");
} catch (err) {
    var test = "Can you see me?";
    console.log(err instanceof ReferenceError); // true
}

console.log(test); // Can you see me?
console.log(typeof err); // undefined

// catch 도 function 처럼 스코프를 생성한다.
// 하지만 차이가 있는데 파라미터로 받는 err 변수는 외부에서 접근할 수 없다.
// catch 내부에서 선언한 test 변수는 외부에서 접근할 수 있다.