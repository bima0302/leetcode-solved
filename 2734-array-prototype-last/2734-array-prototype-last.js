Array.prototype.last = function() {
    // membuat seleksi, dimana jika isi array kosong
    if (this.length == 0){
        // maka, mengembalikan -1
        return -1;
    // jika tidak
    } else {
        // maka, mengembalikan data terakhir pada array
        return this[this.length - 1];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */