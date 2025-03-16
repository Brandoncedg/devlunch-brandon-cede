
class Vehiculo {
  constructor (
  public emoji: string, 
	public marca: string, 
	public modelo: string, 
	public añoDeFabricación: number )
  {}

	arrancar(){
		return console.log("El vehiculo está arrancando")
	}

	mostrarInformacion(){
		return console.log(
			`${this.emoji} Marca: ${this.marca}, Modelo: ${this.modelo}, Su año de fabricación es ${this.añoDeFabricación}`)
	}
}

class Carro extends Vehiculo {
	
	constructor (
		emoji: string, 
		marca: string, 
		modelo: string, 
		añoDeFabricación: number,
		public numeroPuertas: number )
	{
		super(emoji, marca, modelo, añoDeFabricación)
	}

	encenderAire(){
		return console.log("❄️ Aire acondicionado encendido")
	}
}

class Moto extends Vehiculo {
	
	constructor (
		emoji: string, 
		marca: string, 
		modelo: string, 
		añoDeFabricación: number,
		public sidecar: boolean )
	{
		super(emoji, marca, modelo, añoDeFabricación)
	}

	hacerWheelie(){
		if (this.sidecar){
			console.log("La moto está haciendo wheelie")
		} else {
			console.log("La moto no puede hacer wheelie")
		}
	}
}
const carro1 = new Carro("🚗", "TOYOTA", "HILUX", 2025, 4)
carro1.mostrarInformacion()
carro1.arrancar()
carro1.encenderAire()

const moto1 = new Moto("🏍️", "TOYOTA", "SERPENTO", 2025, true)
moto1.mostrarInformacion()
moto1.hacerWheelie()