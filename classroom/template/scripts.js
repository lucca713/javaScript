// 1 -> vizualizar o conteudo do document

console.log(document)

//2 -> Ler o titulo da página

console.log(document.title)

//3 -> acessar o documento pelo id

const guest = document.getElementById("guest-2")
console.log(guest)

//4 -> acessando o documento pela class

const guestsByclass = document.getElementsByClassName("guest")

console.log(guestsByclass)

//exibindo o primeiro elemento da lista
console.log(guestsByclass.item(0))
//ou
console.log(guestsByclass[0])

//selecionar elemento pela tag

const guestElementbyTag = document.getElementsByTagName("form")

console.log(guestElementbyTag)

// usando o query selectro, ele usa para tudo só tem que usar o simbolo antes

const que = document.querySelector('#guest-2')

console.log(que)


const que1 = document.querySelectorAll('.guest')

console.log(que1)