let number = 3

for(x=1; x<=number; x++){
    if(x % 3 == 0 && x % 5 == 0){
        console.log(`${x} = BizzBuzz`)
    } else if (x % 3 == 0 ){
        console.log(`${x} = Bizz`)
    } else if(x % 5 == 0){
        console.log(`${x} = Buzz`)
    } 
};


let numberAwal = 9
let totalPerkalian = 10
let hasilPerkalian

for (perkalian = 1 ; perkalian <= totalPerkalian; perkalian++){
    hasilPerkalian = numberAwal * perkalian
    console.log(`${numberAwal} x ${perkalian} = ${hasilPerkalian}`);
};

let palidrome = "ata"
let LetakBelakang = palidrome.length

for (LetakDepan=0; LetakDepan < LetakBelakang/2 ; LetakDepan++){
    if(String (LetakDepan) !== String (LetakBelakang - 1 - LetakDepan)){
        hasilPalidrome ="bukan palidrome"
    }
    else hasilPalidrome = `palidrome`
}

console.log (`${palidrome} merupakan kalimat ${hasilPalidrome}`);


let cm = 100
let km = cm / 100000
console.log(`${cm} cm =${km} km `);



let angkaUang= 200000
let price = 200000.00
let hasilFormat = angkaUang.toLocaleString("id")
console.log(`Rp. ${hasilFormat},00`);


let wordA = "hello world"
let hasilKata =  wordA.split("ell").join ("")
console.log(hasilKata);

let word = "hello world"
let pembagiKata= word.split(" ")

for (jumlahkata = 0; jumlahkata < pembagiKata.length ; jumlahkata++){
    pembagiKata[jumlahkata]= pembagiKata [ jumlahkata].charAt (0).toUpperCase() + pembagiKata [ jumlahkata].slice(1)
}

let hasilCap= pembagiKata.join(" ");

console.log(hasilCap);


let word2 = "bocil kematian"
let hasilReverse=""
for (jumlahHuruf =word2.length -1; jumlahHuruf >=0; jumlahHuruf--){
    hasilReverse += word2[jumlahHuruf]
}

console.log(hasilReverse);


let wordX = "kepasar aku membeli buah jeruk"
let vokal =""
let consonant = ""
    for (jumA=0 ; jumA < wordX.length ; jumA++ ){
        if (wordX [jumA].includes("a")){
            if (vokal.includes ("a") == false){
            vokal += wordX[jumA]}
        } else if (wordX [jumA].includes("e")){
            if (vokal.includes ("e") == false){
            vokal += wordX[jumA]}
        } else if (wordX [jumA].includes("i")){
            if (vokal.includes ("i") == false){
            vokal += wordX[jumA]}
        } else if (wordX [jumA].includes("o")){
            if (vokal.includes ("o") == false){
            vokal += wordX[jumA]}
        } else if (wordX [jumA].includes("u")){
            if (vokal.includes ("u") == false){
            vokal += wordX[jumA]}
        } else if (consonant.includes(wordX[jumA]) == false){
            consonant += wordX[jumA]
        }
    };
let hasilConsonant = consonant.split(" ").join("")
    console.log(vokal);
    console.log(hasilConsonant);