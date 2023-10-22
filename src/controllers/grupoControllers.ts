import  grupoServices  from '../services/grupoServices'
import { Request, Response } from "express";

class grupoControllers{
    constructor(){}

    async listarGrupo(req: Request, res: Response){
        try{
            const listaGrupo = await grupoServices.readAllGrupo();
            return res.status(200).json(
            {
                status:'ok',
                grupo: listaGrupo
            }
        )
        } catch(error){
            res.status(500).json(error)
        }
        
    }

    async buscaGrupo(req: Request, res: Response){
        const id = req.params.id
        try{            
            const grupoBuscado = await grupoServices.readGrupo(id)
            return res.status(200).json(
                    {grupo:grupoBuscado}
            )
        } catch (error){
            res.status(500).json(error)
        }
    }

    async criarGrupo(req: Request, res: Response){
        try{
            const {id, nome_projeto} = req.body;
            const criaGrupo = await grupoServices.createGrupo({id, nome_projeto})
            return res.status(200).json(
                {
                    status: 'ok',
                    criaGrupo,
                }
            )
        } catch(error){
            res.status(500).json(error)
        }
    }

    async atualizarGrupo(req: Request, res: Response){
        try{
            const id = req.params.id
            const {nome_projeto} = req.body;
            const atualizaGrupo = await grupoServices.updateGrupo(id, {nome_projeto})
            return res.status(200).json(
                {
                    status: 'ok',
                    atualizaGrupo,
                    message: 'Grupo alterado'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }

    async deletaGrupo(req: Request, res: Response){
        try{
            const id = req.params.id
            const grupoDeletado = await grupoServices.deleteGrupo(id)
            return res.status(200).json(
                {
                    status: 'ok',
                    grupoDeletado,
                    message: 'Grupo deletado'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }
}

export default new grupoControllers();