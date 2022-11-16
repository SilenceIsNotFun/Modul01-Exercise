//pseucode 


//title function penjumlahan

//input:
// 2 parameter number


//proses:
// 1.pake fungsi calc untuk menjumlahkan
// 2.return hasilnya


//output
//hasil dari penjumlahan





//title: function deteksi odd number

//input
// 1 variable  angka untuk dicek
let oddNumb = (arr1) =>{
//proses
//2. membuat wadah hasil berupa string arr1 = ganjil ato genap
hasil =`${arr1} adalah `
//3. membagi dengan angka variable dengan modulus 2
if(arr1 % 2 == 1){ 
//4. menggunakan IF dengan kondisi jika hasil modulus = 1 berarti dia ganjil
//5. tambahkan kata ke hasil = ganjil jika ifnya true
    hasil += "ganjil"
} 
//6 jika modulus 0 tambahkan kata tidak ganjil
else hasil += "tidak ganjil"
//7. return hasil
return hasil
}
//outputnya
// array berisi angka ganjil

console.log(oddNumb(3));




//title reverse string

//input
// 1 variable bertype string

let pembalik =(arg1) =>{
    //proses
    //1. membuat wadah untuk menampung hasil berbentuk string
    hasil = ""
    //2. membuat loop FOR dengan kondisi start dari string terakhir dan berkurang hingga string ke 0
    for (jumlahHuruf =arg1.length -1; jumlahHuruf >=0; jumlahHuruf--){
    //3. menambahkan kata pada posisi itu kedalam wadah tadi
        hasil += arg1[jumlahHuruf]
    }
    //4. return wadah tadi
    return hasil
    }
    
    //output
    //kata terbalik dari input
    
    console.log(pembalik("seorang diri"));