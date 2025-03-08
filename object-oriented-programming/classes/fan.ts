type FanSize = "small" | "medium" | "large";
type FanColor = "black" | "white" | "blue";
type FanSpeed = 0 | 1 | 2 | 3 | 4;

class Fan {
  public speedStorage: FanSpeed = 0; // Solo `speed` está fuera del constructor

  constructor(
    public typeStorage: string,  // Cambiamos el nombre interno
    public sizeStorage: FanSize,
    public colorStorage: FanColor
  ) {}

  // **GETTERS Y SETTERS (sin conflictos de nombre)**
  get type(): string {
    return this.typeStorage;
  }
  set type(newType: string) {
    this.typeStorage = newType;
  }

  set size(newSize: FanSize) {
    this.sizeStorage = newSize;
  }
	get size(): FanSize {
    return this.sizeStorage;
  }
	
  get color(): FanColor {
    return this.colorStorage;
  }
  set color(newColor: FanColor) {
    this.colorStorage = newColor;
  }

  get speed(): FanSpeed {
    return this.speedStorage;
  }
  set speed(newSpeed: FanSpeed) {
    this.speedStorage = newSpeed;
  }
}

// **Ejemplo de uso**
const myFan = new Fan("Sony", "medium", "white");
console.log(myFan)

console.log("Mi marca es: ",myFan.type);  // ✅ "Sony"
console.log("Mi velocidad es: ",myFan.speed); // ✅ 0 (inicializado fuera del constructor)

myFan.type = "Samsung";   // ✅ Cambia el tipo correctamente
console.log("Mi nueva marca es: ",myFan.type);  // ✅ "Samsung"

myFan.speed = 3;  // ✅ Cambia la velocidad correctamente
console.log("Mi nueva velocidad es: ",myFan.speed); // ✅ 3

console.log("Mi datos actualizados son: ", myFan)

// myFan.speed = 5;  // ❌ Lanza un error: "Velocidad fuera de rango (0-4)."
