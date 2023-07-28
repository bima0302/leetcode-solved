/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // membuat variabel sortedArr, dimana akan diurutkan dengan pembanding
    const sortedArr = arr.sort((a, b) => fn(a) - fn(b));
    // mengembalikan sortedArr
    return sortedArr;
};