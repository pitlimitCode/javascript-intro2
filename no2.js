// Data Array, 16 item.
const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(req, limit, shuffleArray) {
  // Memindahkan data array yang berisi string 'req',
  //  ke data array yang baru .
  const reqArray = [];
  for(i=0 ; i<name.length-1 ; i++) {
    if (name[i].toLowerCase().includes(req) == true) {
      reqArray.push(name[i]);
    } 
  }
  shuffleArray(reqArray); // Proses ke Callback function
  // Membatasi banyak data array yang ingin ditampilkan
  reqArray.splice(limit);
  // Output.
  console.log(reqArray);
}

// Callback.
// Mengacak data array.
function callback(shuffle) {
  for (let i = shuffle.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  }
}

// Perintah
searchName("an", 3, callback);
