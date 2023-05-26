
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
        return this.millas
    }
    

}

let vehiculo1 = new vehiculo('logan','2015',50)

vehiculo1.acelerar()

console.log(vehiculo1)

class coche extends vehiculo{
    constructor(marca,modelo,velocidad,combustible){
        super(marca,modelo,velocidad)
        this.combustible = combustible
    }

    acelerar(){
        this.velocidad = this.velocidad+20   
    }
}

let coche1 = new coche('logan','2015',50,3000)

coche1.acelerar()

console.log(coche1)

console.log(coche.convertirKmHEnMph(coche1.getVelocidad))