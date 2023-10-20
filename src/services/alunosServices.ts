import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class alunosServices {
  constructor() {}

  async readAllAlunos() {
    const lerAlunos = await prisma.aluno.findMany();
    // console.log(lerAlunos);
    return lerAlunos;
  }

  async readAluno(id: number) {
    const lerAluno = await prisma.aluno.findUnique({
      where: {
        id: id,
      },
    });
    console.log(lerAluno);
    return lerAluno;
  }

  public async createAluno(data: {
    id: number;
    nome: string;
    curso: string;
    email: string;
    matricula: string;
    grupo_id: number;
  }) {
    const criaAluno = await prisma.aluno.create({
      data,
    });
    return criaAluno;
  }

  public async updateAluno(
    id: number,
    data: {
      nome: string;
      curso: string;
      email: string;
      matricula: string;
      grupo_id: number;
    }
  ) {
    const atualizaAluno = await prisma.aluno.update({
      where: {
        id,
      },
      data,
    });
    console.log(atualizaAluno);
    return atualizaAluno;
  }

  async deleteAlunos(id: number) {
    const deletaAluno = await prisma.aluno.delete({
      where: {
        id,
      },
    });
    return deletaAluno;
  }
}

export default new alunosServices();

// const update = new alunosServices();
// update.updateAluno(4, {
//   nome: "Messi da Silva Cardamomo",
//   curso: "Voodoo",
//   email: "carameloychocolate@gmail.com",
//   matricula: "999999999",
//   grupo_id: 1,
// });