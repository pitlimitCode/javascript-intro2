// // 1. String-Number dan Number-String.
// // to.string, mengubah angka yang bertipe data number menjadi tipe data string
// let test = 2;
// console.log(typeof(test)); // number
// console.log(typeof(test.toString())); // string
// console.log();
// // Number() method, mengubah angka yang bertipe data string menjadi tipe data number
// console.log(Number("1234.56")); // 1234.56
// console.log(Number("423")); // 423
// console.log(Number("123Hello")); // NaN

// // 2. .includes(), memberikan nilai boolean, true jika item array memiliki value yang diinginkan.
// const name = "Amanda";
// console.log(name.includes("an")); // true
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango")); // true

// // 3. .concat(), menggabungkan 1 atau lebih data array.
// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];
// console.log(array1.concat(array2, array3)); 

// // 4. .unshift(), .push()
// // .unshift(), menambah elemen baru ke elemen paling awal dari array
// // .push(), menambah elemen baru ke elemen paling akhir dari array
// const xArray = [1, 2, 3, 4, 5]
// xArray.unshift(8);
// console.log(xArray); // [ 8, 1, 2, 3, 4, 5 ]
// xArray.push(9);
// console.log(xArray); // [ 8, 1, 2, 3, 4, 5, 9 ]

// // 5. .shift(), .pop()
// // .shift(), menghapus elemen paling awal dari array
// // .pop(), menghapus elemen paling akhir dari array
// xArray = [1, 2, 3, 4, 5]
// xArray.shift();
// console.log(xArray); // [ 2, 3, 4, 5 ]
// xArray.pop();
// console.log(xArray); // [ 2, 3, 4 ]

// // 6. .filter(), menyaring data array sesuai kriteria yang diinginkan, lalu ditempatakan ke array baru.
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18); // [45, 25]

// // 7. .splice(), menambahkan atau mengurangi item dalam array.
// const fruits = ["Apple", "Banana", "Guava"];
// console.log(fruits.splice(1, 2, "Cherry", "Durian" )); // [ 'Banana', 'Guava' ]
// console.log(fruits); // [ 'Apple', 'Cherry', 'Durian' ]

// // 8. .slice(), melihat urutan array yang dipilih. Tidak merubah isi array.
// let fruits2 = ["Apple", "Banana", "Cherry", "Durian", "Guava"];
// console.log(fruits2.slice(0, 5));   // [ 'Apple', 'Banana', 'Cherry', 'Durian', 'Guava' ]
// console.log(fruits2.slice(1, 5));   // [ 'Apple', 'Banana', 'Cherry', 'Durian', 'Guava' ]
// console.log(fruits2.slice(0, 4));   // [ 'Apple', 'Banana', 'Cherry', 'Durian' ]
// console.log(fruits2.slice(-5, -1)); // [ 'Apple', 'Banana', 'Cherry', 'Durian' ]
// console.log(fruits2.slice(-5, 0));  // [ ]
// console.log(fruits2.slice(-5, 5));  // [ 'Apple', 'Banana', 'Cherry', 'Durian', 'Guava' ]
// console.log(fruits2.slice(1, -1));  // [ 'Banana', 'Cherry', 'Durian' ]
// console.log(fruits2.slice(1, 0));   // [ ]

// // 9. .sort(), mengurutkan elemen pada data array.
// // Jika dari item string, langsung di .sort(), mempengaruhi array asli.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort());   // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
// console.log(fruits.reverse());// [ 'Orange', 'Mango', 'Banana', 'Apple' ]
// // Jika dari item number, .sort() perlu bantuan function
// const numbers = [45, 4, 9, 16, 25];
// console.log(numbers.sort((a, b) => {return a - b})); // [ 4, 9, 16, 25, 45 ]
// console.log(numbers.sort(function(a, b){return b - a})); // [ 45, 25, 16, 9, 4 ]
// console.log(numbers.sort(function(a, b){return 0.5 - Math.random()})); // random

// // 10. Math.random(), Math.floor(), Math.ceil(), Math.round().
// // Math.random(), mengembalikan angka random diantara 0 ~ 1, dengan detail beberapa angka dibelakang koma.
// console.log(Math.random()); // 0. ..
// console.log(Math.random()); // 0. ..
// console.log(Math.random()); // 0. ..
// console.log();
// // Math.floor(), mengembalikan hasil pembulatan angka dibelakang koma ke angka terendah.
// console.log(Math.floor(0.40));  // 0
// console.log(Math.floor(5));     // 5
// console.log(Math.floor(5.1));   // 5
// console.log(Math.floor(-5.1));  // -6
// console.log(Math.floor(-5.9));  // -6
// console.log();
// // Math.ceil(), mengembalikan hasil pembulatan angka dibelakang koma ke angka tertinggi.
// console.log(Math.ceil(0.60)); // 1
// console.log(Math.ceil(0.40)); // 1
// console.log(Math.ceil(5));    // 5
// console.log(Math.ceil(5.1));  // 6
// console.log(Math.ceil(-5.1)); // -5
// console.log(Math.ceil(-5.9)); // -5
// console.log();
// // Math.round(), mengembalikan hasil pembulatan angka ke bilangan bulat terdekat.
// console.log(Math.round(2.60));  // 3
// console.log(Math.round(2.50));  // 3
// console.log(Math.round(2.49));  // 2
// console.log(Math.round(-2.60)); // -3
// console.log(Math.round(-2.50)); // -2
// console.log(Math.round(-2.49)); // -2
