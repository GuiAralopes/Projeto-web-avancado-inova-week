import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 class alunoServices{
    constructor(){}

    async readAllAlunos(){
        const lerAlunos = await prisma.aluno.findMany();
        console.log(lerAlunos);
    }

    async readAluno(matricula: string){
        const lerAluno = await prisma.aluno.findUnique(
            {
                where: {
                    matricula,
                },
            })
        console.log(lerAluno);
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

export default new alunoServices();





