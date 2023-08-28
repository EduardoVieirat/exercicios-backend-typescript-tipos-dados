const usuarios: { nome: string; idade: number; status: boolean }[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

function procuraNome(lista: any[], nome: string) {
  const duasSilabas = lista.filter((user) => {
    return user.nome.slice(0, nome.length) === nome;
  });

  return duasSilabas
}

console.log(procuraNome(usuarios, "D"));
