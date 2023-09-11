/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Membuat needleIndex untuk menyimpan isi dari needle
    let needleIndex = 0;
    
    // Memeriksa setiap isi dari haystack
    for (let haystackIndex = 0; haystackIndex < haystack.length; haystackIndex++){
        // Jika ada haystackIndex yang bernilai sama dengan needleIndex
        if (haystack[haystackIndex] == needle[needleIndex]){
            // Maka ke needleIndex selanjutnya
            needleIndex++;
            // Jika needleIndex sama dengan nilai panjang needle
            if (needleIndex == needle.length){
                return haystackIndex - (needleIndex - 1);
            }
        } else {
            // Jika tidak, maka haystackIndex dikurangi dengan needleIndex
            haystackIndex = haystackIndex - needleIndex;
            needleIndex = 0
        }
    }
    return -1
};