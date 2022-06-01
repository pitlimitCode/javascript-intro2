function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){
  // Validasi nilaiAkhir < nilaiAwal
  if(nilaiAkhir < nilaiAwal){
    console.log("Nilai akhir harus lebih besar dari nilai awal");
  // Validasi dataArray.length <= 5 
  } else if (dataArray.length <= 5) {
    console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  } else {
    
    // Mengurutkan angka pada array data
    dataArray.sort(function(a, b){return a - b});
    

    // // mungkinisa pakai method filter ????

    // Menghapus data array urutan pertama yang lebih kecil dari nilaiAwal
    while (nilaiAwal > dataArray[0]) { dataArray.shift() }
    // Menghapus data array urutan terakhir yang lebih besar dari nilaiAkhir
    while (nilaiAkhir < dataArray[dataArray.length - 1]) {
      dataArray.pop()
    }
    
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

// seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
// Output: “Nilai akhir harus lebih besar dari nilai awal”

// seleksiNilai(5, 17 , [2, 25, 4]);
// Output: “Jumlah angka dalam dataArray harus lebih dari 5”

// seleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18]);
// seleksiNilai(18, 24 , [2, 25, 4, 14, 17, 30, 8]);
// Output: “Nilai tidak ditemukan”