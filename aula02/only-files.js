/*A lista de arquivos retornado no exercício 2, também retorna diretórios. 
Crie uma função que retorne todos os arquivos em um vetor (deve-se ignorar os 
  diretório retornados pelo readdir).
Algumas funções do fs e de Promises que te ajudarão:
    fs.stat(caminhoArquivoDiretorio, (err, stats) => {})
    stats que é retornado no callback possui um isDirectory() e um isFile()
        (sou bonzinho né, cantei a pedra aqui ;) )
    Promise.all(vetorDePromises): aguarda um vetor de promises ser executado, e 
    retorna uma promise que retorna para um vetor com o resultado.
    Ex:

Promise.all([promise1, promise2]).then( results => {
results[0] // resultado de promise1
results[1] // resultado de promise2
}) */

const fs = require('fs')

const stat = path => new Promise((resolve, reject) => {
  fs.stat(path, (err, stats) => {
    if (err) {
      reject(err)
    } else {
      resolve(stats)
    }
  })
})

const readdir = path => new Promise((resolve, reject) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      reject(err)
    } else {
      resolve(files)
    }
  })
})

const isFile = async (path) => {
  const stats = await stat(path)
  return stats.isFile() ? path : false
}

const execute = async () => {
  const files = await readdir('./')
  //const stats = await stat(files[0])
  const onlyFiles = await Promise.all(files.map(f => isFile(f)))
  const possibleFile = onlyFiles.filter(val => val)
  console.log(possibleFile)
}

execute()