let panjang = 4;
let lebar = 7;
let luasPersegiPanjang = panjang * lebar;
console.log(`luas persegi panjangnya = ${luasPersegiPanjang}`);

let kelilingPersegiPanjang = panjang + lebar + panjang + lebar;

console.log(`keliling persegi panjang = ${kelilingPersegiPanjang}`);

let jarijari = 7;

let diameter = 2 * jarijari;

console.log(`diameter lingkaran = ${diameter}`);
let Phy = Math.PI;
let luasLingkaran = Phy * Math.pow (jarijari , 2);

console.log(`luas lingkaran = ${luasLingkaran}`);

let kelilingLingkaran = 2 * jarijari * Phy;

console.log(`keliling lingkaran = ${kelilingLingkaran}`);

let sudutA = 90;
let sudutB = 45;
let sudutC= 180 - sudutA - sudutB;

console.log(`sudut C = ${sudutC}`); 


let monday = 1
let saturday = 6

let perbedaanHari = saturday - monday

console.log(`perbedaan hari dari sabtu ke senin = ${perbedaanHari} hari`);

var totalHari = 395
var sisaTahun = ( totalHari % 365)
var sisaBulan = (sisaTahun % 30)
var resultTahun= Math.floor(totalHari / 365)
var resultBulan = Math.floor (sisaTahun / 30)
console.log((` ${totalHari} itu terdiri dari ${resultTahun} tahun ${resultBulan} bulan ${sisaBulan} hari`));