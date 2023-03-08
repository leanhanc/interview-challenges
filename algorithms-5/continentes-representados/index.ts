type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(array: Registry[]): boolean {
  const searchFor = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const represented: string[] = [];

  array.forEach((dev) => represented.push(dev.continent));
  const uniqueRepresented = [...new Set(represented)].sort();

  return JSON.stringify(searchFor) === JSON.stringify(uniqueRepresented);
}
