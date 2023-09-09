/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++){
        // Memeriksa apakah elemen pada indeks 'i' sama dengan 'val'.
        if (nums[i] === val){
            // Jika ya, maka hapus elemen tersebut menggunakan 'splice'.
            nums.splice(i, 1);
            // Setelah menghapus elemen, kurangi 'i' agar tidak melewatkan elemen berikutnya.
            i--;
        }
    }
    // Mengembalikan panjang baru dari array setelah menghapus elemen 'val'.
    return nums.length;
};