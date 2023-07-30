/**
 * @param {string[]} operations
 * @return {number}
 */
// Mendefinisikan fungsi finalValueAfterOperations dengan parameter operations
var finalValueAfterOperations = function(operations) {
    // Mendefinisikan variabel X dengan nilai awal 0
    let X = 0;
    // Melakukan perulangan sebanyak panjang array operations
    for (let i = 0; i < operations.length; i++){
        // Jika operasi yang sedang diperiksa adalah "--X" atau "X--", maka kurangi nilai variabel X sebesar 1
        if (operations[i] === "--X" || operations[i] === "X--"){
            X -= 1;
        } else {
            // Jika operasi yang sedang diperiksa adalah "++X" atau "X++", maka tambahkan nilai variabel X sebesar 1
            X += 1;
        }
    }
    // Mengembalikan nilai variabel X setelah dilakukan operasi pada array operations
    return X;
};

