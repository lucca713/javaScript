/*

//const guest = document.querySelector("#guest-1")
//console.log(guest.textContent)

//alterando estilo

//const input = document.querySelector("#name")

//adicionando a classe por js
//input.classList.add("input-error")


//para remover a classe
//input.classList.remove("input-error")


// toggle se a classe existe ele remove e visse verso
//input.classList.toggle("input-error")

const guests = document.querySelector("ul")

const newGuests = document.createElement("li")
newGuests.classList.add("guest") //adicionando uma classe


const guestName = document.createElement("span")

guestName.textContent = "lucca" // adiciona elemento no span

//const newName = document.createElement("span")

//newName.textContent = "Ana"

//newGuests.append(newName, guestName)

newGuests.append(guestName) //adiciona um novo elemendo no ul que que é o formulário

guests.prepend(newGuests)

const input = document.querySelector("input")

//input.setAttribute("disabled",true)

//input.setAttribute("type", "file")

//input.removeAttribute("id")


window.addEventListener("load",()=>{
    console.log("Página foi carregadas")
})


addEventListener("click", (event)=>{
    
    //retonar informacoes do evento
    console.log(event.target.textContent)
})
    */
   