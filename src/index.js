function divide(a, b) {
    if (b === 0) {
        throw new Error("Bo'lishda 0 bo'lishi mumkin emas");
    }
    let sign = (a < 0) ^ (b < 0) ? -1 : 1;
    a = Math.abs(a);
    b = Math.abs(b);
    let quotient = 0;
    while (a >= b) {
        let temp = b;
        let i = 1;
        while (a >= (temp << 1)) {
            temp <<= 1;
            i <<= 1;
        }
        a -= temp;
        quotient += i;
    }
    return sign * quotient;
}
