const series = require('./database')
console.log(series)
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar por uma serie? S/N ')
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log("Estas são as categorias disponiveis: ")
    console.log("suspense", "comedia", "acao", "ficcão", "misterio", "satira")

    const entradaCategoria = readline.question('Qual categoria voce escolhe? ')

    const retorno = series.filter(series => series.categoria === entradaCategoria)

    console.table(retorno)
}
else{
    const seriesOrdenadas = series.sort((a,b) => a.eps - b.eps)
    console.log("Estas são todas as séries disponíveis: ") 
    console.table(seriesOrdenadas)
}





