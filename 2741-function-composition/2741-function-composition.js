/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // mengembalikan function
	return function(x) { 
        // dimana function diterapkan pada setiap data pada array secara terbalik yang akan disimpan pada x
        functions.reverse().forEach(fn => {x = fn(x)}) 
        // dan kemudian mengembalikan x
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */