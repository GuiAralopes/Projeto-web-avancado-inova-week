import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 class alunosServices{
    constructor(){}

    async readAllAlunos(){
        const lerAlunos = await prisma.aluno.findMany();
        // console.log(lerAlunos);
        return lerAlunos
    }

    async readAluno(id: string){
        const lerAluno = await prisma.aluno.findUnique(
            {
                where: {
                    id: id
                },
            })
        console.log(lerAluno);
        return lerAluno;
    }

    async createAluno(data:{id: string, nome: string, curso: string, email: string, matricula: string}){
        const criaAluno = await prisma.aluno.create(
            {
                data,
            }
        )
        return criaAluno;
    }

    async updateAluno(id: string, data:{nome: string, curso: string, email: string, matricula: string}){
        const atualizaAluno = await prisma.aluno.update(
            {
                where:{
                    id,
                },
                data,
            }
        )
        return atualizaAluno;
    }

    async deleteAlunos(matricula: string){
        const deletaAluno = await prisma.aluno.delete(
        {
            where:{
                matricula,
            },
        }
        ) 
        return deletaAluno;
    }
}

export default new alunosServices();