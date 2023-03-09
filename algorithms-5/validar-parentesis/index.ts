export default function validarParéntesis(cadena: string): boolean {
  const stack: string[] = [];
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === "(") {
      stack.push(cadena[i]);
    } else if (cadena[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
