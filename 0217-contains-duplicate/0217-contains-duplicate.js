/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Mengurutkan isi nums
    nums.sort((a, b) => a - b);
    // Jika terdapat duplikasi, maka akan mengembalikan true
    for (let i = 0; i <= nums.length - 1; i++){
        if (nums[i] === nums[i + 1]){
            return true;
        }
    }
    // Jika tidak, akan mengembalikan false
    return false;
};