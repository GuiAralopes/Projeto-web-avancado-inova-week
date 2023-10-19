import  alunosServices  from '../services/alunosServices'
import { Request, Response } from "express";

class alunosControllers{
    constructor(){}

    async listarAlunos(req: Request, res: Response){
        const listaAlunos = await alunosServices.readAllAlunos();
        return res.status(200).json(
            {
                status:'ok',
                alunos: listaAlunos
            }
        )
    }

}

export default new alunosControllers()