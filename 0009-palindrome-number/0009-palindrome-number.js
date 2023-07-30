/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reversedNum = 0;
    let originalNum = x;

    // Membalikkan angka
    while (originalNum > 0) {
        reversedNum = (reversedNum * 10) + (originalNum % 10);
        originalNum = Math.floor(originalNum / 10);
    }

    // Membandingkan angka asli dengan angka yang sudah dibalik
    return x === reversedNum;
};