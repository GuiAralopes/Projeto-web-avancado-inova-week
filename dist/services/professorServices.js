"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessorServices = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ProfessorServices {
    constructor() { }
    async readAllProfessor() {
        const lerProfs = await prisma.professor.findMany();
        // console.log(lerProf);
        return lerProfs;
    }
    async readProfessor(id) {
        const lerProf = await prisma.professor.findUnique({
            where: {
                id: id
            },
        });
        console.log(lerProf);
        return lerProf;
    }
    async createProf(data) {
        const criaProf = await prisma.professor.create({
            data,
        });
        return criaProf;
    }
    async updateProf(id, data) {
        const atualizaProf = await prisma.professor.update({
            where: {
                id,
            },
            data,
        });
        return atualizaProf;
    }
    async deleteProf(id) {
        const deletaProf = await prisma.professor.delete({
            where: {
                id,
            },
        });
        return deletaProf;
    }
}
exports.ProfessorServices = ProfessorServices;
exports.default = new ProfessorServices();
//  const blyat = new ProfessorServices();
//  blyat.readProfessor(1)
