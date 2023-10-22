import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 class avaliacaoServices{
    constructor(){}

    async readAllAvaliacao(){
        const lerAvaliacao = await prisma.avaliacao.findMany();
        return lerAvaliacao
    }

    async readAvaliacao(id: number){
        const lerAvaliacao = await prisma.avaliacao.findUnique(
            {
                where: {
                    id: id
                },
            })
        console.log(lerAvaliacao);
        return lerAvaliacao;
    }

    async createAvaliacao(data:{id: number, nota_avaliacao: number, professor_id: number}){
        const criaAvaliacao = await prisma.avaliacao.create(
            {
                data,
            }
        )
        return criaAvaliacao;
    }

    async updateAvaliacao(id: number, data:{nota_avaliacao: number, professor_id: number}){
        const atualizaAvaliacao = await prisma.avaliacao.update(
            {
                where:{
                    id,
                },
                data,
            }
        )
        return atualizaAvaliacao;
    }

    async deleteAvaliacao(id: number){
        const deletaAvaliacao = await prisma.avaliacao.delete(
        {
            where:{
                id,
            },
        }
        ) 
        return deletaAvaliacao;
    }
}

export default new avaliacaoServices();