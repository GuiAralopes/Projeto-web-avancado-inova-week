import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ProfessorServices {
  constructor() {}

  async readAllProfessor() {
    const lerProfs = await prisma.professor.findMany();
    // console.log(lerProf);
    return lerProfs
  }

  async readProfessor(id: number) {
    const lerProf = await prisma.professor.findUnique({
      where: {
          id: id
      },
    })
     console.log(lerProf);
     return lerProf;
  }

  async createProf(data: {
    id: number;
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
    id: number,
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

  async deleteProf(id: number) {
    const deletaProf = await prisma.professor.delete({
      where: {
        id,
      },
    });
    return deletaProf;
  }
}

export default new ProfessorServices();
//  const blyat = new ProfessorServices();
//  blyat.readProfessor(1)