/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // mencari angka tertinggi
    let sorted = [...heights].sort((a, b) => a - b);
    // mencari angka setelahnya
    // apabila angka setelahnya lebih kecil, maka angka tertinggi dikembalikan
    let ans = 0;
    for (let i = 0; i < heights.length; ++i){
        if (sorted[i] != heights[i]){
            ++ans;
        }
    }
    return ans;
};