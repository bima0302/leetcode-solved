/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // inisialisasi variabel prefix dengan nilai string kosong
    let prefix = '';
    // jika array input kosong atau null, kembalikan nilai prefix yang kosong
    if (strs === null || strs.length === 0){
        return prefix;
    }
    // melakukan iterasi pada setiap karakter dari string pertama dalam array input
    for (let i = 0; i < strs[0].length; i++){
        // mengambil karakter saat ini dari string pertama
        const char = strs[0][i];
        // melakukan iterasi pada setiap string dalam array input
        for (let j = 0; j < strs.length; j++){
            // jika karakter saat ini tidak sama dengan karakter pada indeks yang sama dari string lain dalam array input
            if (char !== strs[j][i]){
                // kembalikan nilai prefix saat ini
                return prefix;
            }
        }
        // tambahkan karakter saat ini ke nilai prefix saat ini
        prefix += char;
    }
    // kembalikan nilai prefix setelah iterasi selesai
    return prefix;
};