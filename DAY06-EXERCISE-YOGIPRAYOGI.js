function getAge(dateString) {
    let date = new Date(dateString)
    let newDate = new Date()

let diffDays= parseInt ((newDate - date)/(1000 * 60 * 60 * 24 *30 *12), 10)
 
    return diffDays;
}
// min max average score
class  student {
    constructor(nama,email,age,score){
        this.nama = nama
        this.email = email
        this.age = getAge(age)
        this.score = parseInt(score)
    }

}
let dbStudent = [ new student("tono", "tono.kece@gmail.com", "10/27/2000", 71),
                 new student( "bardi", "bardigitu@gmail.com", "9/11/2000", 81),
                 new student ("susi", "susiaja@gmail.com", "12/27/1999", 85),
                 new student("kasih", "kasihku@gmail.com", "11/27/1999",  74)];

let pembandingScore = dbStudent.sort(function(a,b){return a.score - b.score})
let min = `paling rendah nama :${pembandingScore[0].nama}, email : ${pembandingScore[0].email}, age :${pembandingScore[0].age} ,score :${pembandingScore[0].score}`
// let averScore = []
// for (score in dbStudent){
//     averScore.push (dbStudent.score)
// }
console.log(min);