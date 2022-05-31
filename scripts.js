
let valores = []

function adicionar(){
    let valor = document.getElementById("adicionar").value

    valores.push(valor)

    document.getElementById("valores").value = valores.join(", ");
}

function maiornum(){
    let maior = valores.reduce((valorantes,atual) => {
        if (parseInt(valorantes) > parseInt(atual)) {
            return valorantes
        }
        return atual
    })
    alert('o maior valor é: ' + maior)
}
function menornum(){
    let menor = valores.reduce((valorantes,atual) => {
        if (parseInt(valorantes) < parseInt(atual)) {
            return valorantes
        }
        return atual
    })
    alert('o menor valor é: ' + menor)
}
function medianum(){
    let quantidadevalores = valores.length
    
    let soma = valores.reduce((valorantes,atual) => {
        return parseInt(valorantes) + parseInt(atual)
    })
    alert('a media dos valores é: ' + soma / quantidadevalores)
}
function qtdelementos(){
    let Nelem = valores.length 
    alert('A quantidade de elementos é: ' + Nelem)
}