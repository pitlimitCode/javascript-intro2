function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
  // Validasi tahap pertama: nilaiAwal, nilaiAkhir, dataArray
  if (typeof(nilaiAwal) !== "number"
   || typeof(nilaiAkhir) !== "number" 
   || Array.isArray(dataArray) != true ) {
        if(typeof(nilaiAwal) !== "number"){
          console.log("nilaiAwal harus angka");
        }
        if(typeof(nilaiAkhir) !== "number"){
          console.log("nilaiAkhir harus angka");
        }
        if(Array.isArray(dataArray) != true){
          console.log("datArray harus bertipe data array");
        }
  } else {

    // Validasi tahap kedua: 'nilaiAkhir < nilaiAwal' dan banyak dataArray
    if(nilaiAkhir < nilaiAwal || dataArray.length <= 5){
      // Validasi nilaiAkhir < nilaiAwal
      if(nilaiAkhir < nilaiAwal) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
      }
      // Validasi dataArray.length <= 5 
      if (dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
      }

    } else {
      
      // Filter nilaiAwal dan nilaiAkhir
      dataArray = dataArray.filter((n) => { 
        return n > nilaiAwal && n < nilaiAkhir;
      });
      
      // Mengurutkan angka pada array data
      dataArray.sort(function(a, b) { 
        return a - b
      } );

      // Output
      (dataArray.length == 0)
      ? console.log("Nilai tidak ditemukan")
      : console.log(dataArray)
      
      }
    }
  }
}

seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
// Output: [8, 14, 17]
// const tes = [2, 25, 4, 14, 17, 30, 8];
// console.log(tes);
// seleksiNilai(5, 20 , tes);
// console.log(tes);

// seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// Output: “Nilai akhir harus lebih besar dari nilai awal”

// seleksiNilai(5, 17 , [2, 25, 4]);
// Output: “Jumlah angka dalam dataArray harus lebih dari 5”

// seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
// seleksiNilai(18, 24 , [2, 25, 4, 14, 17, 30, 8]);
// Output: “Nilai tidak ditemukan”
