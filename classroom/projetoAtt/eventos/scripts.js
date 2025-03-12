/*
const ul = document.querySelector("ul")
const button = document.querySelector("button")
const form = document.querySelector("form")
ul.addEventListener("scroll",()=>{
    console.log(ul.scrollTop)
    if(ul.scrollTop >=300){
        console.log("fim da lista")

        ul.scrollTo({
            top:0,
            behavior: "smooth",
        })
    }
})





form.onsubmit = (event) => {
    event.preventDefault()
    console.log("voce fez um submit 1")
}

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("voce fez um submit 2")
}

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log("vc fez um submit 3")
})

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    console.log("vc fez um submit 4")
})
    */
/*
const input = document.querySelector("input")
const guest = document.querySelector("#guest-1")
//keydown - quando uma tecla é pressionada (todas as do teclado)
/*
input.addEventListener("keydown", (event)=>{
   console.log(event.key)
})

//quando um caracter é precionado, ignora shift, dell, ctrl
input.addEventListener("keypress",(event)=>{
    console.log(event)
})

input.addEventListener("change", (event)=>{
    console.log(event.key)
})



guest.addEventListener("click",(e)=>{
    e.preventDefault()
    //retonar o conteudo como texto
    guest.textContent = "lucca"
    console.log(guest)
})
 
*/

const input = document.querySelector("input")
const form = document.querySelector("form")


form.addEventListener("submit", (e) =>{
e.preventDefault()

const regex = /\D+/g
const value = input.value.replace(/ /g,"")

if(regex.test(value)){
    alert("padrao encontrado")
}else{
    alert("padrao nao encontrado")
}

console.log(value)

})