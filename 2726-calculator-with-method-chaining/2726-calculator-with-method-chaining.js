class Calculator {
  
  /** 
   * @param {number} value
   */
  constructor(value) {
    // mengambil nilai value
    this.value = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
    // untuk menambahkan value didalam array, maka
    this.value += value;
    // kemudian method dikembalikan sehingga dapat melakukan chaining method
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
    // untuk mengurangkan value didalam array, maka
    this.value -= value;
    // kemudian method dikembalikan sehingga dapat melakukan chaining method
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
    // untuk mengkalikan value didalam array, maka
    this.value *= value;
    // kemudian method dikembalikan sehingga dapat melakukan chaining method
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    // jika kondisinya sama dengan kosong
    if (value == 0){
        // throw new Error() digunakan untuk melemparkan pesan error pada saat runtime dan menghentikan program
        throw new Error('Division by zero is not allowed');
    }
    // untuk membagikan value didalam array, maka
    this.value /= value;
    // kemudian method dikembalikan sehingga dapat melakukan chaining method
    return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    // untuk mengupdate value
    // Math.pow() adalah sebuah fungsi bawaan JavaScript yang digunakan untuk menghitung nilai pangkat
    // Fungsi ini menerima dua parameter yaitu angka yang akan dipangkatkan dan pangkatnya
    this.value = Math.pow(this.value, value);
    // kemudian method dikembalikan sehingga dapat melakukan chaining method
    return this;
  }
    
  /** 
   * @return {number}
   */
  getResult() {
    // mengembalikan hasil
    return this.value;
  }
}