// function criarProduto(name, price, desconto) {
//     return{
//         nome: `${name}`,
//         preco: `${price}`,
//         desconto: `${desconto}%`
//     }
// }

// console.log(criarProduto('bola', 5, 20))

function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1149.49))