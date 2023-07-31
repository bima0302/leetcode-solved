/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // Loop melalui array digits dari kanan ke kiri
    for (let i = digits.length - 1; i >= 0; i--){
        // Jika digit saat ini kurang dari 9, tambahkan 1 dan kembalikan array digits
        if (digits[i] < 9){
            digits[i]++;
            return digits;
        }
        // Jika tidak, atur digit saat ini menjadi 0 dan lanjutkan loop
        digits[i] = 0
    }
    // Jika kita sampai di sini, semua digit adalah 9, jadi kita perlu menambahkan digit baru ke awal array
    digits.unshift(1)
    return digits;
};
