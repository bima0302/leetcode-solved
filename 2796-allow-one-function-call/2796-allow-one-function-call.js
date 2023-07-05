/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // membuat variabel called dengan nilai default nya false
    let called=false;
    // mengembalikan function
    return function(...args){
        // membuat kondisi apabila bukan nilai default called
        if (!called){
            // maka bernilai true
            called = true;
            // dengan mengembalikan penerapan fn pada array
            return fn(...args);
        }
    // untuk nilai selanjutnya, dikembalikan undefined
    return undefined;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */