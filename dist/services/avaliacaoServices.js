"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class avaliacaoServices {
    constructor() { }
    async readAllAvaliacao() {
        const lerAvaliacao = await prisma.avaliacao.findMany();
        return lerAvaliacao;
    }
    async readAvaliacao(id) {
        const lerAvaliacao = await prisma.avaliacao.findUnique({
            where: {
                id: id
            },
        });
        console.log(lerAvaliacao);
        return lerAvaliacao;
    }
    async createAvaliacao(data) {
        const criaAvaliacao = await prisma.avaliacao.create({
            data,
        });
        return criaAvaliacao;
    }
    async updateAvaliacao(id, data) {
        const atualizaAvaliacao = await prisma.avaliacao.update({
            where: {
                id,
            },
            data,
        });
        return atualizaAvaliacao;
    }
    async deleteAvaliacao(id) {
        const deletaAvaliacao = await prisma.avaliacao.delete({
            where: {
                id,
            },
        });
        return deletaAvaliacao;
    }
}
exports.default = new avaliacaoServices();
