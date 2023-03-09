export default function posiblePalindromo(num: number): boolean {
  // TODO: implement
  const string = num.toString();
  const toCompare = string.split("").reverse().join("");

  console.log({ string });
  console.log({ toCompare });

  return string === toCompare;
}
