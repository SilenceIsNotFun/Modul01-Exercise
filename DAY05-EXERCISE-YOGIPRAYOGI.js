// clone splitting
let arrayI= 0;
let testPotong = "hello world!"
let word2="";
let wordCheck = ( word1 , separator ) => {
        hasilBagi=[]
    for (z=0; z < word1.length ; z++){
        if (word1[z].includes(`${separator}`) == true){
            hasilBagi.push(word2);
            word2="";
        } else word2 += `${word1[z]}`;
        
    }   hasilBagi.push(word2) ;
        word2="";
        return hasilBagi;
};
console.log (wordCheck(testPotong, 'l'));
console.log(testPotong.split("l"))


//min max average sort
let minNumb = "";
let maxNumb = "";
let averNumb = "";
let semkata = "";
let c = 0
let minMax =(arr1=[]) => {
    
    urutan = arr1.sort(function (a,b) {return a - b})
    minNumb += `angka terkecil dari ${arr1} adalah ${urutan[0]}`
    maxNumb += `angka terbesar dari ${arr1} adalah ${urutan[arr1.length -1]}`
    averNumb += `rata rata dari ${arr1} adalah ${Math.round(c)}`
    semkata += `${minNumb}\n${maxNumb}\n${averNumb}`
    return semkata
    

    
};

console.log (minMax([29 , 1 , 10 , 11, 30, 50, 22]));

//minMax  average without sort
let y = 0
let minNumb1=""
let maxNumb1=""
let averNumb1=""
let sem1kata=""
let minMaxLoop= (arr1=[]) => {
    c = arr1.reduce ((a,b) => a+b , 0)/ arr1.length
    y = arr1[0]
    z = arr1[0]
    for(x=0 ;x < arr1.length; x++){
            
          if (y > arr1[x]){
            y= arr1[x]
        } else if(z < arr1[x]){
            z=arr1[x]
        }
    }
    minNumb1 += `angka terkecil dari ${arr1} adalah ${y}`
    maxNumb1 += `angka terbesar dari ${arr1} adalah ${z}`
    averNumb1 += `rata rata dari ${arr1} adalah ${Math.round(c)}`
    sem1kata += `${minNumb1}\n${maxNumb1}\n${averNumb1}`
    return sem1kata
}
console.log (minMaxLoop([29 , 1 , 10 , 11, 30, 50, 22]));
//calculate
let e = 0

let f = []
let addArray = (arr1=[],arr2=[]) => {
    if (arr1.length < arr2.length){
        for (d=0 ; d < arr2.length ; d++){
            if (arr1.length ==arr2.length){
                e= arr2[d] +arr1[d]
                f.push(e)
            } else e= arr2[d]
            f.push(e)

        }
    } else if (arr1.length > arr2.length){
        for (d=0 ; d < arr1.length; d++){
            if (arr1.length ==arr2.length){
                e= arr2[d] +arr1[d]
                f.push(e)
            } else e= arr1[d]
            f.push(e)}

    } else if ( arr1.length = arr2.length){
        for (d=0 ; d < arr2.length ; d++){
                e= arr2[d] + arr1[d]
                f.push(e)
            
        }        
    }
    return f
}
console.log(addArray([20, 19, 17, 8 ,9, 13], [3, 5 , 7 , 9 , 0]));


//nambahi object dengan check ada tidaknya
let wordA = ["centang", "centong" , "centing", "centung"]
let wordB = [ "comber", "centong", "centeng"]
let addWordArray = (arr1=[], word=[])=>{
    for(g=0; g < word.length ;g++){
        if(arr1.includes(word[g])== false){
        arr1.push (word[g])
    }
} return arr1
}
console.log(wordA);
console.log(wordB);
console.log(addWordArray(wordA, wordB));

let hasilOdd =[];
let angkaCheck =[90 , 21, 18 , 6, 7, 9 , 11];
let oddNumRem = (arr1=[]) => {
    for (k = 0 ; k < arr1.length ; k++){
        if(arr1[k] % 2 == 0){
            hasilOdd.push (arr1[k]);
        };
    } return hasilOdd;
};
console.log(angkaCheck);
console.log (oddNumRem(angkaCheck));


//congcat
arr11 =["hello" ,"world" , "disini", "ada", "saya"]
arr10 = ""
let kata = (arr1=[]) =>{
    for(h=0; h < arr1.length-2 ; h++){
        
            arr10 += `${arr1[h]}, `
        
       
    
    } 
    for (i=0; i <= h-1 ; i++){
        arr1.shift()
    } arr10 += `${arr1.join(" and ")}`
    
   return arr10
}
console.log(arr11);
console.log(kata(arr11));

