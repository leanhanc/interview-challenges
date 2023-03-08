type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

/* 
{
       nombres: ["Juan", "Pedro", "María"],
      edades: [23, 45, 18],
      }
*/
export default function transformador(input: Input): Output[] {
  // TODO: implement
  let ids: Partial<Output>[] = [];

  for (let index = 0; index < Object.keys(input.edades).length; index++) {
    ids.push({ id: index + 1 });
  }

  const output = ids.map((obj, index) => {
    return {
      ...obj,
      nombre: input.nombres[index],
      edad: input.edades[index],
    };
  });

  console.log({ output });

  return output as Output[];
}
