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
let min = `paling rendah ${Object.values(pembandingScore[0])}`
let averScore = []
for (f=0; f < dbStudent.length ; f++){
    averScore.push (dbStudent.score[0])
}
console.log(averScore);
console.log(min);