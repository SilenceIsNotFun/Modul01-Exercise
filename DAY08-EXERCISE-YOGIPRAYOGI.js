let mobil =[{name: "ertiga", brand:"suzuki" ,machine: "dohc",cc: 1550},
{name: "avanza", brand:"toyota" ,machine: "dohc",cc: 1500},
{name: "supra", brand:"toyota" ,machine: "v8",cc: 5000}]



let nulis = (arr1) => {
  tempt =""
  for (i=0; i < arr1.length ; i++){
    
    tempt += `${i+1}. ${arr1[i].name} ${arr1[i].brand} with ${arr1[i].machine} ${arr1[i].cc.toLocaleString()} \n`
  }
  return tempt
}

console.log(nulis(mobil));
let pencarianNama = (arr1,arr2) => {
  
  tempt =""
  for ( l=0; l <arr1.length ; l++){
    if (arr1[l].name == arr2){
      tempt += `${arr1[l].name} ${arr1[l].brand} with ${arr1[l].machine} ${arr1[l].cc.toLocaleString()} \n`

    }
  }
  return tempt
}
let pencarianBrand = (arr1,arr2) => {
  
  tempt =""
  for ( l=0; l <arr1.length ; l++){
    if (arr1[l].brand == arr2){
      tempt += `${arr1[l].name} ${arr1[l].brand} with ${arr1[l].machine} ${arr1[l].cc.toLocaleString()} \n`

    }
  }
  return tempt
}

let nulis1 = (arr1, cbfn ="", arr3) => {
  tempt =""
  if ( !cbfn ){
   nulis(arr1)
} 
 else cbfn(arr1,arr3)
  return tempt
 }
 
console.log(nulis1(mobil,pencarianBrand, "supra"));