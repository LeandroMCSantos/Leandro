
let produtos = document.querySelector('#produtos')
let botao = document.querySelector('#comprar')

botao.addEventListener('click', comprar)
function comprar() {
    let compra = "produto comprado\n"
    if (produtos.value == "Hamburguer Simples") {
        compra += "produto: " + produtos.value + ", valor: R$50,00"
    } else if (produtos.value == "X-mengao") {
        compra += "produto: " + produtos.value + ", valor: R$20,00"
    } else if (produtos.value == "como isso afetou o gremio") {
      compra += "produto: " + produtos.value + ", valor: R$1.000.000.000,00"
    } else {
        compra += "selecione um produto!"
    }
    alert(compra)
}
