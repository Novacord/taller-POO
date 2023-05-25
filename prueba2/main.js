
class animal {
    constructor(nombre,edad,sonido){
        this.nombre = nombre
        this.edad = edad
        this.sonido = sonido
    }

    hacerSonido(){
        return  `<h1>${this.sonido}</h1>` 
    }
}


let animal1 = new animal('pelusa','4','miau')

document.querySelector('.sonido').innerHTML = animal1.hacerSonido()


class perro extends animal {
    constructor(nombre,edad,sonido,raza){
        super(nombre,edad,sonido)
        this.raza = raza
    }

    moverCola(){
        return `el perro está moviendo la cola`
    }
}


let perro1 = new perro('toby','4','guau')

document.querySelector('.perro').innerHTML = perro1.moverCola()