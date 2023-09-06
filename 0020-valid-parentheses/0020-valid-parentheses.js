/**
 * @param {string} s
 * @return {boolean}
 */

// Membuat variabel pairs, digunakan untuk menentukan pasangan dari tanda kurung
const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
}

var isValid = function(s) {
    // Jika isi dari s adalah ganjil, maka akan mengembalikan false
    if (s.length % 2 === 1){
        return false;
    }

    // Jika indeks paling kiri merupakan tutup kurung, maka akan mengembalikan false
    if (s[0] === ")" || s[0] === "}" || s[0] === "]"){
        return false;
    }

    // Jika indeks paling kanan merupakan buka kurung, maka akan mengembalikan false
    if (s[s.length - 1] === "(" || s[s.length - 1] === "{" || s[s.length - 1] === "["){
        return false;
    }

    // Membuat variabel stack untuk menyimpan data sementara
    let stack = [];

    for (i = 0; i < s.length; i++){
        // Jika indeks paling kiri merupakan buka kurung, maka data di simpan pada stack 
        if (s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
            // Jika tidak maka mengembalikan false
        } else if (pairs[stack.pop()] !== s[i]){
            return false;
        }
    }
    return stack.length === 0;
};