let dataString = "ucup";
console.log(dataString);

// 1. escaping string

let data1 = 'ucup \tberkata "apa kabar dunia?"';
console.log(data1);

let data2 = "otong berkata\"apa kabar?\"";
console.log(data2);

let data3 = 'ucup berkata ,\nkerennn';
console.log(data3);

// 2. literal string
let namaDepan = "ucup";
let namaBelakang = "keren";
let umur = 1;

let namaLengkap = umur +" " + namaDepan + " " + namaBelakang;
console.log(namaLengkap);

let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);