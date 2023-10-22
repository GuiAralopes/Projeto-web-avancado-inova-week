import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

 class integrantes_grupoServices{
    constructor(){}

    async readAllIntegrantes_grupo(){
        const lerIntegrantes_grupo = await prisma.integrantes_grupo.findMany();
        return lerIntegrantes_grupo
    }

    async readIntegrantes_grupo(id: string){
        const lerIntegrantes_grupo = await prisma.integrantes_grupo.findUnique(
            {
                where: {
                    id: id
                },
            })
        console.log(lerIntegrantes_grupo);
        return lerIntegrantes_grupo;
    }

    async createIntegrantes_grupo(data:{id: string, aluno_id: string, grupo_id: string}){
        const criaIntegrantes_grupo = await prisma.integrantes_grupo.create(
            {
                data,
            }
        )
        return criaIntegrantes_grupo;
    }

    async updateIntegrantes_grupo(id: string, data:{aluno_id: string, grupo_id: string}){
        const atualizaIntegrantes_grupo = await prisma.integrantes_grupo.update(
            {
                where:{
                    id,
                },
                data,
            }
        )
        return atualizaIntegrantes_grupo;
    }

    async deleteIntegrantes_grupo(id: string){
        const deletaIntegrantes_grupo = await prisma.integrantes_grupo.delete(
        {
            where:{
                id,
            },
        }
        ) 
        return deletaIntegrantes_grupo;
    }
}

export default new integrantes_grupoServices();