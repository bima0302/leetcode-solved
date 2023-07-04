/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // membuat variabel val
    let val = init;
    // mengambil data dari nums
    for (let i = 0; i < nums.length; i++){
        // melakukan operasi fn pada nums, kemudian simpan ke val
        val = fn(val, nums[i]);
    }
    // mengembalikan val
    return val;
};