import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ProjetoServices {
  constructor() {}

  async readAllProjetos() {
    const projetos = await prisma.projeto.findMany();
    return projetos;
  }

  async readProjeto(id: number) {
    const projeto = await prisma.projeto.findUnique({
      where: {
        id,
      },
    });
    return projeto;
  }

  async createProjeto(data: {
    id: number;
    tema: string;
    estande: number;
    grupo_id: number;
    data_apresentacao: Date;
    avaliacao_id: number;
  }) {
    const criaProjeto = await prisma.projeto.create({
      data,
    });
    return criaProjeto;
  }

  async updateProjeto(id: number, data: {
    tema: string;
    estande: number;
    grupo_id: number;
    data_apresentacao: Date;
    avaliacao_id: number;
  }) {
    const atualizaProjeto = await prisma.projeto.update({
      where: {
        id,
      },
      data,
    });
    return atualizaProjeto;
  }

  async deleteProjeto(id: number) {
    const deletaprojeto = await prisma.projeto.delete({
      where: {
        id,
      },
    });
    return deletaprojeto;
  }
}

export default new ProjetoServices();
