/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    // membuat variabel baru untuk menyimpan data init
    var newValue = init;
    // mengembalikan nya sesuai dengan function nya
    return {
        // jika kondisi nya increment
        increment: () => {
            return newValue = newValue + 1;
        },
        // jika kondisi nya reset
        reset: () => {
            return newValue = init;
        },
        // jika kondisi nya dencrement
        decrement: () => {
            return newValue = newValue - 1;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */