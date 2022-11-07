let date = new Date("10/27/2022")
let newDate = new Date()

let diffDays= parseInt ((newDate - date)/(1000 * 60 * 60 * 24), 10)
console.log(diffDays);

let celcius = 33
let Fahr =  celcius * 9 / 5 + 32
console.log(`${celcius} celcius = ${Fahr} fahreinheit`)

let ganjilGenap = 24

if (ganjilGenap % 2 == 0){
    console.log (`bilangan ${ganjilGenap} adalah genap`)
}else { console.log (`bilangan ${ganjilGenap} adalah ganjil`)}


let primeNumber = 8
let primeCheck = true
let x 

if (primeNumber >1){
    for(x = 2 ; x < primeNumber; x++){
        if (primeNumber % x == 0){
            primeCheck = false;
            break;
        }
    }
}
if (primeCheck){
    console.log(`${primeNumber} adalah bilangan prima`);
} else {
    console.log(`${primeNumber} adalah bilangan non prima`)
}


let sumNumber = 5
let sumStart = 0
let sumfinal = 0

while (sumStart <= sumNumber){
    sumfinal=sumStart + sumfinal
    sumStart ++
}
console.log(sumfinal);

let angkaDasarFaktorial = 5
let hasilFaktorial = angkaDasarFaktorial

        for (stopFaktorial = 1; angkaDasarFaktorial > stopFaktorial; angkaDasarFaktorial--){

        hasilFaktorial =hasilFaktorial * (angkaDasarFaktorial -1)}

    console.log(hasilFaktorial);

let angkaFib = 6
let sebelumFib=0
let hasilFib=1
for(urutanFib = 2; urutanFib < angkaFib; urutanFib ++ ){
    sebelumFib= hasilFib - sebelumFib
    hasilFib= sebelumFib+ hasilFib
    
}

console.log(hasilFib);