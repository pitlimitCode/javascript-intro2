// Buatlah program searching nama 
// Jumlah output dibatasi 3
// Menerapkan callback function

const name = [
  "Abigail", "Alexandra", "Alison",
  "Amanda", "Angela", "Bella",
  "Carol", "Caroline", "Carolyn",
  "Deirdre", "Diana", "Elizabeth",
  "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(req, limit, shuffleArray) {
  // data array yang berisi string sesuai 'req', di isi ke data array baru 
  const reqArray = [];
  for(i=0 ; i<name.length-1 ; i++) {
    if (name[i].toLowerCase().includes(req) == true) {
      reqArray.push(name[i]);
    } 
  }
  
  shuffleArray(reqArray); // proses ke callback function
  
  // batas banyak data array yang ingin ditampilkan
  reqArray.splice(limit);

  // output
  console.log(reqArray);
}

function callback(shuffle) {
  // shuffleArray, ...
  for (let i = shuffle.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffle[i], shuffle[j]] = [shuffle[j], shuffle[i]];
  }
}

searchName("an", 3, callback);