
class Animal {

  constructor (public nombre: string, public especie: string, public edad: number)
  {}

	mostrarInfo() {
		console.log(`Nombre: ${this.nombre}, especie: ${this.especie}, edad: ${this.edad}`)
	}
}

type Tamaño = "pequeño" | "mediano" | "grande"

class Leon extends Animal {

	constructor(nombre:string, especie: string, edad: number, public melena:boolean) 
	{
		super(nombre,especie,edad)
	}

	rugir(){
		console.log("ROARRRR, soy un león")
	}

	mostrarInfo() {
		console.log(`Nombre: ${this.nombre}, especie: ${this.especie}, edad: ${this.edad}`)
	}
}

class Elefante extends Animal {

	constructor(nombre:string, especie: string, edad: number, public trompa: boolean, public tamaño: Tamaño) 
	{
		super(nombre,especie,edad)
	}

	sonidoElefante(){
		console.log("JUMMM, soy un elefante")
	}

	mostrarInfo() {
		console.log(`Nombre: ${this.nombre}, especie: ${this.especie}, edad: ${this.edad}`)
	}
}

const animal1 = new Animal("Puppy", "Doberman", 4)
console.log(animal1)

const leon1 = new Leon("simba", "León", 5, true)
console.log(leon1)
leon1.mostrarInfo()
leon1.rugir()

const elefante1 = new Elefante("Dumbo", "elefante", 22, true, "grande")
console.log(elefante1)
elefante1.mostrarInfo()
elefante1.sonidoElefante()