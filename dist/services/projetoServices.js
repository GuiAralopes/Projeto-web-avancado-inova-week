"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetoServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProjetoServices {
    constructor() { }
    async readAllProjetos() {
        const projetos = await prisma.projeto.findMany();
        return projetos;
    }
    async readProjeto(id) {
        const projeto = await prisma.projeto.findUnique({
            where: {
                id,
            },
        });
        return projeto;
    }
    async createProjeto(data) {
        const criaProjeto = await prisma.projeto.create({
            data,
        });
        return criaProjeto;
    }
    async updateProjeto(id, data) {
        const atualizaProjeto = await prisma.projeto.update({
            where: {
                id,
            },
            data,
        });
        return atualizaProjeto;
    }
    async deleteProjeto(id) {
        const deletaprojeto = await prisma.projeto.delete({
            where: {
                id,
            },
        });
        return deletaprojeto;
    }
}
exports.ProjetoServices = ProjetoServices;
exports.default = new ProjetoServices();
