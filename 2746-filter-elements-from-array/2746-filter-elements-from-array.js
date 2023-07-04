/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // membuat variabel filteredArr 
    filteredArr = [];
    // mengambil setiap data dalam arr
    for (let i = 0; i < arr.length; i++){
        // membuat kondisi sesuai fn
        if (fn(arr[i], i)){
            // menyimpan ke filteredArr setiap data arr yang telah di filter
            // dimana proses filternya menyebabkan data yang tidak sesuai kondisi akan di push (hapus)
            filteredArr.push(arr[i])
        } 
    }
    // mengembalikan filteredArr 
    return filteredArr;
};