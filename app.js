function add(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("\u5165\u529B\u5024\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093");
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var result = add(number1, number2);
console.log(result);
