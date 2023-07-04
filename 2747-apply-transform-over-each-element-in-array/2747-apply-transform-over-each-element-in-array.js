/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // membuat variabel returnedArray
    returnedArray = [];
    // mengambil setiap data dalam arr
    for (let i = 0; i < arr.length; i++){
        // menyimpan ke returnedArray setiap data arr yang telah di operasikan dengan fn
        returnedArray[i] = fn(arr[i], i);
    }
    // mengembalikan returnedArray
    return returnedArray;
};