let buah = ["apel", "semangka", "jeruk"];
let stok = [15 , 10 , 25];
let harga = [ 1000, 2000, 3000];
let buahStok="";

for (a=0 ; a < buah.length ; a++){
 buahStok += (`${a+1}. ${buah[a]} =, ${stok[a]}, Rp. ${harga[a]},00 \n`);
};

console.log(buahStok);

let nilaiUas = [["aldo" , "sains" , "A"] , ["Budi" , "sosial" , "C"] , ["aldo" , "matematik" , "D"]];
let hasilUas = "";
for (b=0 ; b < nilaiUas.length ; b++){
    hasilUas += (`${a+1}. ${nilaiUas[b][0]}, pelajaran: ${nilaiUas[b][1]}, nilainya= ${nilaiUas[b][2]} \n`)
   };
console.log(hasilUas);

let hasilSegitiga = "";
let e =1;
let segitiga = (tinggi) => {
    
    
    for (c=1 ; c <= tinggi; c++){
            
        for (d=1; d <= c ; d++){
            if (e < 10) {
                hasilSegitiga += `0${e} `;
                 e++;
            } else 
                hasilSegitiga += `${e} `;
                e++;
            
        } hasilSegitiga += `\n`;
        
    };
    return  hasilSegitiga;
} ;
console.log(segitiga(5));
let hasilBuzz ="";
let checkNumb = (total) => {
    for(f=1; f<=total; f++){
        if(f % 3 == 0 && f % 5 == 0){
           hasilBuzz +=`${f} = BizzBuzz \n`
        } else if (f % 3 == 0 ){
             hasilBuzz += `${f} = Bizz\n`
        } else if(f % 5 == 0){
            hasilBuzz += `${f} = Buzz \n`
        } 
    } return hasilBuzz;
} 
console.log(checkNumb(25));


let hasilBmi = "";
let bmi=(berat , tinggi) => {
    totalBmi= berat / Math.pow(tinggi,2);
    hasilBmi += `BMI anda adalah ${totalBmi.toFixed(2)} artinya berat badan anda adalah `;
    if (totalBmi <= 18.5 ) {
        return hasilBmi += `less weight`
    } else if (totalBmi > 18.4 && totalBmi < 25 ) {
        return hasilBmi += `ideal`
    } else if (totalBmi > 24.9 && totalBmi < 30 ) {
        return hasilBmi += `overweight`
    } else if (totalBmi > 29.9 && totalBmi <40 ){
        return hasilBmi += `very overwheight`
    } else if (totalBmi > 39.9  ){
        return hasilBmi += `obesity`
    } ; 
};

console.log(bmi(105 , 1.8));


let hasilOdd =[];
let angkaCheck =[20 , 19, 18 , 6, 7, 9 , 11];
let oddNumRem = (arr1=[]) => {
    for (k = 0 ; k < arr1.length ; k++){
        if(arr1[k] % 2 == 0){
            hasilOdd.push (arr1[k]);
        };
    } return hasilOdd;
};
console.log (oddNumRem(angkaCheck));

let arrayI= 0;
let word2="";
let wordCheck = ( word1) => {
        hasilBagi=[]
    for (z=0; z < word1.length ; z++){
        if (word1[z].includes(` `) == true){
            hasilBagi.push(word2);
            word2="";
        } else word2 += `${word1[z]}`;
        
    }   hasilBagi.push(word2) ;
        word2="";
        return hasilBagi;
};
console.log (wordCheck("Hello world!"));
console.table (wordCheck("halo dunia yang sudah lama tidak aku jumpai!"));


