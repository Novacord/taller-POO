
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

let figura1 = new circulo('Azul',5)

figura1.calcularArea()

console.log(figura1)

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

let figura2 = new rectangulo('Verde',5,10)

figura2.calcularArea()

console.log(figura2)