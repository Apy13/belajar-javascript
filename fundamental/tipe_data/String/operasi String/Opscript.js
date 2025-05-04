//operasi String


// 1. charAt
let dataString = "abcdef";
let dataChar = dataString.charAt(0);
console.log(`character pada index 0 = ${dataChar}`); 
 dataChar = dataString.charAt(1);
 console.log(`character pada index 1 = ${dataChar}`); 
 dataChar = dataString.charAt(2); 
 console.log(`character pada index 2 = ${dataChar}`); 
 dataChar = dataString.charAt(3);
 console.log(`character pada index 3 = ${dataChar}`); 
 dataChar = dataString.charAt(4);
console.log(`character pada index 4 = ${dataChar}`); 

// 2.menyambung stirng

let namaDepan = "ucup";
let namaBelakang = "sururcup";


let namaLengkap = namaDepan.concat(' ',namaBelakang, ' si keren ');
 
console.log(namaLengkap);


// 3. mengambil index
console.log(namaLengkap.indexOf('u')); 

// 4. subString
let namaLengkap_5_12 = namaLengkap.substring(5, 12);
console.log(namaLengkap_5_12);

console.log(namaLengkap.substring(5, 13));

// 5. slice

console.log(namaLengkap.slice(5, 13));
console.log(namaLengkap.slice(13, 5)); // menjadi kosong

// 6.replace
namaLengkap = namaLengkap.replace('ucup sururcup', 'otong surotong');
console.log(namaLengkap);

// 7/tolower

console.log(namaLengkap.toLowerCase());

// 8. upppercase
console.log(namaLengkap.toUpperCase());

// 9. extract data number

let dataString2 = '10.5';

console.log(typeof dataString2);

let dataInterger = parseInt(dataString2);

console.log(dataInterger);
console.log(typeof dataInterger);

let dataString3 = '10.25';
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);

