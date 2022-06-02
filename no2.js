// Data Array, 16 item.
const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(req, limit, shuffleArray) {
  // Memindahkan data array yang memiliki karakter
  // sesuai permintaan, ke data array yang baru .
  const reqArray = [];
  for(i=0 ; i<name.length-1 ; i++) {
    if (name[i].toLowerCase().includes(req) == true) {
      reqArray.push(name[i]);
    } 
  }
  
  shuffleArray(reqArray); // Ke Callback function.

  // Membatasi banyak data array yang ingin ditampilkan.
  reqArray.splice(limit);

  console.log(reqArray); // Output.
}

// Callback.
// Mengacak data array.
function callback(shuffle) {
  shuffle.sort(_ => Math.random() - 0.5);
}

// Perintah.
searchName("an", 3, callback);
