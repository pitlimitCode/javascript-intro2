// // String-Number dan Number-String
// // to.string, mengubah angka yang bertipe data number menjadi tipe data string
// let fruits = 2;
// console.log(typeof(fruits)); // output : number
// fruits = fruits.toString(); 
// console.log(typeof(fruits)); // output : string
// console.log();
// // Number() method, mengubah angka yang bertipe data string menjadi tipe data number
// console.log(Number("1234.56")); //1234
// console.log(Number("423")); //423
// console.log(Number("123Hello")); //123
// console.log(Number("Hello123")); //NaN

// // unshift(), menambah elemen baru ke elemen paling awal dari array
// // .push(), menambah elemen baru ke elemen paling akhir dari array
// const xArray = [1, 2, 3, 4, 5]
// xArray.unshift(8);
// console.log(xArray);
// xArray.push(9);
// console.log(xArray);

// // .shift(), menghapus elemen paling awal dari array
// // .pop(), menghapus elemen paling akhir dari array
// xArray = [1, 2, 3, 4, 5]
// xArray.shift(8);
// console.log(xArray);
// xArray.pop(9);
// console.log(xArray);

// // .filter(), menyaring data array sesuai kriteria yang diinginkan, lalu ditempatakan ke array baru
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);
// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18);

// // .includes(), memberikan nilai boolean, true jika item array memiliki value yang diinginkan
// const name = "Amanda";
// const mustHave = name.includes("an");
// console.log(mustHave);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const choosen = fruits.includes("Mango");
// console.log(choosen);

// // .concat(), menggabungkan 1 atau lebih data array
// const array1 = ["Cecilie", "Lone"];
// const array2 = ["Emil", "Tobias", "Linus"];
// const array3 = ["Robin", "Morgan"];
// const myChildren = array1.concat(array2, array3); 
// console.log(myChildren);

// // .splice(), memisahkan deretan data array sesuai target yang diinginkan
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// console.log(fruits.splice(2, 1)); // data array yang dihapus
// console.log(fruits); // data array yang yang tersisa

// // .slice(), mengembalikan elemen yang dipilih pada data array. Perlu array baru.
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); 
// console.log(citrus); // output : Orange, Lemon
// const myBest = fruits.slice(-3, -1); 
// console.log(myBest); // output : Lemon, Apple

// // .sort(), mengurutkan elemen pada data array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits);
// fruits.sort();
// fruits.reverse();
// console.log(fruits);

// // Math.random(), mengembalikan angka random diantara 0 ~ 1, dengan detail beberapa angka dibelakang koma
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

// // Math.floor(), mengembalikan hasil pembulatan angka dibelakang koma ke angka terendah
// console.log(Math.ceil(0.40));  // 0
// console.log(Math.ceil(5));     // 5
// console.log(Math.ceil(5.1));   // 5
// console.log(Math.ceil(-5.1));  // -6
// console.log(Math.ceil(-5.9));  // -6
// console.log();
// // Math.ceil(), mengembalikan hasil pembulatan angka dibelakang koma ke angka tertinggi
// console.log(Math.floor(0.60)); // 1
// console.log(Math.floor(0.40)); // 1
// console.log(Math.floor(5));    // 5
// console.log(Math.floor(5.1));  // 6
// console.log(Math.floor(-5.1)); // -5
// console.log(Math.floor(-5.9)); // -5

// // Math.round(), mengembalikan hasil pembulatan angka ke bilangan bulat terdekat
// console.log(Math.round(2.60));  // 3
// console.log(Math.round(2.50));  // 3
// console.log(Math.round(2.49));  // 2
// console.log(Math.round(-2.60)); // -3
// console.log(Math.round(-2.50)); // -2
// console.log(Math.round(-2.49)); // -2
