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
        return this.edad
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
