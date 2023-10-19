import  alunosServices  from '../services/alunosServices'
import { Request, Response } from "express";

class alunosControllers{
    constructor(){}

    async listarAlunos(req: Request, res: Response){
        try{
            const listaAlunos = await alunosServices.readAllAlunos();
            return res.status(200).json(
            {
                status:'ok',
                alunos: listaAlunos
            }
        )
        } catch(error){
            res.status(500).json(error)
        }
        
    }

    async buscaAluno(req: Request, res: Response){
        const id = req.params.id
        try{            
            const alunoBuscado = await alunosServices.readAluno(id)
            return res.status(200).json(
                    {aluno:alunoBuscado}
            )
        } catch (error){
            res.status(500).json(error)
        }
    }

    async criarAluno(req: Request, res: Response){
        try{
            const {id, nome, curso, email, matricula} = req.body;
            const criaAluno = await alunosServices.createAluno({id, nome, curso, email, matricula})
            return res.status(200).json(
                {
                    status: 'ok',
                    criaAluno,
                }
            )
        } catch(error){
            res.status(500).json(error)
        }
    }

    async atualizarAluno(req: Request, res: Response){
        try{
            const id = req.params.id
            const {nome, curso, email, matricula} = req.body;
            const atualizaAluno = await alunosServices.updateAluno(id, {nome, curso, email, matricula})
            return res.status(200).json(
                {
                    status: 'ok',
                    atualizaAluno,
                    message: 'Aluno atualizado com sucesso!!'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }

    async deletaAluno(req: Request, res: Response){
        try{
            const id = req.params.id
            const alunoDeletado = await alunosServices.deleteAlunos(id)
            return res.status(200).json(
                {
                    status: 'ok',
                    alunoDeletado,
                    message: 'Aluno deletado com sucesso'
                }
            )

        } catch(error){
            res.status(500).json(error)
        }
    }
}

export default new alunosControllers()