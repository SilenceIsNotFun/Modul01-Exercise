//title duplicator map dengan perintah pangkat 2

//input
//1. 1buah array angka
let array1= [1,2,3,4,5,6,7]
//2. perintah yang diminta yaitu math.pow

function duplicatorMap(arr,cbfn){
//proses
//1.buat wadah penampung hasil
      hasil=[]
// 2. buat FOR loop untuk setiap array 
      for (i=0; i < arr.length; i++){
//3. disetiap array lakukan pemangkatan 2 dengan menggunakan Math.pow
        hasil.push(cbfn(arr[i],2))
      }
//4. return wadah tadi  
      return hasil
    }
//output 
//setiap index array dipangkat2 dari hasil awal
    console.log(array1)
    console.log(duplicatorMap(array1,Math.pow));

//title duplicator filter dengan perintah umur diatas

//input
//1. 1 buah array angka
let array2= [17,20,12,40,50]
//2. 1 fungsi cek umur

//proses
//1. buat fungsi cek umur
function cekUmur(arr){
//2. return angka yang diatas 18
      return arr >=18
}
//3.buat function utama bernama duplicator
function duplicatorFilter(arr,cbfn){
//4. buat wadah untuk menampung hasil
    hasil=[]
//5. buat FOR loop untuk setiap array 
    for (i=0; i < arr.length; i++){
//6.menggunakan IF dengan kondisi cek benar tidaknya dengan fungsi cek umur 
      if(cbfn(arr[i])){
 //7. jika hasilnya benar maka nilai akan di push ke wadah
        hasil.push(arr[i])
      }
    }
//8. return wadah
    return hasil
}
//output
// array yang memenuhi syarat umur
console.log(array2);
console.log(duplicatorFilter(array2,cekUmur));

//title duplicate indexof yang angkanya genap

//input
//1. 1buah array angka
let array3= [21,21,24,21]
//2. fungsi pengecek genap

//proses
//1. buat fungsi cek angka genap
function genap(arr){
//2. return data berupa true jika di modulus 2 hasilnya 0
      return (arr % 2 == 0)
}
    
//3 buat fungsi utama
    function duplicatorFind(arr,cbfn) {
//4 buat FOR loop untuk setiap array 
      for (i=0; i < arr.length; i++){
//5. menggunakan IF dengan kondisi callback fungsi genap true    
        if(cbfn(arr[i])){
//6.jika hasil fungsi benar maka ketikan posisi i saat itu
          console.log(i);
        }
        
    }
      
}
//output nomer index dari angka ganjil
console.log(array3);
duplicatorFind(array3,genap)

