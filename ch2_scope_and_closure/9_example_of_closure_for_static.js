var countFactory = (function () {
    var staticCount = 0;
    return function () {
        var localCount = 0;
        return {
            increase: function () {
                return {
                    static: ++staticCount,
                    local: ++localCount
                };
            },
            decrease: function () {
                return {
                    static: --staticCount,
                    local: --localCount
                }
            }
        };
    };
}());

var counter = countFactory(),
    counter2 = countFactory();
console.log(counter.increase()); // Object {static: 1, local: 1}
console.log(counter.increase()); // Object {static: 2, local: 2}
console.log(counter2.decrease()); // Object {static: 1, local: -1}
console.log(counter.increase()); // Object {static: 2, local: 3}

// iife로 기본 스코프를 생성한다.
// countFactory() 를 실행하면 return { ... } 을 반환하면서 스코프를 생성한다.