// operator logika

// and, or, not

let data_boolean = true;
console.log(data_boolean);

// 1. not
console.log(!data_boolean);
console.log(!!data_boolean);
console.log(!1);
console.log(!0);

let is_keren = true;
let is_jelek = !is_keren;

// 2. or operasi antara dua variable boolean

//  A       true true  false false
//  B       true false true  false
// hasil    true true  true  false

console.log(`true || true, hasil = ${true || true}`);
console.log(`true || false, hasil = ${true || false}`)
console.log(`false || true, hasil = ${false || true}`)
console.log(`false||false, hasil = ${false || false}`)

let makan = false;
let minum = false;

let sudah_menyantap = makan || minum;
console.log(`sudah_menyantap = ${sudah_menyantap}`);

// 3. and -> operasi antara dua variable boolean

//  A       true true  false false
//  B       true false true  false
// hasil    true false  false  false

console.log(`true && true, hasil = ${true && true}`);
console.log(`true && false, hasil = ${true && false}`)
console.log(`false && true, hasil = ${false && true}`)
console.log(`false && false, hasil = ${false && false}`)
 makan = false;
 minum = false;

 sudah_menyantap = makan && minum;
console.log(`sudah_menyantap = ${sudah_menyantap}`);