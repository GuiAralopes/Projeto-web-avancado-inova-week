"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class grupoServices {
    constructor() { }
    async readAllGrupo() {
        const lerGrupo = await prisma.grupo.findMany();
        return lerGrupo;
    }
    async readGrupo(id) {
        const lerGrupo = await prisma.grupo.findUnique({
            where: {
                id: id
            },
        });
        console.log(lerGrupo);
        return lerGrupo;
    }
    async createGrupo(data) {
        const criaGrupo = await prisma.grupo.create({
            data,
        });
        return criaGrupo;
    }
    async updateGrupo(id, data) {
        const atualizaGrupo = await prisma.grupo.update({
            where: {
                id,
            },
            data,
        });
        return atualizaGrupo;
    }
    async deleteGrupo(id) {
        const deletaGrupo = await prisma.grupo.delete({
            where: {
                id,
            },
        });
        return deletaGrupo;
    }
}
exports.default = new grupoServices();
