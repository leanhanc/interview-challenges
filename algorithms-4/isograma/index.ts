export default function esIsograma(string: string): boolean {
  const normalized = string
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split("");
  const set = new Set(normalized);

  const original = normalized.join("");
  const nonDuplicates = Array.from(set).join("");

  return original === nonDuplicates;
}
