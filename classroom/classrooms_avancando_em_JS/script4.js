let person = {
    name : "lucca",
    surname : "ceasomma",
    age : 12
}

for(let carc in person){
    console.log(person[carc])
}

let estudantes =["lucca", "sofia","Ana"]

//mostra o indice
for(let nome in estudantes){
    console.log(estudantes[nome])
}

//mostra conteudo
for(let nome of estudantes){
    console.log(nome)
}