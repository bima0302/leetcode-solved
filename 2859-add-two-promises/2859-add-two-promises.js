/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // mengambil nilai nya dengan menunggu hingga kedua promise selesai
    const [val1, val2] = await Promise.all([promise1, promise2]);
    // menjumlahkan nilai yang didapat dan mengembalikan nya
    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */