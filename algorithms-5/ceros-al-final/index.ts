export default function moverCeros(array: unknown[]): unknown[] {
  if (typeof array !== "object" || !Array.isArray(array)) {
    return [];
  }
  const originalLength = array.length;
  const noZeros = array.filter((item) => item !== 0);
  const zerosToAdd = originalLength - noZeros.length;

  const out = [...noZeros];
  for (let index = 0; index < zerosToAdd; index++) {
    out.push(0);
  }

  return out;
}
