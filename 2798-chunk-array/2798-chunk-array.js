/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    // membuat variabel mainArr dan subArr
    let mainArr = [], subArr = [];
    // membuat perulangan untuk mengambil semua data yang ada pada arr
    for (let i = 0; i < arr.length; i++){
        // data tersebut akan dimasukan pada subArr satu-persatu
        subArr.push(arr[i])
        // jika panjang subArr sudah mencapai nilai size
        if (subArr.length == size){
            // maka, data pada subArr akan dimasukkan pada mainArr
            mainArr.push(subArr);
            // dan subArr di kosongkan
            subArr = [];
        }
    }
    // jika panjang subArr
    if (subArr.length){
        // maka, data pada subArr akan dimasukkan pada mainArr
        mainArr.push(subArr);
    }
    // mengembalikan mainArr
    return mainArr;
};