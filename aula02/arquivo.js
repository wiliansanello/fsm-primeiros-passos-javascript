const fs = require('fs')

//callback hell
fs.readFile('temporizadores.js', (err, data) => {
    fs.writeFile('temporizadores-copy.js', data, (err) => {
        if (err){
            console.log(err)
        }
        console.log('Arquivo copiado')
    })
})

//promises + async/await

const readFile = path => new Promise((resolve, reject) => {
    fs.readFile(path, (err,data) => {
        if(err){
            reject(err)
        } else {
            resolve(data)
        }
    })
})

const writeFile = (path, data) => new Promise((resolve,reject)=> {
    fs.writeFile(path, data, (err) => {
        if(err){
            reject(err)
        }else{
            resolve()
        }
    })
})

readFile('temporizadores.js')
.then(data => writeFile('copia-promise.js', data))
.catch(err=> console.log(err))

//async/await

const copyFile = async() => {
    console.log('olá async/await')
    try{
    const data = await readFile('temporizadores.js')
    await writeFile('copy-async-await.js', data)
    console.log('arquivo lido')
} catch(err) {
    console.log('erro', err)
}
}

copyFile().then( () => console.log('fim do async/await'))