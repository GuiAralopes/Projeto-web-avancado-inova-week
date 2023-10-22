import  integrantes_grupoServices  from '../services/integrantes_grupoServices'
import { Request, Response } from "express";

class integrantes_grupoControllers{
    constructor(){}

    async listarIntegrantes_grupo(req: Request, res: Response){
        try{
            const listaIntegrantes_grupo = await integrantes_grupoServices.readAllIntegrantes_grupo();
            return res.status(200).json(
            {
                status:'ok',
                integrantes_grupo: listaIntegrantes_grupo
            }
        )
        } catch(error){
            res.status(500).json(error)
        }
        
    }

    async buscaIntegrantes_grupo(req: Request, res: Response){
        const id = req.params.id
        try{            
            const Integrantes_grupoBuscado = await integrantes_grupoServices.readIntegrantes_grupo(id)
            return res.status(200).json(
                    {integrantes_grupo:Integrantes_grupoBuscado}
            )
        } catch (error){
            res.status(500).json(error)
        }
    }

    async criarIntegrantes_grupo(req: Request, res: Response){
        try{
            const {id, aluno_id, grupo_id} = req.body;
            const criaIntegrantes_grupo = await integrantes_grupoServices.createIntegrantes_grupo({id, aluno_id, grupo_id})
            return res.status(200).json(
                {
                    status: 'ok',
                    criaIntegrantes_grupo,
                }
            )
        } catch(error){
            res.status(500).json(error)
        }
    }

    async atualizarIntegrantes_grupo(req: Request, res: Response){
        try{
            const id = req.params.id
            const {aluno_id, grupo_id} = req.body;
            const atualizaIntegrantes_grupo = await integrantes_grupoServices.updateIntegrantes_grupo(id, {
                aluno_id,
                grupo_id,
            })
            return res.status(200).json(
                {
                    status: 'ok',
                    atualizaIntegrantes_grupo,
                    message: 'Integrante do grupo atualizado'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }

    async deletaIntegrantes_grupo(req: Request, res: Response){
        try{
            const id = req.params.id
            const Integrantes_grupoDeletado = await integrantes_grupoServices.deleteIntegrantes_grupo(id)
            return res.status(200).json(
                {
                    status: 'ok',
                    Integrantes_grupoDeletado,
                    message: 'Integrante do grupo deletado'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }
}

export default new integrantes_grupoControllers();