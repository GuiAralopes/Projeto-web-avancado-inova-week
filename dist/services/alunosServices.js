"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class alunosServices {
    constructor() { }
    async readAllAlunos() {
        const lerAlunos = await prisma.aluno.findMany();
        // console.log(lerAlunos);
        return lerAlunos;
    }
    async readAluno(id) {
        const lerAluno = await prisma.aluno.findUnique({
            where: {
                id: id,
            },
        });
        console.log(lerAluno);
        return lerAluno;
    }
    async createAluno(data) {
        const criaAluno = await prisma.aluno.create({
            data,
        });
        return criaAluno;
    }
    async updateAluno(id, data) {
        const atualizaAluno = await prisma.aluno.update({
            where: {
                id,
            },
            data,
        });
        console.log(atualizaAluno);
        return atualizaAluno;
    }
    async deleteAlunos(id) {
        const deletaAluno = await prisma.aluno.delete({
            where: {
                id,
            },
        });
        return deletaAluno;
    }
}
exports.default = new alunosServices();
// const update = new alunosServices();
// update.updateAluno(4, {
//   nome: "Messi da Silva Cardamomo",
//   curso: "Voodoo",
//   email: "carameloychocolate@gmail.com",
//   matricula: "999999999",
//   grupo_id: 1,
// });
