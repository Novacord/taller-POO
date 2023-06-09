
class persona{
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){
        return `<h1>hola ${this.nombre}</h1>`
    }

    static esMayorDeEdad(edad){
        if (edad >= 18){
            return `<p>es mayor de edad</p>`
        } else {
            return `<p>no es mayor de edad</p>`
        }
    }

    get getEdad(){
        return this.edad
    }
}

let persona1 = new persona('Jose',18,'Masculino')

console.log(persona1.saludar())

document.querySelector('.respuesta1').innerHTML = persona1.saludar()


class estudiante extends persona{
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo)
        this.carrera = carrera
    }
    estudiar(){
        return `<h2>${this.carrera}</h2>`
    }
}

let estudiante1 = new estudiante('Maira',21 ,'Femenino','ingeneria industrial')

console.log(estudiante1)

document.querySelector('.respuesta2').innerHTML = estudiante1.saludar()

document.querySelector('.carrera').innerHTML = estudiante1.estudiar()

console.log(estudiante1.getEdad)

document.querySelector('.edad').innerHTML = persona.esMayorDeEdad(estudiante1.getEdad)
