// Definimos una clase llamada Employee que representa a un empleado
class Employee {
	// Constructor de la clase, que recibe tres parámetros: nombre, apellido y salario
	constructor(
			public _firstName: string,  // Nombre del empleado (público)
			public _lastName: string,   // Apellido del empleado (público)
			private _salary: number     // Salario del empleado (privado)
	) {
			// Asignamos los valores de los parámetros a las propiedades de la clase
			this._firstName = _firstName;
			this._lastName = _lastName;
			this._salary = _salary;
	}

	// Método setter para modificar el salario con una validación
	set salary(salary: number) {
			if (salary > 0) {  // Solo se actualiza si el salario es mayor a 0
					this._salary = salary;
			}
	}

	// Método getter para obtener el salario actual
	get salary() {
			return this._salary;
	}

	// Método para incrementar el salario en una cantidad específica
	giveRaise(extra: number) {
			const newSalary = this._salary + extra; // Calculamos el nuevo salario sumando el aumento
			this._salary = newSalary;  // Actualizamos el salario del empleado
			return newSalary;  // Devolvemos el nuevo salario
	}
	 // Método para obtener la información completa del empleado
	 getEmployeeInfo(): string {
		return `Empleado: ${this._firstName} ${this._lastName}, Salario: ${this._salary}`;
	}
}

// Creamos una instancia de la clase Employee con un empleado llamado Anthony Soto con un salario de 18000
const empleado1 = new Employee('Anthony', 'Soto', 18000);
console.log(empleado1.salary); // Debería imprimir 5000

console.log(empleado1.getEmployeeInfo()); // Empleado: Juan Perez, Salario:

empleado1.salary = 6000; // Cambia el salario
console.log(empleado1.salary); // Debería imprimir 6000

console.log(empleado1.getEmployeeInfo()); // Empleado: Juan Perez, Salario:

empleado1.giveRaise(500); // Aumenta el salario en 500
console.log(empleado1.salary); // Debería imprimir 6500

console.log(empleado1.getEmployeeInfo()); // Empleado: Juan Perez, Salario:


// O DE ESTA MANERA console.log(e1.giveRaise(2000));

