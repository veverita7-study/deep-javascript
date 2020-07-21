function outer() {
    var count = 0;
    return { // 함수 2개를 가진 객체를 생성하여 반환
        increase: function () {
            return ++count;
        },
        decrease: function () {
            return --count;
        }
    };
}

var counter = outer();
console.log(counter.increase()); // 1
console.log(counter.increase()); // 2
console.log(counter.decrease()); // 1

var counter2 = outer();
console.log(counter2.increase()); // 1

// counter와 counter2 변수는 함수가 호출될 때 별도의 스코프가 생성된다.
// 따라서 변수 count가 각각 따로 저장되어 독립적이다.