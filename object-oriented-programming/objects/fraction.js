
/*


const createFraction = (numerator, denominator) => {
    return {
      numerator,
      denominator
    };
  };
  
  // 🔹 ADDITION OF FRACTIONS
  const addFractions = (f1, f2) => {
    const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator);
    const denominator = f1.denominator * f2.denominator;
  
    return createFraction(numerator, denominator);
  };
  
  // 🔹 SUBTRACTION OF FRACTIONS
  const subtractFractions = (f1, f2) => {
    const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator);
    const denominator = f1.denominator * f2.denominator;
  
    return createFraction(numerator, denominator);
  };
  
  // 🔹 MULTIPLICATION OF FRACTIONS
  const multiplyFractions = (f1, f2) => {
    const numerator = f1.numerator * f2.numerator;
    const denominator = f1.denominator * f2.denominator;
  
    return createFraction(numerator, denominator);
  };
  
  // 🔹 DIVISION OF FRACTIONS
  const divideFractions = (f1, f2) => {
    const numerator = f1.numerator * f2.denominator;
    const denominator = f1.denominator * f2.numerator;
  
    return createFraction(numerator, denominator);
  };

  const createFractionWithFunctions = (numerator, denominator) => {
    const f1 = createFraction(numerator, denominator)
  
    return {
      ...f1,
      addFractions: (f2) => addFractions(f1, f2),
      subtractFractions: (f2) => subtractFractions(f1, f2),
      multiplyFractions: (f2) => multiplyFractions(f1, f2),
      divideFractions: (f2) => divideFractions(f1, f2),
    }
  }
  
  // 🔹 TESTS
  const f1 = createFraction(3, 4);
  const f2 = createFraction(2, 3);
  
  console.log("Addition:", addFractions(f1, f2));
  console.log("Subtraction:", subtractFractions(f1, f2));
  console.log("Multiplication:", multiplyFractions(f1, f2));
  console.log("Division:", divideFractions(f1, f2));

  const f3 = createFractionWithFunctions(3,4)
  const f4 = createFraction(2,3)

  console.log(f3.addFractions(f4))
  console.log(f3.subtractFractions(f4))
  console.log(f3.multiplyFractions(f4))
  console.log(f3.divideFractions(f4))



const createProductWithFunctions = (name, price, stock) => {
    const product = { name, price, stock }; // Crear el producto base

    return {
        ...product, // Copiar propiedades
        applyDiscount: (percentage) => createProductWithFunctions(name, price * (1 - percentage / 100), stock),
        sellProduct: (quantity) => {
            if (quantity > stock) {
                console.log("Error: No hay suficiente stock");
                return createProductWithFunctions(name, price, stock); // Devuelve el mismo producto sin cambios
            }
            return createProductWithFunctions(name, price, stock - quantity);
        }
    };
};

// 🔹 Crear un producto
const product1 = createProductWithFunctions("Laptop", 1000, 10);

// 🔹 Aplicar un descuento del 20%
const discountedProduct = product1.applyDiscount(20);
console.log("Precio con descuento:", discountedProduct);

// 🔹 Vender 3 unidades
const updatedStockProduct = product1.sellProduct(3);
console.log("Stock después de la venta:", updatedStockProduct);

// 🔹 Intentar vender más stock del disponible
const errorProduct = product1.sellProduct(15);

------------------------------------------------------------
const createBook = (titulo, autor, copias) => {
  const librery = {titulo, autor, copias}

  return {
    ...librery,
    prestarLibro: (quantity) => {
     if (quantity > copias) {
      console.log("Error, no hay suficientes copias")
      return createBook (titulo, autor, copias)
     }
     return createBook (titulo, autor, copias - quantity)
    },
    returnBook: (quantity) => createBook (titulo, autor, copias + quantity)
  }
}


const bookstore = createBook("Brandon", "Messi", 10)
console.log(bookstore)

const prestar = bookstore.prestarLibro(2)
console.log("Las copias totales ahora son: ",prestar.copias)

const devolver = bookstore.returnBook(4)
console.log("Ahora con lo que has devuelto son: ",devolver.copias)

*/

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("María", 25);
console.log(persona1)