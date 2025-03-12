//criando um array vazio e sem tamanho 
const newArray = new Array()
console.log(newArray)
console.log("lucca".length)

//criando um array vazio mas com tamanho
const available = new Array(10)
console.log(available)

//criar erray com objetos nele

let fruits = ['apple','orange','banana']

console.log(fruits)
console.log(fruits[0])

//ultimo valor
console.log(fruits[fruits.length-1])

const frase = "lucca santos cerasomma"
//criando um array com string
console.log(frase.split(" "))

/*criando array por cada letra
cria um array com as coisas de (from) frase*/
console.log(Array.from(frase))

//adicionar itens em um array


let user = []

//push adiciona iten aom fim da lista
user.push("lucca")
user.push("Ana")
user.push("Bruno")

//adicionar no inicio da lista
user.unshift("isabelle")
console.log(user)

//tirar um item do comeco da lista

user.shift()
console.log(user)

user.pop()
console.log(user)

let listaObj = ['mouse', 'teclado','violao']
console.log(listaObj.indexOf("mouse"))

if(listaObj.indexOf("teclado")){
    console.log("true")
}else
    console.log("false")