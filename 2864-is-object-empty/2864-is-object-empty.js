/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // jika panjang data nya kosong
    if (Object.keys(obj).length === 0){
        // maka, mengembalikan true
        return true;
    } else {
        // jika tidak, maka mengembalikan false
        return false;
    }
};