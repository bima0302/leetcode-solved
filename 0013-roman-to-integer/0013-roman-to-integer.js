/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // membuat map untuk menghubungkan angka romawi dengan integer
    const romanToIntMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    // inisialisasi variabel result dengan nilai 0
    let result = 0;
    // melakukan iterasi pada setiap karakter dalam string inputan
    for (let i = 0; i < s.length; i++){
        // mengambil nilai integer dari karakter saat ini
        const current = romanToIntMap.get(s[i]);
        // mengambil nilai integer dari karakter selanjutnya
        const next = romanToIntMap.get(s[i + 1]);
        // jika nilai integer dari karakter saat ini lebih kecil dari nilai integer karakter selanjutnya
        if (current < next){
            // kurangi nilai result dengan nilai integer dari karakter saat ini
            result -= current;
        } else {
            // tambahkan nilai result dengan nilai integer dari karakter saat ini
            result += current;
        }
    }
    // kembalikan nilai result setelah iterasi selesai
    return result;
};