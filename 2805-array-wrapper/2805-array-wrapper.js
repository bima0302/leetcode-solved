/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    // mendapatkan angka
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
    // jika dalam array kosong
    if (this.nums.length === 0){
        return 0;
    }
    // this.nums.reduce((acc, cur) => acc + cur) digunakan untuk menjumlahkan semua angka dalam array this.nums.
    // Parameter pertama reduce() adalah sebuah fungsi yang diterapkan pada setiap elemen array secara berurutan. 
    // Fungsi tersebut menerima dua parameter, yaitu acc (akumulator) dan cur (elemen saat ini). 
    // Dalam implementasi ini, fungsi tersebut menjumlahkan akumulator (acc) dengan elemen saat ini (cur).
    return this.nums.reduce((acc, cur) => acc + cur);
}

ArrayWrapper.prototype.toString = function() {
    // mengembalikan dalam bentuk string
    return JSON.stringify(this.nums);
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */