function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
  // Validasi nilaiAkhir < nilaiAwal
  if(nilaiAkhir < nilaiAwal){
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  // Validasi dataArray.length <= 5 
  } else if (dataArray.length <= 5) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else {
    
    // Filter method, callback
    function saring (n) {
      return n > nilaiAwal && n < nilaiAkhir;
    }
    dataArray = dataArray.filter(saring);
    // console.log(dataArray);
    
    // Mengurutkan angka pada array data
    dataArray.sort(function(a, b) {
      return a - b
    } );
    // console.log(dataArray);

    // Output
    if (dataArray.length == 0) {
      console.log("Nilai tidak ditemukan”");
    } else {
      console.log(dataArray);
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
