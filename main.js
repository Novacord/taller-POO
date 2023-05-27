
//Ejercicio #1

class persona{
    constructor(nombre,edad,sexo){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
    }

    saludar(){
        return `Hola ${this.nombre}`
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

class figura{
    constructor(color){
        this.color = color
        this.area = 0
    }
}

class circulo extends figura{
    constructor(color,radio){
        super(color)
        this.radio = radio
        this.radio2 = Math.pow(this.radio,2)
    }
    calcularArea(){

        this.area = 3.1416*this.radio2
        return this.area
    }
}

class rectangulo extends figura{
    constructor(color,ancho,alto){
        super(color)
        this.ancho = ancho
        this.alto = alto
    }
    calcularArea(){
        this.area = this.ancho*this.alto
        return this.area
    }
}

let color = document.querySelector('#color')

let radio = document.querySelector('#radio')

document.querySelector('.cont2').addEventListener('submit',(e)=>{
    e.preventDefault()
    let radioN = parseFloat(radio.value)
    let circulo1 = new circulo(color.value,radioN)
    circulo1.calcularArea()
    console.log(circulo1)
    document.querySelector('#resultado').textContent = circulo1.calcularArea()
})

let colorC = document.querySelector('#colorC')

let alto = document.querySelector('#alto')

let ancho = document.querySelector('#ancho')

document.querySelector('.cont3').addEventListener('submit',(e)=>{
    e.preventDefault()
    let altoA = parseFloat(alto.value)
    let anchoA = parseFloat(ancho.value)
    let rectangulo1 = new rectangulo(colorC.value,altoA,anchoA)
    rectangulo1.calcularArea()
    console.log(rectangulo1)
    document.querySelector('#resultadoC').textContent = rectangulo1.calcularArea()
})

class vehiculo{
    constructor(marca,modelo,velocidad){
        this.marca = marca
        this.modelo = modelo
        this.velocidad = velocidad
        this.kilometos = 0
        this.millas = 0
    }

    get getVelocidad(){
        return this.velocidad
    }

    acelerar(){
        this.velocidad = this.velocidad+10
        return this.velocidad
    }

    static convertirKmHEnMph(velocidad){
        this.millas = velocidad*0.62
        return `${this.millas} millas `
    }
    

}
class coche extends vehiculo{
    constructor(marca,modelo,velocidad,combustible){
        super(marca,modelo,velocidad)
        this.combustible = combustible
    }

    acelerar(){
        this.velocidad = this.velocidad+20 
        return `${this.velocidad} K/H //`    
    }
}

let marca = document.querySelector('#marca')

let modelo = document.querySelector('#modelo')

let velocidad = document.querySelector('#velocidad')

let combustible = document.querySelector('#combustible')

let suma = 0

document.querySelector('.cont4').addEventListener('submit',(e)=>{
    e.preventDefault()
    let velocidadA = parseFloat(velocidad.value) 
    let coche1 = new coche(marca.value,modelo.value,velocidadA,combustible.value)
    console.log(coche1.getVelocidad)
    suma += coche1.getVelocidad
    document.querySelector('#resultadoCc').textContent = coche1.acelerar()
    document.querySelector('#resultadoCa').textContent = coche.convertirKmHEnMph(coche1.getVelocidad)
    document.querySelector('#raceelerar').addEventListener('click', ()=>{
        suma += 20
        document.querySelector('#resultadoCc').textContent = `${suma} K/H //`
        document.querySelector('#resultadoCa').textContent = coche.convertirKmHEnMph(suma)
    })
})

class empleado {
    static contador = 0
  
    constructor(nombre, edad, sueldo) {
      this.id = ++empleado.contador
      this.nombre = nombre
      this.edad = edad
      this.sueldo = sueldo
      this.salario = 0
    }
  
    calcularSalarioAnual() {
      this.salario = this.sueldo * 12
      return this.salario
    }
  }

let nombreE = document.querySelector('#nombreE')

let edadE = document.querySelector('#edadE')

let sueldo = document.querySelector('#sueldo')

document.querySelector('#form1').addEventListener('submit',(e)=>{
    e.preventDefault()
    let sueldoN = parseFloat(sueldo.value)
    let empleado1 = new empleado(nombreE.value,edadE.value,sueldoN)
    document.querySelector('#resultadoS').textContent =  `Saldo Anual: ${empleado1.calcularSalarioAnual()}`
    document.querySelector('#resultadoId').textContent = `ID: ${empleado1.id}`
})



class gerente extends empleado {
    constructor(nombre,edad,sueldo){
        super(nombre,edad,sueldo)
    }
    calcularSalarioAnual(){
        this.salario = (this.sueldo*0.1+this.sueldo)*12
        return this.salario    
    }
}

let nombreG = document.querySelector('#nombreG')

let edadG = document.querySelector('#edadG')

let sueldoG = document.querySelector('#sueldoG')

document.querySelector('#form2').addEventListener('submit',(e)=>{
    e.preventDefault()
    let sueldoN = parseFloat(sueldoG.value)
    let gerente1 = new gerente(nombreG.value,edadG.value,sueldoN)
    gerente1.calcularSalarioAnual()
    console.log(gerente1)
    document.querySelector('#resultadoG').textContent =  `Saldo Anual: ${gerente1.calcularSalarioAnual()}`
})