
class empleado {
    static contador = 0;
  
    constructor(nombre, edad, sueldo) {
      this.id = ++empleado.contador;
      this.nombre = nombre;
      this.edad = edad;
      this.sueldo = sueldo;
      this.salario = 0;
    }
  
    calcularSalarioAnual() {
      this.salario = this.sueldo * 12;
      return this.salario;
    }
  }

let empleado1 = new empleado('Jose','18',100000)

empleado1.calcularSalarioAnual()

console.log(empleado1.id)

console.log(empleado1)

class gerente extends empleado {
    constructor(nombre,edad,sueldo){
        super(nombre,edad,sueldo)
    }
    calcularSalarioAnual(){
        this.salario = (this.sueldo*0.1+this.sueldo)*12
        return this.salario
    }
}

let gerente1 = new gerente('Jose','18',100000)

gerente1.calcularSalarioAnual()

console.log(gerente1)