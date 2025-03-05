type Fraction = {
  numerator: number;
  denominator: number;
};

const createFraction = (numerator: number, denominator: number): Fraction => {
  return { numerator, denominator };
};

// 🔹 ADDITION OF FRACTIONS
const addFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = (f1.numerator * f2.denominator) + (f1.denominator * f2.numerator);
  const denominator = f1.denominator * f2.denominator;
  return createFraction(numerator, denominator);
};

// 🔹 SUBTRACTION OF FRACTIONS
const subtractFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = (f1.numerator * f2.denominator) - (f1.denominator * f2.numerator);
  const denominator = f1.denominator * f2.denominator;
  return createFraction(numerator, denominator);
};

// 🔹 MULTIPLICATION OF FRACTIONS
const multiplyFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = f1.numerator * f2.numerator;
  const denominator = f1.denominator * f2.denominator;
  return createFraction(numerator, denominator);
};

// 🔹 DIVISION OF FRACTIONS
const divideFractions = (f1: Fraction, f2: Fraction): Fraction => {
  const numerator = f1.numerator * f2.denominator;
  const denominator = f1.denominator * f2.numerator;
  return createFraction(numerator, denominator);
};

type FractionWithFunctions = Fraction & {
  addFractions: (f2: Fraction) => Fraction;
  subtractFractions: (f2: Fraction) => Fraction;
  multiplyFractions: (f2: Fraction) => Fraction;
  divideFractions: (f2: Fraction) => Fraction;
};

const createFractionWithFunctions = (numerator: number, denominator: number): FractionWithFunctions => {
  const f1: Fraction = createFraction(numerator, denominator);
  return {
      ...f1,
      addFractions: (f2: Fraction) => addFractions(f1, f2),
      subtractFractions: (f2: Fraction) => subtractFractions(f1, f2),
      multiplyFractions: (f2: Fraction) => multiplyFractions(f1, f2),
      divideFractions: (f2: Fraction) => divideFractions(f1, f2),
  };
};

// 🔹 TESTS
const f1 = createFraction(3, 4);
const f2 = createFraction(2, 3);

console.log("Addition:", addFractions(f1, f2));
console.log("Subtraction:", subtractFractions(f1, f2));
console.log("Multiplication:", multiplyFractions(f1, f2));
console.log("Division:", divideFractions(f1, f2));

const f3 = createFractionWithFunctions(3, 4);
const f4 = createFraction(2, 3);

console.log(f3.addFractions(f4));
console.log(f3.subtractFractions(f4));
console.log(f3.multiplyFractions(f4));
console.log(f3.divideFractions(f4));



