

let nilai_int = 10; // interger nilai bilangan bulat
let nilai_float = 10.123; //float nilai bilangan desimal
let nilai_big_int = 1234567890123456789012345678901234567890n; // big int

console.log(typeof nilai_big_int);

//menggunakan data ini gimana?

let angka = 5.678;

let angka_int = parseInt(angka); // mengubah angka float ke integer
console.log(angka_int);

let angka_2 = 10.98;
console.log(parseFloat(angka_2));

//merubah string

let data = "10.98";
console.log(parseInt(data)+ 10); // mengubah string ke integer

console.log(parseFloat(data) + 10); // mengubah string ke float

//contoh
let pembelian = "10000";
let pajak = 1200;

let bayar = parseInt(pembelian) + pajak;
console.log(bayar);