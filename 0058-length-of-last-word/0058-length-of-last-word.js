/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Menghapus karakter spasi jika ditemukan pada awal atau akhir
    s = s.trim();

    // Membuat count
    let count = 0;

    // Memeriksa setiap karakter pada s
    for (let i = (s.length - 1); i >= 0; i--){
        // Jika isi s bukan spasi, maka count akan ditambahkan
        if (s[i] != ' '){
            count++;
        } else {
            return count;
        }
    }
    return count;
};