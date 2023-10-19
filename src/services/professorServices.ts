import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProfessorServices {
  constructor() {}

  async readAllProfessor() {
    const lerProf = await prisma.professor.findMany();
    // console.log(lerProf);
    return lerProf
  }

  async readProfessor(matricula: string) {
    const lerProf = await prisma.professor.findUnique({
      where: {
        matricula,
      },
    });
    // console.log(lerProf);
  }

  async createProf(data: {
    id: string;
    nome: string;
    email: string;
    matricula: string;
  }) {
    const criaProf = await prisma.professor.create({
      data,
    });
    return criaProf;
  }

  async updateProf(
    id: string,
    data: { nome: string; email: string; matricula: string }
  ) {
    const atualizaProf = await prisma.professor.update({
      where: {
        id,
      },
      data,
    });
    return atualizaProf;
  }

  async deleteProf(matricula: string) {
    const deletaProf = await prisma.professor.delete({
      where: {
        matricula,
      },
    });
    return deletaProf;
  }
}

export default new ProfessorServices();
