/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    // menyalin array nums ke ans menggunakan slice
    ans = nums.slice(0, nums.length);
    // setiap elemen nums akan diganti dengan elemen pada ans
    for(const i in nums){
        nums[i] = ans[nums[i]];
    }
    // mengembalikan nums
    return nums;
};