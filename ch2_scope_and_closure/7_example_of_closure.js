function outer() {
    var count = 0;
    var inner = function () {
        return ++count;
    };
    return inner;
}

var increase = outer();
console.log(increase()); // 1
console.log(increase()); // 2

// 변수 count는 외부에서 접근하지 못하지만 inner를 통해 접근할 수 있다.
// 변수 increase가 outer의 내부의 function을 참조하기 때문에 스코프가 유지된다.