for(var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++) {
    console.log('Hello World' + nilaiAwal);
}

// segitiga siku siku
for(var i = 1; i <= 10; i++) {
    let hasil = '';
    for(var j = 1; j <= i; j++) {
        hasil += '*';
    }
    console.log(hasil);
}

// segitiga samakaki
let tinggi = 5
for (let i = 1; i <= tinggi; i++) {
    let spasi = ' '.repeat(tinggi - i);
    let bintang = '*'.repeat(2 * i - 1);
    console.log(spasi + bintang);
}

let tinggi1 = 1;
for (let i = 5; i >= tinggi1; i--) {
    let spasi = ' '.repeat(tinggi - i);
    let bintang = '*'.repeat(2 * i - 1);
    console.log(spasi + bintang);
}


var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for(angkot = 1; angkot <= angkotBeroperasi; angkot++) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
}

for(noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++) {
  
        console.log('Angkot No. ' + noAngkot + ' tidak beroperasi');
    
}