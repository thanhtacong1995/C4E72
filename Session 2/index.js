// let a = true
// console.log( '3'===3) 
//     for(let i =100; i>0; i-=2 ) {
//     console.log(i)
//      } 

// yob = prompt('dien nam sinh vao day')
// age = 2020 - yob
// console.log(age)
// if(age > 18) {
// console.log('enjoy yourself')   
// }
// if (age> 21) {
//     console.log('Vo ban co bit ban vao day ko')
// }
// else {
//  console.log('bo me co bit em o day ko')   
// }

let a = Number(prompt('Dien so a'))
let b = Number(prompt('Dien so b'))
let c = Number(prompt('Dien so c'))
let delta = b**2 - 4*a*c
if(delta<0) {
    console.log('phuong trinh vo nghiem')
}
else if(delta == 0) {
    let result = -b / 2*a
    console.log('pt co nghiem kep', result)
    
}
else {
    let x1 = (-b + delta**1/2 * 1/2*a)
    let x2 = (-b - delta**1/2 * 1/2*a)
    console.log(`pt co nghiem x1=${x1} x2=${x2}`)
    
}

   
