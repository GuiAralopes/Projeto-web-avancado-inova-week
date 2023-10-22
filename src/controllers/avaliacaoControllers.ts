import  avaliacaoServices  from '../services/avaliacaoServices'
import { Request, Response } from "express";

class avaliacaoControllers{
    constructor(){}

    async listarAvaliacao(req: Request, res: Response){
        try{
            const listaAvaliacao = await avaliacaoServices.readAllAvaliacao();
            return res.status(200).json(
            {
                status:'ok',
                avaliacao: listaAvaliacao
            }
        )
        } catch(error){
            res.status(500).json(error)
        }
        
    }

    async buscaAvaliacao(req: Request, res: Response){
        const id = parseInt(req.params.id)
        try{            
            const avaliacaoBuscada = await avaliacaoServices.readAvaliacao(id)
            return res.status(200).json(
                    {avaliacao:avaliacaoBuscada}
            )
        } catch (error){
            res.status(500).json(error)
        }
    }

    async criarAvaliacao(req: Request, res: Response){
        try{
            const {id, nota_avaliacao, professor_id} = req.body;
            const criaAvaliacao = await avaliacaoServices.createAvaliacao({id, nota_avaliacao, professor_id})
            return res.status(200).json(
                {
                    status: 'ok',
                    criaAvaliacao,
                }
            )
        } catch(error){
            res.status(500).json(error)
        }
    }

    async atualizarAvaliacao(req: Request, res: Response){
        const id = parseInt(req.params.id)
            const {nota_avaliacao, professor_id} = req.body;
        try{
            
            const atualizaAvaliacao = await avaliacaoServices.updateAvaliacao(id, {nota_avaliacao, professor_id})
            return res.status(200).json(
                {
                    status: 'ok',
                    atualizaAvaliacao,
                    message: 'Avaliacao alterada!!'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }

    async deletaAvaliacao(req: Request, res: Response){
        const id = parseInt(req.params.id)
        try{
           
            const avaliacaoDeletada = await avaliacaoServices.deleteAvaliacao(id)
            return res.status(200).json(
                {
                    status: 'ok',
                    avaliacaoDeletada,
                    message: 'Avaliacao deletada'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }
}

export default new avaliacaoControllers();