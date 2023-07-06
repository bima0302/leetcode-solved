/**
 * @param {Function} fn
 */
// membuat fungsi memoize dengan parameter fn
// tujuannya adalah membuat fungsi yang menyimpan hasil dari fn yang mana tidak perlu menghitung ulang setiap kali dipanggil dengan parameter yang sama
function memoize(fn) {
    // membuat variabel kosong untuk menyimpan hasil cache fn
    const callCount = {};
    // mengembalikan fungsi
    return function(...args) {
        // membuat variabel x
        const x = String(args);
        // membuat kondisi untuk menemukan nilai x yang ada dalam callCount
        if (x in callCount){
            // jika ada, maka di kembalikan
            return callCount[x];
        } else {
            // jika tidak ada, maka fungsi fn dipanggil untuk menghitung
            callCount[args] = fn(...args);
            // hasil nya di simpan dan dikembalikan
            return callCount[args];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */