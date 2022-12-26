function romanToInt2(s: string): number {
  const CONSTANTS = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const CONSTANT_SYMBOLS = ["I", "V", "X", "L", "C", "D", "M"];
  let sumTotal: number = 0;
  let currentNumber: string;
  let nextNumber: string;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < CONSTANT_SYMBOLS.length; j++) {
      if (s[i] === CONSTANT_SYMBOLS[j]) {
        currentNumber = s[i];
        nextNumber = s[i + 1];
        if (CONSTANTS[currentNumber] < CONSTANTS[nextNumber]) {
          sumTotal += -1 * CONSTANTS[currentNumber];
        } else {
          sumTotal += CONSTANTS[currentNumber];
        }
      }
    }
  }
  return sumTotal;
}
