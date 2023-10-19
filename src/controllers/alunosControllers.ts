import  alunosServices  from '../services/alunosServices'
import { Request, Response } from "express";

class alunosControllers{
    constructor(){}

    async listarAlunos(req: Request, res: Response){
        const listaAlunos = await alunosServices.readAllAlunos();
        
    }

}