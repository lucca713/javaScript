/*funcao construtora pega um objeto vazio,  por meio de uma funcao e 
 e vai montando ele, por isso usa o return, para poder pegar o valor e retornar para o objet*/

function createProduct(name){
    const product = {}
    //objeto.o paramentro dele = o que a funcao esta recebendo
    product.name = name

    product.details = function(){
        console.log(`O nome do produto eh ${this.name}`.toUpperCase())
    }

    return product
}

// o new cria um novo obejto utilizando a estrutura da funcao construtora
const product1 = new createProduct("Teclado")

//product1.details()

//product2 = new createProduct("Mouse")
//product2.details()

