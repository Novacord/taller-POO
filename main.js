
//Ejercicio #1

class persona{
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){
        return `hola ${this.nombre}`
    }

    static esMayorDeEdad(edad){
        if (edad >= 18){
            return `mayor de edad`
        } else {
            return `menor de edad`
        }
    }

    get getEdad(){
        return `${this.edad} años`
    }

    get getSexo(){
        return this.sexo
    }
}

class estudiante extends persona{
    constructor(nombre,edad,sexo,carrera){
        super(nombre,edad,sexo)
        this.carrera = carrera
    }

    get getCarrera(){
        return this.carrera
    }

    estudiar(){
        return `<h2>${this.carrera}</h2>`
    }
}


var options = document.querySelectorAll(".option");

options.forEach(function(option) {
    option.children[0].style.display = "none";
  option.addEventListener('click', function() {
    options.forEach(function(opt) {
      opt.classList.remove("active");
      opt.children[0].style.display = "none";
    });
    this.classList.add("active");
    this.children[0].style.display = "flex";
  });
});

let nombre = document.querySelector('.input1')

let edad = document.querySelector('.input2')

let sexo = document.querySelector('.input3')

let carrera = document.querySelector('.input4')

document.querySelector('.cont').addEventListener('submit', (e)=>{
    e.preventDefault();
    let edadN = parseInt(edad.value)
    let estudiante1 = new estudiante(nombre.value,edadN,sexo.value,carrera.value)
    document.querySelector('#nombre').textContent = estudiante1.saludar()
    document.querySelector('#edad').textContent = estudiante1.getEdad
    document.querySelector('#sexo').textContent = estudiante1.getSexo
    document.querySelector('#Carrera').textContent = estudiante1.getCarrera
    document.querySelector('#mayor18').textContent = estudiante.esMayorDeEdad(estudiante1.getEdad)
})

//Ejercicio #2

class animal {
    constructor(nombre,edad,sonido){
        this.nombre = nombre
        this.edad = edad
        this.sonido = sonido
    }

    get getNombre(){
        return this.nombre
    }

    get getEdad(){
        return `${this.edad} años`
    }

    get getSonido(){
        return this.sonido
    }

    hacerSonido(){
        return  `<h1>${this.sonido}</h1>` 
    }
}

class perro extends animal {
    constructor(nombre,edad,sonido,raza){
        super(nombre,edad,sonido)
        this.raza = raza
    }

    get geRaza(){
        return this.raza
    }

    moverCola(){
        return `el perro está moviendo la cola`
    }
}

let nombreA = document.querySelector('#nombreA')

let edadA = document.querySelector('#edadA')

let raza = document.querySelector('#raza')

document.querySelector('.cont1').addEventListener('submit', (e)=>{
    e.preventDefault();
    let edadNA = parseInt(edadA.value)
    let perro1 = new perro(nombreA.value,edadNA,'Guau',raza.value)

    document.querySelector('#nombreAT').textContent = perro1.getNombre
    document.querySelector('#edadAT').textContent = perro1.getEdad
    document.querySelector('#sonido').textContent = perro1.getSonido
    document.querySelector('#moverCola').textContent = perro1.moverCola()
    document.querySelector('.raza').textContent = perro1.geRaza
})
