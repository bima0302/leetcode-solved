/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // mencari nilai dua nums berbeda pada array
    for (let i = 0; i < nums.length - 1; ++i){
        for (let j = i + 1; j < nums.length; ++j){
            // apabila hasil penjumlahan diantaranya sama dengan target
            if (nums[i] + nums[j] == target){
                // maka akan dikembalikan
                return [i, j];
            }
        }
    }
};