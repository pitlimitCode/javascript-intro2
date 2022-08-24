# Week 2 - Javascript Intro 2  

running code di terminal:  
node no1  
node no2  
node no3  
  
## revisi
Revisi setelah presentasi 06 Juni:  
no2, line 11. Buat comment/keterangan validasi diatas isNaN(limit).  
no2, line 18. Perbaikan loopingan for untuk pemindahan data array (sebelumnya i < name.length-1, menjadi i < name.length).  
no2, line 19. Data parameter perlu di toLowerCase, karena jika parameter yang diminta ada yang huruf besar, akan dicocokan dengan teks yang di toLowerCase dari data array.  
no3, line 2. Buat comment/keterangan di validasi tahap pertama.  
no3, line 18. Perbaikan penulisan if-else pada validasi tahap kedua (sebelumnya if{} else if {} else{}, menjadi if{ if{} if{} } else{})). Serta tambahan comment/keterangan-nya.  

## SOAL NOMOR 1  
Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions) beserta contoh penggunaannya(kecuali : split, reverse, join, foreach, map)  

## SOAL NOMOR 2  
Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan  callback function dengan data sebagai berikut:  
const name = [  
"Abigail", "Alexandra", "Alison",  
"Amanda", "Angela", "Bella",  
"Carol", "Caroline", "Carolyn",  
"Deirdre", "Diana", "Elizabeth",  
"Ella", "Faith", "Olivia", "Penelope"]  
  
Contoh:  
searchName(“an”, 3, callback)  
  
Output:   
[“Alexandra”,”Amanda”,”Angela”]  
  
## SOAL NOMOR 3  
Buatlah fungsi yang memiliki parameter nilaiAwal (number) dan nilaiAkhir (number), serta dataArray (array).   
Fungsi tersebut memiliki validasi nilaiAwal < nilaiAkhir dan jumlah data dalam dataArray harus lebih dari 5.  
Fungsi tersebut akan mencari data didalam dataArray yang memiliki nilai diantara nilaiAwal dan nilaiAkhir, mengurutkan hasil pencarian dan menampilkannya ke layar/console.  
  
Contoh :  
   
SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])  
Output:  
[8, 14, 17]  
  
SeleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8])  
Output:  
“Nilai akhir harus lebih besar dari nilai awal”  
  
SeleksiNilai(5, 17 , [2, 25, 4])  
Output:  
“Jumlah angka dalam dataArray harus lebih dari 5”  
  
SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])  
Output:  
“Nilai tidak ditemukan”  