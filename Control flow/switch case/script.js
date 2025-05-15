var angka = parseInt(prompt('Masukkan angka'));
// == membandingan nilai tanpa tipe data
// === membandingan nilai dengan tipe data

switch (angka) {
    case 1:
        alert('Anda memasukkan angka 1');
        break;
    case 2:
        alert('Anda memasukkan angka 2');
        break;
    case 3:
        alert('Anda memasukkan angka 3');
        break;
    default:
        alert('Anda memasukkan angka benar');
        break;
}

var item = prompt('Masukkan nama item : \n 1. Baju \n 2. Celana \n 3. Sepatu');
switch (item) {
    case 'Baju':
        alert('Anda memilih Baju');
        break;
    case 'Celana':
        alert('Anda memilih Celana');
        break;
    case 'Sepatu':
        alert('Anda memilih Sepatu');
        break;
    default:
        alert('Item tidak tersedia');
        break;
}