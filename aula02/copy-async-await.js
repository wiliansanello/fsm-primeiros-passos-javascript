console.log(1)
setTimeout(()=> {
    console.log('Olá em 2 segundos')
},2000)
console.log(2)

let count = 0
let interval  = setInterval(()=>{
    console.log('olá')
    count++
    if(count > 5){
        clearInterval(interval)
    }
}, 1000)

let interval2 = setInterval(()=>{
    console.log('olá 2')
    count++
    if(count > 15){
        clearInterval(interval2)
    }
},500)

console.log(3)

