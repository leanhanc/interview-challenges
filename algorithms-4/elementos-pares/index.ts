export default function filtrarPares(array: unknown[]): unknown[] {
  let counter: Record<string, number> = {};
  if (!Array.isArray(array)) return [];
  for (const element of array) {
    if (counter[element] > 0) {
      counter[element] = counter[element] + 1;
    } else {
      counter[element] = 1;
    }
  }

  for (const key in counter) {
    if (counter[key] % 2 !== 0) {
      delete counter[key];
    }
  }

  return Object.keys(counter).map((t) => Number(t));
}
