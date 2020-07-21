for (var i = 0; i < 10; i++) {
    var total = (total || 0) + i;
    var last = i;
    if (total > 16) {
        break;
    }
}

console.log(typeof total); // number
console.log(typeof last); // number
console.log(typeof i); // number
console.log(total, last); // 21 6

// javascript는 블록 스코프를 따르지 않기 때문에
// for 문 안에 선언된 변수들을 외부에서 접근할 수 있다.