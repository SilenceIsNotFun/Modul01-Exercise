

// min max average score

let dbStudent = [ {nama : "tono", email: "tono.kece@gmail.com", age: new Date("2001-7-11"),score: 71},
                 {nama: "bardi", email :"bardigitu@gmail.com", age: new Date("2000-9-11"), score: 81},
                 {nama: "susi", email: "susiaja@gmail.com", age: new Date("1999-12-8"), score: 85},
                 {nama: "kasih", email:"kasihku@gmail.com", age: new Date("1999-11-12"),  score: 74}];

let  minMax = (angka) =>{
    let age = {highest:null,lowest:null,average:null};
    let score = {highest:null,lowest:null,average:null}
    for (let x of angka){
        x.age = Date.now () - x.age
        x.age = Math.floor (x.age/(1000 * 60 *60 *24 * 365))
        if(age.highest== null || age.highest.age < x.age){
            age.highest = x
        }

        if (age.lowest == null || age.lowest.age >x){
            age.lowest = x
        }
        age.average += x.age

        if (score.highest == null || score.highest.score < x.score){
            score.highest = x
        }

        if (score.lowest == null || score.lowest.score > x.score){
            score.lowest = x
        }
       
        score.average += x.score
    }
    age.average = age.average/angka.length    
    score.average = score.average/angka.length
    console.log(age,score)

}

minMax(dbStudent)

// marketplace 

class product {
    constructor(nama1,harga,jumlah){
        this.nama1 = nama1
        this.harga = harga
        this.jumlah = jumlah}
}        
class transaction{
    total = 0
    allproduct = []

    add(item){
        this.allproduct.push(item)
    }

    show(){
        for(let x of this.allproduct){
            console.log(`item ${x.nama1} => ${x.jumlah} harga ${x.jumlah * x.harga}`)
        }
    }

    checkout(){
        for(let x of this.allproduct){
            console.log(`item ${x.nama1} => ${x.jumlah}`)
            this.total = this.total + (x.harga*x.jumlah)
        }
        console.log(`total => ${this.total}`);
        this.removeall()
    }

    removeall(){
        this.allproduct = []
    }
}

let pembelian = new transaction()
pembelian.add(new product("chimory squezee",10000,2))
pembelian.add(new product(" cheetos",3500,5))
pembelian.add(new product("wall's oreo",12000,1))
pembelian.show()
pembelian.checkout()