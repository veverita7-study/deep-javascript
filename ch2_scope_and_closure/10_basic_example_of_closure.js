function sum(base) {
    var inClosure = base;
    return function (adder) {
        return inClosure + adder;
    };
};

var fiveAdder = sum(5);
console.log(fiveAdder(3)); // 8

var threeAdder = sum(3);
console.log(threeAdder(1)); // 4

// sum() 실행시 스코프가 생성된다. (fiveAdder, threeAdder 각각 생성한다.)
// fiveAdder(), threeAdder() 실행시 스코프가 생성된다.