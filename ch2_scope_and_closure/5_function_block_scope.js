function foo() {
    var b = "Can you access me?";
}

console.log(typeof b); // undefined

// function 을 통해 스코프가 생성되었다.
// 따라서 안에 선언한 변수 b는 외부에서 접근할 수 없다.
// 스코프 내부의 데이터를 보호할 수 있다.