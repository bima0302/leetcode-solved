/**
 * @param {number} millis
 */
async function sleep(millis) {
    // mengembalikan Promise
    return new Promise(resolve =>{
        // Menggunakan setTimeout untuk membuat penundaan selama millis milidetik
        setTimeout(()=>{
            // Setelah penundaan selesai, pecahkan (resolve) Promise dengan nilai millis
            resolve(millis)
        }, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */