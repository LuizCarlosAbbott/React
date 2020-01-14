let valor // não inicializado
console.log(valor)
// console.log(valor2) // is not defined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // type error: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // evite atribuir de forma explicita o undefined 
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem presso
console.log(!!produto.preco)
console.log(produto)