console.log("Hello world");
let jumlah = 4;

while(jumlah >0) {
    console.log("Ucup "+ jumlah);
    jumlah--;
}

let jumlahBintang = 1;

while (jumlahBintang <= 5) {
    let bintang = "";

    let i = 0;
    while (i < jumlahBintang) {
        bintang += "*";
        i++;
    }

    console.log(bintang);
    jumlahBintang++;

}

