// //bandingkan 2 objek
let objA = {
    nama : "tono",
    umur : 25 ,
    pekerjaan : "pemancing"
}
let objB = {
    nama : "banjo",
    umur : 28 ,
    pekerjaand : "pengamen"
}
let objC ={
    nama : "tono",
    umur : 25 ,
    pekerjaan : "pemancing"
}
const isObject = (obj) => {
    return (Object.prototype.toString.call(obj) === '[object Object]');
}

function pembandingObj(obj1, obj2){
    hasilBanding =""
    if(!isObject(obj1) || !isObject(obj2)){
        hasilBanding +=`kedua objek ini tidak sama`
        return hasilBanding;
    }

    let len = null;
    if(Object.keys(obj1).length != Object.keys(obj2).length){
        hasilBanding +=`kedua objek ini tidak sama`
        return hasilBanding;
    }else{
        len = Object.keys(obj1).length;
    }

    let match = 0; 
    Object.keys(obj1).forEach(i => {
        if(obj1[i] === obj2[i]){
            match++; 
        }
    })
    
    if(match === len){
        hasilBanding += `kedua object ini sama`
        return hasilBanding;
    }

    hasilBanding +=`kedua objek ini tidak sama`
    return hasilBanding;
}

console.log(pembandingObj(objA,objB));
console.log(pembandingObj(objA,objC));


//intersection 2 object

let objD = { a: 2 , b: 3 , c: 5 , f: 8}
let objE = {a:2 , d : 8 , e:5 , f: 8}

let interObj = (a,b) => {
    let hasilInter={}
    Object.keys(a).forEach (i => {
        if(a[i] == b[i]){
            hasilInter[i] = a[i]
        }
    }
)
    return hasilInter
}

console.log(interObj(objD,objE));


// merge unit

let studentDb1 =[{nama : "tono", email: "tono.kece@gmail.com"},
{nama: "bardi", email :"bardigitu@gmail.com"},
{nama: "susi", email: "susiaja@gmail.com"}]
let studentDb2 =[{nama: "susi", email: "susiaja@gmail.com"},
{nama: "kasih", email:"kasihku@gmail.com"}]

let gabung=(a,b) => {
    let hasilGabung=[...a,...b];
    for(c=0; c < hasilGabung.length ; c++){
        for(d=c+1 ; d < hasilGabung.length; d++){
            if (hasilGabung[c].nama === hasilGabung[d].nama &&
                hasilGabung[c].email === hasilGabung[d].email
              ) {
                hasilGabung.splice(d, 1);
              }
        }
    } return hasilGabung
}

console.log(gabung(studentDb1,studentDb2));

// balik property jadi value, value jadi property

let balikProp = (array) => {
    let hasilBalik = [];
    let d;
    for (c = 0; c < array.length; c++) {
      for (let key in array[c]) {
        d = key;
        key = array[c][key];
        array[c][key] = d;
        delete array[c][d];
      }
      hasilBalik.push(array[c]);
    }
    return hasilBalik;
  }

// console.log(balikProp(studentDb2));

let faktorial = (a) => {
    hasil = a
    for (stopFaktor =1; a > stopFaktor ; a--){
        hasil = hasil * (a-1)
    }
    return hasil
}

console.log(faktorial(10));