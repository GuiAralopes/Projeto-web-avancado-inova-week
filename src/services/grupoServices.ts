import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 class grupoServices{
    constructor(){}

    async readAllGrupo(){
        const lerGrupo = await prisma.grupo.findMany();
        return lerGrupo
    }

    async readGrupo(id: string){
        const lerGrupo = await prisma.grupo.findUnique(
            {
                where: {
                    id: id
                },
            })
        console.log(lerGrupo);
        return lerGrupo;
    }

    async createGrupo(data:{id: string, nome_projeto: string}){
        const criaGrupo = await prisma.grupo.create(
            {
                data,
            }
        )
        return criaGrupo;
    }

    async updateGrupo(id: string, data:{nome_projeto: string}){
        const atualizaGrupo = await prisma.grupo.update(
            {
                where:{
                    id,
                },
                data,
            }
        )
        return atualizaGrupo;
    }

    async deleteGrupo(id: string){
        const deletaGrupo = await prisma.grupo.delete(
        {
            where:{
                id,
            },
        }
        ) 
        return deletaGrupo;
    }
}

export default new grupoServices();